import { useForm } from 'react-hook-form';
import bistroBossLogo from '../../assets/icon/logo-Bistro-Boss.png';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
   const { register, handleSubmit, reset } = useForm();

   const handleForGotPass = (data) => {
      const { email } = data;
      console.log(email);

      sendPasswordResetEmail(auth, email)
         .then(() => {
            toast.success(
               'Password reset email sent! Please check your inbox or spam folder. 📧'
            );
            reset(); // ইমেইল ফিল্ড ক্লিয়ার হবে
         })
         .catch((err) => {
            // Firebase error code এর ভিত্তিতে ইউজার ফ্রেন্ডলি মেসেজ দেখানো
            if (err.code === 'auth/user-not-found') {
               toast.error('No user found with this email.');
            } else if (err.code === 'auth/invalid-email') {
               toast.error('Please enter a valid email address.');
            } else {
               toast.error('Failed to send reset email. Please try again.');
            }
         });
   };

   return (
      <section className="flex justify-center items-center min-h-screen bg-gray-50 px-2 lg:px-0">
         <div className="w-full max-w-[450px] px-6 py-5 bg-white rounded-lg shadow-lg ">
            <img
               className="w-16 block mx-auto mb-3"
               src={bistroBossLogo}
               alt="logo"
            />
            <h2 className="text-2xl font-semibold text-center mb-4">
               Reset Your Password
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
               We will send you an email to reset your password.
            </p>
            <form onSubmit={handleSubmit(handleForGotPass)}>
               <div>
                  <label className="label text-sm font-semibold mb-2.5 text-[#444444]">
                     Email Address
                  </label>
                  <input
                     {...register('email')}
                     name="email"
                     type="email"
                     className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-3 px-5 mb-4"
                     placeholder="Enter a valid Email Address"
                     required
                  />
               </div>
               <button
                  type="submit"
                  className="btn w-full text-white bg-[#D1A054] hover:bg-[#d39d4c] cursor-pointer"
               >
                  Send Reset Link
               </button>
               <p className="text-center text-sm text-gray-600 mt-4">
                  Didn’t receive the email? Check your spam or junk folder and
                  mark it as “Not Spam”.
               </p>
               <div className="text-center mt-4">
                  <a
                     href="/signin"
                     className="text-sm text-neutral hover:underline"
                  >
                     Back to Sign In
                  </a>
               </div>
            </form>
         </div>
      </section>
   );
};

export default ForgotPassword;
