import React from "react";

function Form() {
  return (
    <form>
      <label>Name</label><br />
      <input type="text" placeholder="Enter Name" /><br /><br />

      <label>Email</label><br />
      <input type="email" placeholder="Enter Email" /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;