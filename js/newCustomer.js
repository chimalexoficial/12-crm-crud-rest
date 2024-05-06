import { showAlert } from "./functions.js";
import { newCustomer } from "./API.js";

(function() {

    const form = document.querySelector('#form');
    form.addEventListener('submit', validateCustomer);

    function validateCustomer(e) {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const company = document.querySelector('#company').value;

        const customer = {
            name,
            email,
            phone,
            company
        }

        if(validate(customer)) {
            console.log('Error');
            showAlert('All fields are required')
            return;
        }

        newCustomer(customer);
        console.log('Success');

    };

    function validate(obj) {
        let isEmpty = false;
        if(obj.name === '' || obj.email === '' || obj.phone === '' || obj.company === '') {
            isEmpty = true;
            console.log(isEmpty);
        }
        return isEmpty;
    }

})();