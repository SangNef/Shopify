import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../../assets/register.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault()
        if (password !== cPassword) {
            toast.error("Passwords do not match!");
        }

        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setIsLoading(false);
            toast.success("Registration successful...");
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message);
            setIsLoading(false);
          });
    }

  return (
    <>
    <ToastContainer />
    {isLoading && <Loader />}
      <section className="mt-20 flex justify-center w-full">
        <div className="flex justify-center w-full p-52 z-10">
          <div
            className="w-[500px] flex justify-center items-center flex-col mr-5 animate-up
                        shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(225,226,228)]"
          >
            <h2 className="p-5 font-bold text-3xl text-[#E67B04]">Register</h2>

            <form
              onSubmit={registerUser}
              action=""
              className="flex flex-col items-start w-[80%]"
            >
              <input
                type="text"
                placeholder="Email..."
                className="my-2 w-full border p-2 rounded-md"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password..."
                className="my-2 w-full border p-2 rounded-md"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password..."
                className="my-2 w-full border p-2 rounded-md"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-1 my-2 w-full rounded-md bg-[#E6E6E6] hover:bg-[#E67B04] hover:text-white duration-500"
              >
                Register
              </button>
            </form>

            <p>
              Have an account?{" "}
              <span className="font-bold hover:text-[#E67B04] duration-500">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
          <div className="w-[500px] h-[400px] animate-down">
            <img src={RegisterImg} alt="" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
