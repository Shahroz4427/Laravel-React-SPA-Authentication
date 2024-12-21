

import CustomerCards from "../widgets/customers/CustomerCards";
import CustomerTable from '../widgets/customers/CustomerTable'
import CustomerForm from "../widgets/customers/CustomerForm";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useCustomers from "../hooks/useCustomers";
import OffCanvas from "../components/OffCanvas";
import Layout from '../layout/Layout'
import { useState } from "react";


const Customers = () => {

    useDocumentTitle('Customers');

    const { data, isLoading, pagination, search, sorting, showAlert, refetch } = useCustomers();

    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    return (
        <Layout>
            <OffCanvas
                title="New Customer"
                isOpen={isOffCanvasOpen}
                onClose={() => setIsOffCanvasOpen(false)}
            >
                <CustomerForm
                    close={() => setIsOffCanvasOpen(false)}
                    refetchData={refetch}
                />
            </OffCanvas>
            <CustomerCards />
            <CustomerTable
                data={data?.data || []}
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


