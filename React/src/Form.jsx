import React, { useState } from 'react'


const Container = ({
  Type,
  Label,
  Placeholder,
  value,
  onChange,
  id,
}) => {
  return (
    <span className="flex items-center my-2">
      <label className="text-xl mx-4" htmlFor={id}>
        {Label}
      </label>

      <input
        id={id}
        type={Type}
        placeholder={Placeholder}
        value={value}
        onChange={onChange}
        className="bg-white rounded-sm w-50 h-10 border-2 border-black text-black px-2"
      />
    </span>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      number,
    });

    setName("");
    setEmail("");
    setNumber("");

    console.log("Successfully Submitted!");
  };

  return (
    <div className="w-[90%] h-[40vh] bg-slate-900 py-10 px-10 my-10 mx-[5%] rounded-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <Container
          id="name"
          Type="text"
          Label="Name"
          Placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Container
          id="email"
          Type="email"
          Label="Email"
          Placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Container
          id="number"
          Type="number"
          Label="Number"
          Placeholder="Enter Your Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button
          type="submit"
          className="bg-gray-400 w-25 h-10 my-4 rounded-xl text-xl text-slate-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;