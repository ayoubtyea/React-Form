// import { useFormik } from "formik";
// import { signUpSchema } from "../utils/FormValidation";

// export default function RegisterForm({ title }) { 
//     const formik = useFormik({
//         initialValues: {
//             fullname: '',
//             email: '',
//             password: '',
//             confirmationPassword: '',
//         },
//         validationSchema: signUpSchema,
//         onSubmit: (values) => {
//             console.log(values);
//         },
//     });

//     return (
//         <div className="space-y-6">
//             <h1 className="text-3xl">{title}</h1>  

//             <form onSubmit={formik.handleSubmit} className="w-[600px]">
//                 <div className="mb-4 space-y-6">
//                     {/* Full Name */}
//                     <div>
//                         <input
//                             type="text"
//                             name="fullname"
//                             className={`w-full px-6 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500
//                                 ${formik.errors.fullname && formik.touched.fullname ? 'border-red-500' : 'border-gray-300'}
//                             `}
//                             placeholder="Full Name"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.fullname}
//                         />
//                         {formik.errors.fullname && formik.touched.fullname && (
//                             <p className="text-red-500">{formik.errors.fullname}</p>
//                         )}
//                     </div>

//                     {/* Email */}
//                     <div>
//                         <input
//                             type="email"
//                             name="email"
//                             className={`w-full px-6 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500
//                                 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'}
//                             `}
//                             placeholder="Email"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.email}
//                         />
//                         {formik.errors.email && formik.touched.email && (
//                             <p className="text-red-500">{formik.errors.email}</p>
//                         )}
//                     </div>

//                     {/* Password */}
//                     <div>
//                         <input
//                             type="password"
//                             name="password"
//                             className={`w-full px-6 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500
//                                 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'}
//                             `}
//                             placeholder="Password"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.password}
//                         />
//                         {formik.errors.password && formik.touched.password && (
//                             <p className="text-red-500">{formik.errors.password}</p>
//                         )}
//                     </div>

//                     {/* Confirmation Password */}
//                     <div>
//                         <input
//                             type="password"
//                             name="confirmationPassword"
//                             className={`w-full px-6 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500
//                                 ${formik.errors.confirmationPassword && formik.touched.confirmationPassword ? 'border-red-500' : 'border-gray-300'}
//                             `}
//                             placeholder="Confirm Password"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.confirmationPassword}
//                         />
//                         {formik.errors.confirmationPassword && formik.touched.confirmationPassword && (
//                             <p className="text-red-500">{formik.errors.confirmationPassword}</p>
//                         )}
//                     </div>
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
//                 >
//                     Create Account
//                 </button>
//             </form>
//         </div>
//     );
// }
