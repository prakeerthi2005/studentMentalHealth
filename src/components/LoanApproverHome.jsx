import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function LoanApproverHome() {
  const [loanDetails, setLoanDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9090/getallloanuserdetails')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLoanDetails(data || []);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching loan details:', error);
      });
  }, []);

  const [loading, setLoading] = useState(false);

  const approvesend = async (loan, row) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:9090/approveLoan/${loan.id}`, {
        method: 'POST'
      })

      if(!response.ok){
        throw new Error(`Failed to approve loan: ${response.statusText}`);
      }

      const message = await emailjs.send(
        'service_y9h5hak',  // Replace with your actual service ID
        'template_u52s1i3',  // Replace with your actual template ID
        {
          to_email: loan.email,
          to_name: loan.fullname,
          subject: 'Congratulations!!!',
          message: `Dear ${loan.fullname},\n\nCongratulations, your loan that you have requested is approved. You can approach our bank for further details.`,
        },
        '0n0Js_YgUOq7SaIMC'  // Replace with your actual EmailJS user ID
      );
      console.log('Email sent successfully:', message);
  
      setLoanDetails((prevLoanDetails) => 
        prevLoanDetails.filter((_, index) => index !== row)
      );
  
    } catch (err) {
      console.error('Error sending email:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const rejectsend = async (loan, row) => {
    setLoading(true);
    try {

      const response = await fetch(`http://localhost:9090/rejectLoan/${loan.id}`, {
        method: 'POST'
      })

      if(!response.ok){
        throw new Error(`Failed to approve loan: ${response.statusText}`);
      }

      const message = await emailjs.send(
        'service_y9h5hak',  // service ID
        'template_islilp2',  // template ID
        {
          to_email: loan.email,
          to_name: loan.fullname,
          email: loan.email,
          subject: 'Loan Application Status Update',
          message: `Dear ${loan.fullname},\n\nThank you for applying for a loan with us. After careful consideration, we regret to inform you that we are unable to approve your loan request at this time. We apologize for any inconvenience this may cause and encourage you to apply again in the future.\n\nIf you have any questions or need further clarification, please feel free to contact us.\n\n phone number: ${loan.phonenumber}`,
        },
        '0n0Js_YgUOq7SaIMC'  // EmailJS user ID
      );
      console.log('Email sent successfully:', message);
  
      setLoanDetails((prevLoanDetails) =>
        prevLoanDetails.filter((_, index) => index !== row)
      );
  
    } catch (err) {
      console.error('Error sending email:', err);
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div>
      <center>
        <h2>Loan Approver Home</h2>
      </center>

      {error ? (
        <div className="alert alert-danger">
          <strong>Error:</strong> {error}
        </div>
      ) : (
        <div className="container mt-5">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Loan Type</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Loan Certificate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loanDetails && loanDetails.length > 0 ? (
                loanDetails.map((loan, index) => (
                  <tr key={index}>
                    <td id="dsTable">{loan.id}</td>
                    <td>{loan.fullname}</td>
                    <td>{loan.loantype}</td>
                    <td>{loan.email}</td>
                    <td>{loan.phonenumber}</td>
                    <td>
                      {loan.loanCertificateBase64 ? (
                        <a href={`data:image/png;base64,${loan.loanCertificateBase64}`} target='_blank' style={{cursor: 'pointer'}}><img
                          src={`data:image/png;base64,${loan.loanCertificateBase64}`}
                          alt="Loan Certificate"
                          style={{ width: '100px', height: 'auto' }}
                        /> </a>
                      ) : (
                        <span>No certificate available</span>
                      )}
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => approvesend(loan, index)}
                        disabled={loading}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        onClick={() => rejectsend(loan, index)}
                        disabled={loading}
                        style={{ paddingLeft: '12px' }}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No loan details available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}