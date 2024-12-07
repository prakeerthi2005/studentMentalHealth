// import React, { useState } from 'react';
// import Header from './Header';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export default function Userloandetails() {
//     const [loandetails, setLoandetails] = useState({
//         fullname: "",
//         loanType: "",
//         email: "",
//         phoneNumber: "",
//         document: null
//     });

//     const handleChange = (e) =>{
//         console.log(`Userloandetails entering: {${e.target.name}: ${e.target.value}}`);
//         setLoandetails({
//             ...loandetails,
//             [e.target.name] : e.target.value,
//         })
//     }

//     const navigate = useNavigate();

//     const handleSubmit = async(e) =>{
//         e.preventDefault();
//         console.log("moving to axios...")
//         console.log(loandetails);
//         const responce = await axios.post("http://localhost:9090/loandetails",{
//             loandetails,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         console.log("after to axios...")
//         console.log(loandetails);


//         if(responce.status == 200){
//             alert("Loan Details Submitted Successfully");
//             navigate("/home");
//         }
//         else{
//             alert("Failed to Submit Loan Details");
//             navigate("/userloandetails");
//         }
//         console.log(loandetails);
//         console.log("full complete to axios...")
//     }
//   return (
//     <div>
//       <Header />

//       <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
//             <label>Fullname:</label>
//             <input type="text" id="fullname" name="fullname" style={{color: 'black'}} placeholder="fullname" onChange={handleChange} value={loandetails.fullname || ''} required/><br/><br/>

//             <label>Loan Type:</label>
//             <select name="loanType"  style={{color: 'black'}} onChange={handleChange} value={loandetails.loanType || ''} required>
//                 <option value="personalloans">Personal Loans</option>
//                 <option value="homeloans">Home Loans</option>
//                 <option value="agricultureloans">Agriculture Loans</option>
//                 <option value="educationloans">Education Loans</option>
//             </select><br/><br/>

//             <label>Email:</label>
//             <input type="text" id="email" name="email" placeholder="email" style={{color: 'black'}} onChange={handleChange} value={loandetails.email || ''} required/><br/><br/>

//             <label>Phone Number:</label>
//             <input type="text" id="phonenumber" name="phoneNumber" placeholder="phonenumber" style={{color: 'black'}} onChange={handleChange} value={loandetails.phoneNumber || ''} required/><br/><br/>

//             <label>Documents For Loan (Image):</label>
//             <input type="file" id="document" name="document" style={{color: 'black'}} onChange={handleChange} value={loandetails.document || ''} required/><br/><br/>

//             <button type="submit" >Submit</button>
//         </form>
//     </div>
//   )
// }

import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MentalHealthForm() {
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    document: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setDetails({
      ...details,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", details.fullname);
    formData.append("email", details.email);
    formData.append("phoneNumber", details.phoneNumber);
    formData.append("document", details.document);

    try {
      const response = await axios.post("http://localhost:9090/mentalhealthdetails", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert("Details Submitted Successfully");
        navigate("/home");
      } else {
        alert("Submission Failed");
      }
    } catch (error) {
      console.error("Error submitting details:", error);
      alert("Submission Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 p-6">
      <Header />
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Mental Health Support Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name:</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              value={details.fullname || ''}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={details.email || ''}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={details.phoneNumber || ''}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Document Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Supporting Documents (Image):</label>
            <input
              type="file"
              name="document"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
