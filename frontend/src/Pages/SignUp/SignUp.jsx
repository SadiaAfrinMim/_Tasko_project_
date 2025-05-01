import { Button, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCardOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Image from '../../assets/image.png';

import { toast } from 'react-toastify';

import { saveUser } from '../../utils/utils';
import useAuth from '../../Hooks/useAuth';
import { BiLogIn } from 'react-icons/bi';

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
   

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }

    try {
     
      const result = await createUser(email, password);
      await updateUserProfile(name);
      await saveUser({ ...result.user, displayName: name });
      navigate('/');
      toast.success('Signup Successful');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle();
      await saveUser(data.user);
      navigate('/');
      toast.success('Signup Successful');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className=" max-w-11/12 mx-auto rounded-2xl overflow-hidden bg-white shadow-xl flex flex-col md:flex-row min-h-screen">
      {/* Image Section */}
      <div className="md:w-1/2 w-full h-50 relative bg-gradient-to-br from-[#F8F7FF] to-[#e6e4ff]">
        <img src={Image} alt="Signup Visual" className="w-full object-cover opacity-90" />
        <div className="absolute bottom-8 left-8 bg-white/90 p-5 rounded-2xl shadow-lg backdrop-blur-sm">
          <h3 className="text-xl font-bold text-[#333333]">TaskFlow Pro</h3>
          <p className="text-[#666666] text-sm mt-1">Your Productivity Partner</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full p-8 md:p-12 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-[#5E56E7] to-[#8179FF] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              ✍️
            </div>
            <h2 className="text-3xl font-extrabold text-[#333333] mb-2">Create Account</h2>
            <p className="text-[#666666] font-medium">Start your productivity journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#666666] mb-2">Full Name</label>
              <Input name="name" size="large" placeholder="John Doe" required className="rounded-xl border-2 border-[#F4F4F4] focus:border-[#5E56E7]" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#666666] mb-2">Email Address</label>
              <Input name="email" size="large" placeholder="name@company.com" required className="rounded-xl border-2 border-[#F4F4F4] focus:border-[#5E56E7]" suffix={<span className="text-[#666666]">✉</span>} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#666666] mb-2">New Password</label>
              <Input.Password
                name="password"
                size="large"
                placeholder="••••••••"
                required
                className="rounded-xl border-2 border-[#F4F4F4] focus:border-[#5E56E7]"
                iconRender={visible => visible ? <EyeTwoTone className="text-[#666666]" /> : <EyeInvisibleOutlined className="text-[#666666]" />}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#666666] mb-2">Confirm Password</label>
              <Input.Password
                name="confirmPassword"
                size="large"
                placeholder="••••••••"
                required
                className="rounded-xl border-2 border-[#F4F4F4] focus:border-[#5E56E7]"
                iconRender={visible => visible ? <EyeTwoTone className="text-[#666666]" /> : <EyeInvisibleOutlined className="text-[#666666]" />}
              />
            </div>


            <div className="relative w-full">
              <button type="submit" className="relative z-10 w-full flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-br from-[#5E56E7] to-[#FF8E4F] text-white font-semibold hover:shadow-xl transition-all duration-300 group">
                <CreditCardOutlined className="text-xl group-hover:scale-125 transition-transform" />
                <span className="group-hover:translate-x-2 transition-transform">Create Account</span>
              </button>
              <div className="absolute inset-0 bg-white/30 blur-2xl -z-10 animate-pulse"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full mt-2 flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-[#5E56E7] text-[#5E56E7] font-semibold hover:bg-[#F0F0FF] transition-all duration-300"
            >
              <BiLogIn className="text-lg" />
              Sign Up with Google
            </button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <p className="text-sm text-[#666666]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#FF8E4F] hover:text-[#ff7733] transition-colors">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
