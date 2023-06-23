import React from "react";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <section className="mt-20 flex justify-center items-center w-full p-52">
      <div className="w-[500px] h-[400px] animate-down">
        <img src={loginImg} alt="" className="object-cover" />
      </div>
      <div
        className="w-[500px] flex justify-center items-center flex-col animate-up 
                  shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(225,226,228)]"
      >
        <h2 className="p-5 font-bold text-3xl text-[#E67B04]">Login</h2>

        <form action="" className="flex flex-col items-start w-[80%]">
          <input
            type="text"
            placeholder="Email..."
            className="my-2 w-full border p-2 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password..."
            className="my-2 w-full border p-2 rounded-md"
            required
          />
          <button className="px-3 py-1 my-2 w-full rounded-md bg-[#E6E6E6] hover:bg-[#E67B04] hover:text-white duration-500">
            Login
          </button>
          <div className="my-2 w-full">
            <p className="text-center">
              You don't remember password?{" "}
              <span className="font-bold">
                <Link to="/reset" className="hover:text-[#E67B04] duration-500">
                  Reset
                </Link>
              </span>
            </p>
          </div>
        </form>
        <p>-- or --</p>
        <button className="px-3 py-1 my-2 w-[80%] flex items-center justify-center rounded-md bg-[#E67B04] text-white">
          <BsGoogle className="mr-2" />
          Login With Google
        </button>
        <p className="mb-5">
          Don't have account?{" "}
          <span className="font-bold hover:text-[#E67B04] duration-500">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
