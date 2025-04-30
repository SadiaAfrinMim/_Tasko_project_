import { Input, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const ForgetPassword = () => {
    return (
        <div className="min-h-screen  max-w-10/12 mx-auto flex items-center justify-center bg-[#F8F7FF] p-4 rounded-[2.5rem] shadow-lg">
            <div className="">
                {/* Back Button */}
                <Link 
                    to="/login" 
                    className="flex items-center text-[#666666] hover:text-[#5E56E7] mb-6 transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Login
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#333333] mb-2">
                        Reset Password
                    </h1>
                    <p className="text-[#666666]">
                        Enter your email and new password to reset
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-[#333333] mb-2">
                            Email Address
                        </label>
                        <Input
                            prefix={<FaEnvelope className="text-[#5E56E7]" />}
                            placeholder="example@mail.com"
                            size="large"
                            className="rounded-lg"
                            style={{ backgroundColor: '#F8F7FF' }}
                        />
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block text-sm font-medium text-[#333333] mb-2">
                            New Password
                        </label>
                        <Input.Password
                            size="large"
                            placeholder="••••••••"
                            className="rounded-lg"
                            iconRender={visible => 
                                visible ? 
                                <EyeTwoTone className="text-[#666666]" /> : 
                                <EyeInvisibleOutlined className="text-[#666666]" />
                            }
                            style={{ backgroundColor: '#F8F7FF' }}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-[#333333] mb-2">
                            Confirm Password
                        </label>
                        <Input.Password
                            size="large"
                            placeholder="••••••••"
                            className="rounded-lg"
                            iconRender={visible => 
                                visible ? 
                                <EyeTwoTone className="text-[#666666]" /> : 
                                <EyeInvisibleOutlined className="text-[#666666]" />
                            }
                            style={{ backgroundColor: '#F8F7FF' }}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="primary"
                        block
                        size="large"
                        className="h-12 rounded-lg font-semibold bg-[#5E56E7] hover:bg-[#4d46cf] border-none"
                    >
                        Reset Password
                    </Button>
                </form>

                {/* Success Message */}
                <div className="mt-6 p-4 rounded-lg bg-green-50 text-green-700 hidden">
                    <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Password reset successfully!
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;