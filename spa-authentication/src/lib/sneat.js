import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css';
import CustomersService from "../services/CustomersService";

const successToast = (message) => {
    Swal.fire({
        icon: "success",
        title: message,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
}


const dangerAlert = (id,refetch) => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then((result) => {
        if (result.value) {
            CustomersService.destroyCustomer(id).then(() => {
                successToast("Deleted");
                refetch();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {

        }
    })
}

export { successToast, dangerAlert };