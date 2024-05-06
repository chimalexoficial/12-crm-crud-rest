const url = 'http://localhost:4000/customers'; //endpoint

export const newCustomer = async customer => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}

export const getCustomers = async () => {
    try {
        const req = await fetch(url);
        const res = req.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const deleteCustomer = async customerId => {
    try {
        await fetch(`${url}/${customerId}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

export const getCustomerById = async customerId => {
    try {
       const res = await fetch(`${url}/${customerId}`);
       const req = await res.json();
       return req;
    } catch(error) {
        console.log(error);
    }
}