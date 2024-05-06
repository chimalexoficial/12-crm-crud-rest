import { getCustomerById } from './API.js'

(function() {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const companyInput = document.querySelector('#company');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parameterURL = new URLSearchParams(window.location.search);
        const customerId = parameterURL.get('id');
        const customer = await getCustomerById(customerId);

        editCustomer(customer);

        // Submit al form
        const form = document.querySelector('#form');
        form.addEventListener('submit', validateCustomer);
        
        function editCustomer(customer) {
            const {name, email, phone, company, id} = customer;
            nameInput.value = name;
            emailInput.value = email;
            phoneInput.value = phone;
            companyInput.value = company;
            idInput.value = id;
        }

        function validateCustomer(e) {
            const customer = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                company: idInput.value,
                id: idInput.value
            }

            console.log(customer);
    

        }
    })
})();