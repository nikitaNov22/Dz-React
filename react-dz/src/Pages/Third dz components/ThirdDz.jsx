import React from "react";
import { useState } from "react";
import "./ThirdDz.css";
import { users as dataUsers } from "./DataUsers";
import Form from "./UserForm";
import { Link } from "react-router-dom";

export default function ThirdDz() {
  const [users, setUsers] = useState([...dataUsers]);
  const AddUser = (user) => {
    setUsers([...users, { ...user }]);
  };

  return (
    <main>
      <div className="container">
        <h2>Список користувачів</h2>
        <div className="contentContainer">
          <div className="usersList">
            <div>
              {users.map((el) => (
                <div className="userBlock" key={el.id}>
                  <h4>{el.name}</h4>
                  <div className="userData">
                    <div>
                      <ul className="userList">
                        <li className="textLi">
                          <span>Вік:</span> {el.age};
                        </li>
                        <li className="textLi">
                          <span>Номер телефону:</span> {el.phone};
                        </li>
                        <li className="textLi">
                          <span>Електронна пошта:</span> {el.email};
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="userList">
                        <li className="textLi">
                          <span>Місто:</span> {el.city};
                        </li>
                        <li className="textLi">
                          <span>Професія:</span> {el.profession};
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="userForm">
            <Form AddUser={AddUser} />
            <p className="textParagraph">
              Для переходу на сторінку завантаження фото, введіть у шляху
              "/thirdDz" - "/~будь яке слово~" або натисніть:
              <Link to="/thirdDz/:uploadFile">
                <span id="upload"> Upload file</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
