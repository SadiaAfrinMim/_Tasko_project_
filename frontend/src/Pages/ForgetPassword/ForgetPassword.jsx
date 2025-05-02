import { Input, Button, message } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import useAuth from '../../Hooks/useAuth';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { resetPassword } = useAuth();  // Access resetPassword function from context
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (newPassword !== confirmPassword) {
            message.error('Passwords do not match!');
            return;
        }

        setLoading(true);
        const result = await resetPassword(email, newPassword);  // Pass newPassword for reset

        setLoading(false);

        if (result === 'Password reset email sent successfully') {
            message.success('Password reset email sent!');
        } else {
            message.error(result || 'An error occurred!'); // Show error message from result or fallback error
        }
    };

    return (
        <div className="min-h-screen max-w-10/12 mx-auto flex items-center justify-center bg-[#F8F7FF] p-4 rounded-[2.5rem] shadow-lg">
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Handle email input change
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
                            iconRender={(visible) => 
                                visible ? 
                                <EyeTwoTone className="text-[#666666]" /> : 
                                <EyeInvisibleOutlined className="text-[#666666]" />
                            }
                            style={{ backgroundColor: '#F8F7FF' }}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)} // Handle new password input change
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
                            iconRender={(visible) => 
                                visible ? 
                                <EyeTwoTone className="text-[#666666]" /> : 
                                <EyeInvisibleOutlined className="text-[#666666]" />
                            }
                            style={{ backgroundColor: '#F8F7FF' }}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} // Handle confirm password input change
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="primary"
                        block
                        size="large"
                        className="h-12 rounded-lg font-semibold bg-[#5E56E7] hover:bg-[#4d46cf] border-none"
                        loading={loading}  // Show loading state while processing
                    >
                        Reset Password
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
