import React from "react";

const student = {
    email: "abcd@gmail.com",
    mobileno: 1234567899,
  };
const Contact=()=>{
    return(
<>
<h2>Contact</h2>
<div class="Contact">
          <h2>{student.name}</h2>
          <p><b>Email id:</b>{student.email}</p>
          <p><b>Mobile no :</b>{student.mobileno}</p>
        </div>
</>
    );
};

export default Contact