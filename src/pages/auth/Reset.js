import React from 'react';
import resetImg from "../../assets/forgot.png"
import { Link } from 'react-router-dom';

const Reset = () => {
    return (
      <section className="mt-20 flex justify-center items-center w-full p-52">
        <div className="w-[500px] h-[400px] animate-down">
          <img src={resetImg} alt="" className="object-cover" />
        </div>
        <div
          className="w-[500px] flex justify-center items-center flex-col animate-up 
                  shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(225,226,228)]"
        >
          <h2 className="p-5 font-bold text-3xl text-[#E67B04]">
            Reset Password
          </h2>

          <form action="" className="flex flex-col items-start w-[80%]">
            <input
              type="text"
              placeholder="Email..."
              className="my-2 w-full border p-2 rounded-md"
              required
            />

            <button className="px-3 py-1 my-2 w-full rounded-md bg-[#E6E6E6] hover:bg-[#E67B04] hover:text-white duration-500">
              reset
            </button>
          </form>
          <p>-- or --</p>

          <p className="mb-5 w-[80%] flex justify-between">
            <span className="font-bold hover:text-[#E67B04] duration-500">
              <Link to='/login'>- Login</Link>
            </span>
            <span className="font-bold hover:text-[#E67B04] duration-500">
              <Link to='/register'>- Register</Link>
            </span>
          </p>
        </div>
      </section>
    );
};

export default Reset;