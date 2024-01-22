import React from "react";
import { useState } from "react";

export default function Form({ AddUser }) {
  const [user, setUser] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    city: "",
    profession: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    user.id = Date.now();
    AddUser(user);

    setUser({
      name: "",
      age: "",
      phone: "",
      email: "",
      city: "",
      profession: "",
    });
  };

  return (
    <>
      <h3>Додати користувача</h3>
      <form onSubmit={handelSubmit} className="userForm">
        <input
          type="text"
          placeholder="ПІБ"
          required
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Вік"
          required
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Номер телефону"
          required
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Електронна пошта"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Місто"
          required
          value={user.city}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="Професія"
          required
          value={user.profession}
          onChange={(e) => setUser({ ...user, profession: e.target.value })}
        />
        <button type="submit" value="add user" id="formButton">
          Додати
        </button>
      </form>
    </>
  );
}
