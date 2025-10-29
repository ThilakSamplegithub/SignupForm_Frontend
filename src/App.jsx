import { useState } from "react";
import "./App.css";
import image from "./assets/image.jpg";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import axios from "axios";
import useInput from "./hooks/useInput";
function App() {
    //custom hook
    const fullname=useInput('','fullname')
    const email=useInput('','email')
    const password=useInput('','password')
  const [status,setStatus]=useState('')
  const [isSuccess,setSuccess]=useState(false)
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const lowerCaseEmail=email.toLowerCase()
    try {
      const res = await axios.post(`${baseUrl}/user/signup`, {fullname:fullname.value,email:email.value,password:password.value});
      console.log(res,'is response')
      fullname.reset()
      email.reset()
      password.reset()
      setStatus(res.data.message || "Signup successful!");
      setSuccess(true)

    } catch (error) {
      console.error(error.response.data.message,'is error');
      setStatus(error.response?.data?.message || "Signup failed!");
      setSuccess(false)
    }
  };
  return (
    <div className="flex justify-center items-center bg-rose-50 min-h-screen">
      <div className="flex flex-col md:relative  my-6 md:my-2 md:flex-row justify-center items-center md:items-stretch shadow-xl w-1/2 md:w-full md:max-w-4xl">
        <form onSubmit={handleSubmit} className="p-6 md:p-24  rounded-3xl md:rounded-r-none  bg-white flex flex-col space-y-8 justify-center items-center w-full md:w-1/2">
          {/* <!-- login div --> */}
          <div className="flex justify-between w-full">
            <div className="text-3xl font-bold md:text-left">Sign Up</div>
            <div className="h-10 md:absolute md:right-4 md:top-4 w-10 p-1 rounded-full bg-gray-300 flex justify-center items-center hover:-translate-y-0.5 transition duration-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <path
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.5 15.5l-10-10zm0-10l-10 10"
                  stroke-width="1"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start">
            Sign-up in to your account to visit dashboard.
          </div>

          <input name={'fullname'} onChange={fullname.handleChange} value={fullname.value} type={'text'} placeholder={'Enter your fullname'} />
          <input name={'fullname'} onChange={email.handleChange} value={email.value} type={'text'} placeholder={'Enter your email'} />
          {/* ✅ Pass callback to PasswordValidator */}
          <input  name={'password'} onChange={password.handleChange} value={password.value} type={'text'} placeholder={'Enter your password'} />
    {password.value && (
        <ul className='mt-2 text-left text-sm text-black'>
            <li style={{ color:password.color, fontWeight: "bold" }}>{password.message}</li>
        </ul>
    )}          {/* Till heree */}
          {status && <p  className={`text-center ${isSuccess?"text-cyan-700":"text-red-700"} w-full`}>{status}</p>}
          <button type="submit"
            className="w-full rounded-lg py-6  flex justify-center items-center bg-cyan-700 hover:-translate-y-0.5 hover:bg-cyan-600 transition duration-200 space-x-3"
          >
            <div className="text-white capitalize">Next</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7"
                stroke-width="1"
              />
            </svg>
          </button>
          <div className="w-full border border-t-gray-300"></div>
          <p className="text-center text-sm text-gray-400 w-full">
            or log in with
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full">
            {/* <!-- 1st div --> */}
            <div className="flex justify-center hover:-translate-y-0.5 hover:border-b-0 hover:bg-opacity-30 hover:shadow-lg hover: items-center border border-gray-300 rounded-lg px-6 py-4 space-x-3">
              <img className="w-8" src={facebook} alt="" />
              <p className="capitalize font-sanserif text-lg">Facebook</p>
            </div>
            {/* <!-- 2nd div --> */}
            <div className="flex justify-center items-center hover:-translate-y-0.5 hover:border-b-0 hover:shadow-lg hover:bg-opacity-30 border border-gray-300 rounded-lg px-6 py-4 space-x-3">
              <img className="w-8" src={google} alt="" />
              <p className="capitalize font-sanserif text-lg">Google</p>
            </div>
          </div>
        </form>
        {/* <!-- image div --> */}
        <img className="hidden md:block w-[430px]" src={image} alt="" />
      </div>
    </div>
  );
}

export default App;
