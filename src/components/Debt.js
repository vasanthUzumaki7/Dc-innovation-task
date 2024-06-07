import React from 'react'

const Debt = () => {
    const debtData = [
        {
          id: 1, serial_no: "001", customer_no: "C001", name: "John Smith", total: 150.75
        },
        {
          id: 2, serial_no: "002", customer_no: "C002", name: "Alice Johnson", total: 200.00
        },
        {
          id: 3, serial_no: "003", customer_no: "C003", name: "Robert Brown", total: 320.50
        },
        {
          id: 4, serial_no: "004", customer_no: "C004", name: "Maria Garcia", total: 100.00
        },
        {
          id: 5, serial_no: "005", customer_no: "C005", name: "Michael Davis", total: 250.25
        },
        {
          id: 6, serial_no: "006", customer_no: "C006", name: "Laura Wilson", total: 175.75
        },
        {
          id: 7, serial_no: "007", customer_no: "C007", name: "James Martinez", total: 400.00
        },
        {
          id: 8, serial_no: "008", customer_no: "C008", name: "Daniel Thompson", total: 89.99
        },
        {
          id: 9, serial_no: "009", customer_no: "C009", name: "Emma Hernandez", total: 560.75
        },
        {
          id: 10, serial_no: "010", customer_no: "C010", name: "Sophia Lee", total: 310.10
        }
      ];
      
      
  return (
    <div className='debt-container'>
      <h1>Debt Page</h1>
      <table>
        <thead>
          <tr>
            <td>Serial Number</td>
            <td>Customer Name</td>
            <td>Customer Number</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {debtData.map((item) => (
            <tr key={item.id}>
              <td>{item.serial_no}</td>
              <td>{item.name}</td>
              <td>{item.customer_no}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Debt
