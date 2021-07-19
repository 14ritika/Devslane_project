import React, {FC,  memo} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSpinner} from "react-icons/fa";
import * as yup from 'yup';
import { useFormik } from 'formik';
import Input from '../components/Input';


interface Props {}


const Login: FC<Props> =(props) => {
  const history = useHistory();

    const {
      handleSubmit,
      getFieldProps,
      touched,
      isSubmitting,
      errors,
      isValid,
    } = useFormik({
      initialValues:{
        email:"",
        password: "",
      },
      validationSchema: yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
      onSubmit: (data, {setSubmitting}) => {
        console.log("form submitting", data);
        setTimeout(() => {
          console.log("form submittted successfully");
          setSubmitting(false);
          history.push('/dashboard');
        }, 5000);
      }
    });

    return (
      <div className="min-h-screen lg:w-1/2 w-screen flex  justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-8 lg:py-12 ">
      <div className="max-w-md w-3/4 space-y-8">
        <div className="text-left mb-16">
          <h2 className="text-2xl md:text-4xl pb-3">Log In to <span className="text-blue-600 font-medium">CORK</span></h2>
          <p className="mt-2 font-medium text-sm text-gray-600">
          New Here? 
          <span className="">
          <Link to="/signUp" className="font-medium text-indigo-600 hover:text-indigo-500 px-2 border-indigo-500 border-b-2">Create an account
            </Link>
          </span>
            
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit
             // *------common code ------*
          // console.log("login with data:", data);
          // event.preventDefault();

          // if (emailError || passwordError){
          //   return;
          // }

          // setSubmitting(true);
          
          // setTimeout(() => {
          //   console.log("succesfful");

          //   history.push("/dashboard");
          // },5000);
        }>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className=" -space-y-px">
            <div>
            <Input
               id="email"
               type = "email"
               autoComplete="email"
               required
               touched={touched.email}
               error = {errors.email}
               {...getFieldProps("email")}
               placeholder="Email"
               />
            </div>
          </div>
            <div>
              <Input
               id="password"
               type = "password"
               autoComplete="current-password"
               required
               touched={touched.password}
               error = {errors.password}
               {...getFieldProps("password")}
               placeholder="Password"
               />
            </div>

          <div className="flex justify-between">
            <p>Show Password</p>
            <button
              type="submit"
              disabled={!isValid}
              className="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:shadow-none focus:outline-none shadow-lg"
            >
              Log In
            </button>

            {isSubmitting && 
              <FaSpinner className="mt-5 animate-spin" />}
            
            
          </div>

          <div className="flex flex-col items-center justify-between py-2">
            <div className="flex items-center py-2">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-base text-gray-400 tracking-wider">
              Keep me logged in
              </label>
            </div>

            <div className="text-sm py-2">
              <Link to="www.google.com" className="font-medium tracking-wider text-base text-indigo-600 hover:text-indigo-500 ">
                Forgot email?
              </Link>
            </div>
          </div>

          

        </form>
        <div className="font-base text-sm text-center pt-20">
          © 2020 All Rights Reserved. <Link to="./dashboard" className="text-indigo-600 font-bold">CORK</Link> is a product of Designreset. <span className="text-indigo-600 font-semibold">Cookie Preferences</span>, <span className="text-indigo-600 font-semibold">Privacy</span>, and <span className="text-indigo-600 font-semibold">Terms.</span>
    </div>
    </div>
    </div>
    );
};

Login.defaultProps = {}

export default memo(Login);


//   const [data,setData] = useState({email:"" , password:""});

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const nameOfChangeInput = event.target.name;
//     setData({ ...data, [nameOfChangeInput]: event.target.value});
//   };

//   let emailError = "";
//   let passwordError = "";

//   const formValidator = yup.object().shape({
//     email: yup.string().required().email(),
//     password: yup.string().required().min(8),
//   });

//   console.log("valid" , formValidator.isValidSync(data));
  
//   if(!data.email) {
//     emailError = "Email address is required";
//   } else if (!data.email.endsWith("@gmail.com")) {
//     emailError = "Please enter valid email address";
//   }

//   if(!data.password) {
//     passwordError = "Email address is required";
//   } else if (data.password.length < 8){
//     passwordError = "Password should contain atleast 8 characters";
//   }