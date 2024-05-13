import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-200">
      <form className="h-[330px] bg-white w-[310px] rounded-lg">
        <span className="h-[20%] items-center justify-center  flex text-[25px] text-skyblue">
          <h5>Sign In</h5>
        </span>
        <div className="flex flex-col justify-center items-center h-[60%] gap-[10%]">
          <div></div>
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

          <div className=" items-center justify-center  flex text-lg w-[100%]">
            <button className="bg-orange-500 text-white w-[60%] p-1 rounded-lg">
              Sign In
            </button>
          </div>
        </div>

        <Link to="/register">
          <div className="flex justify-center">
            <p>or Get Registered</p>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
