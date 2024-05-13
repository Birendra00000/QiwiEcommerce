import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-200">
      <form className="h-[360px] bg-white w-[310px] rounded-lg">
        <span className="h-[20%] items-center justify-center  flex text-[25px] text-skyblue">
          <h5>Sign Up</h5>
        </span>
        <div className="flex flex-col justify-center items-center h-[50%] gap-[10%]">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border rounded-lg p-1"
            />
          </div>
          <div>
            {" "}
            <input
              type="email"
              placeholder="E-mail"
              className="border rounded-lg p-1"
              name="email"
            />
          </div>
          <div>
            {" "}
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg p-1"
              name="password"
            />
          </div>
        </div>
        <div className="h-[30%] items-center justify-center  flex text-lg w-[100%] flex-col gap-[7%]">
          <button className="bg-orange-500 text-white w-[60%] p-1 rounded-lg">
            Sign Up
          </button>

          <Link to="/login">
            <div className="flex justify-center">
              <p>or Get SingIn</p>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
