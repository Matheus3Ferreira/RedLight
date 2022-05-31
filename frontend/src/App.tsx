import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import "./App.css";

interface IGuest {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
}

function App() {
  const [guest, setGuest] = useState<IGuest>({
    name: "",
    email: "",
    password: "",
    phone: "",
    cpf: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios.post("http://localhost:3333/api/guest", guest).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            required
            name="name"
            value={guest.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            required
            name="email"
            value={guest.email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            required
            name="password"
            value={guest.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            required
            name="phone"
            value={guest.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input
            type="text"
            required
            name="cpf"
            value={guest.cpf}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
