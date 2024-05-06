import { getCustomers, deleteCustomer } from "./API.js";


(function () {

    const listCustomers = document.querySelector('#list-customers');

    listCustomers.addEventListener('click', confirmDelete);

    document.addEventListener('DOMContentLoaded', showCustomers);

    async function showCustomers() {
        const customers = await getCustomers();
        
        customers.forEach((customer) => {
            const {name, email, phone, company, id} = customer;
            const row = document.createElement('tr');
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${phone}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${company}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="edit-customer.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-customer="${id}" class="text-red-600 hover:text-red-900 delete">Delete</a>
                </td>
            `;
            listCustomers.appendChild(row);
        })
    }

    function confirmDelete(e) {
       if(e.target.classList.contains('delete')) {
        const customerId = e.target.dataset.customer;
        
        const confirmWindow = confirm('Are you sure?');

        if(confirmWindow) {
            deleteCustomer(customerId);
        }
       }
    }

})();

