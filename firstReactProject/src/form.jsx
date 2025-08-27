import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please enter a name");
    } else if (email === "") {
      alert("Please enter an email");
    } else {
      console.log(name, email);
      alert("Form submitted");
      setName("");
      setEmail("");
    }
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
