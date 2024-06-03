import React from 'react';

const Billing = () => {
    const billingDetails = [
        {
            orderId: 1,
            customerId: 101,
            username: 'jdoe',
            mobileNumber: '9876543210',
            serviceName: 'Passport Renewal',
            description: 'Standard processing',
            quantity: 1,
            total: 1500,
            date: '06/10/2024'
        },
        {
            orderId: 2,
            customerId: 102,
            username: 'asmith',
            mobileNumber: '8765432109',
            serviceName: 'Driver\'s License',
            description: 'New application',
            quantity: 1,
            total: 1200,
            date: '06/10/2024'
        },
        {
            orderId: 3,
            customerId: 103,
            username: 'bwhite',
            mobileNumber: '7654321098',
            serviceName: 'Birth Certificate',
            description: 'Copy issuance',
            quantity: 2,
            total: 600,
            date: '06/10/2024'
        },
        {
            orderId: 4,
            customerId: 104,
            username: 'ccampbell',
            mobileNumber: '6543210987',
            serviceName: 'Marriage Certificate',
            description: 'Certified copy',
            quantity: 1,
            total: 800,
            date: '06/10/2024'
        },
        {
            orderId: 5,
            customerId: 105,
            username: 'ddavis',
            mobileNumber: '5432109876',
            serviceName: 'ID Card',
            description: 'Renewal',
            quantity: 1,
            total: 500,
            date: '06/10/2024'
        },
        {
            orderId: 6,
            customerId: 106,
            username: 'emiller',
            mobileNumber: '4321098765',
            serviceName: 'Visa Application',
            description: 'Tourist visa',
            quantity: 1,
            total: 2000,
            date: '06/10/2024'
        }
    ];

    return (
        <div>
            <div  className='billing-head'>
            <h1>Billing Details</h1>
            <form>
                <input type="text" placeholder="Enter mobile Number" />
                <button type="submit">Register</button> 
            </form>
            </div>
            <div className='billing-container'>
            <table className='billing-table'>
                <thead>
                    <tr>
                        <td>Order id</td>
                        <td>Customer id</td>
                        <td>User Name</td>
                        <td>Mobile Number</td>
                        <td>Service Name</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {billingDetails.map((item) => (
                        <tr key={item.orderId}>
                            <td>{item.orderId}</td>
                            <td>{item.customerId}</td>
                            <td>{item.username}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.serviceName}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.total}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Billing;
