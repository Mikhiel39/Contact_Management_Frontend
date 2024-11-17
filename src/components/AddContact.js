import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
// HERE ABOVE useHistory IS REPLACED WITH useNavigate 

function AddContact(props) {
    
    const navigate=useNavigate();
    const [User, setUser] = useState({firstName:"", lastName:"", email:"", phoneNumber:"", company:"", jobTitle:""});
    
    let add = (e) => {
        e.preventDefault();
        if (
          User.firstName === "" ||
          User.lastName === "" ||
          User.email === "" ||
          User.phoneNumber === "" ||
          User.company === "" ||
          User.jobTitle === ""
        ) {
          alert("All fields are mandatory!!!");
          return;
        }
        // THIS IS USED TO SHOW THE LIST DATA ON THE APP.JS FILE 
        props.addContactHandler(User);
        // THIS IS USED FOR WHEN THE ADD BUTTON IS PRESSED THE INPUT FILED AGAIN GETS EMPTY
        setUser({firstName:"", lastName:"", email:"", phoneNumber:"", company:"", jobTitle:""});
        //console.log(props);
        navigate('/');
    }
    
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={User.firstName}
              onChange={(e) => setUser({ ...User, firstName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={User.lastName}
              onChange={(e) => setUser({ ...User, lastName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={User.email}
              onChange={(e) => setUser({ ...User, email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={User.phoneNumber}
              onChange={(e) =>
                setUser({ ...User, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={User.company}
              onChange={(e) => setUser({ ...User, company: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={User.jobTitle}
              onChange={(e) => setUser({ ...User, jobTitle: e.target.value })}
            />
          </div>
          <button className="ui secondary button">Add</button>
        </form>
      </div>
    );
}

export default AddContact
