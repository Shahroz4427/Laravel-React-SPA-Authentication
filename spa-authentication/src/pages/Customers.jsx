

import CustomerCreationForm from "../includes/Customer/CustomerCreationForm";
import CustomerIndexCards from "../includes/Customer/CustomerIndexCards";
import CustomerDataTable from "../includes/Customer/CustomerDataTable";
import CustomersService from "../services/CustomersService";
import useCustomers from "../hooks/useCustomers";
import OffCanvas from "../components/OffCanvas";
import { successToast } from "../lib/sneat";
import { useState } from "react";
import Layout from "../Layout"
import { useRef } from 'react';




const Customers = () => {

    const childRef = useRef();

    const { data, isLoading, pagination, search, sorting, showAlert, refetch } = useCustomers();

    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    const handleClearErrors = () => {
        if (childRef.current) {
            childRef.current.clearErrors();
        }
    };

    const handleResetForm = () => {
        if (childRef.current) {
            childRef.current.reset();
        }
    };

    const handleSetErrors = (fieldName, errorObject) => {
        if (childRef.current) {
            childRef.current.setError(fieldName, errorObject);
        }
    };


    const handleSubmit = (data) => {
        CustomersService.createCustomer(data)
            .then(() => {
                successToast('Customer Added')
                handleResetForm();
                handleClearErrors();
                refetch();
                setIsOffCanvasOpen(false);
            })
            .catch((error) => {
                if (error.response.data.message === "The email has already been taken.") {
                    handleSetErrors('email', {
                        type: 'manual',
                        message: 'This email is already taken. Please use another one.'
                    });
                }
            });
    };



    return (
        <Layout>
            <OffCanvas title="New Customer" isOpen={isOffCanvasOpen} onClose={() => setIsOffCanvasOpen(false)}>
                <CustomerCreationForm
                    close={() => setIsOffCanvasOpen(false)}
                    submit={handleSubmit}
                    ref={childRef}
                />
            </OffCanvas>
            <CustomerIndexCards />
            <CustomerDataTable data={data?.data || []}
                meta={data?.meta || {}}
                isLoading={isLoading}
                pagination={pagination}
                sorting={sorting}
                search={search}
                onDeleteAlert={showAlert}
                onOpenCanvas={() => setIsOffCanvasOpen(true)}
            />
        </Layout>
    )
}

export default Customers


