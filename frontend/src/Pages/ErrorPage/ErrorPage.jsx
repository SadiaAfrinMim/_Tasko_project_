import React from 'react';
import Image from '../../assets/image.png';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='min-h-screen max-w-10/12 mx-auto flex items-center justify-center bg-[#F8F7FF] p-4 rounded-[2.5rem] shadow-lg'>
            <div className='flex flex-col items-start gap-12 p-8 w-full max-w-4xl'>
                {/* Error Code Badge */}
                <div className='w-20 h-20 bg-[#FF8E4F] rounded-full flex items-center justify-center text-white text-2xl font-bold animate-bounce'>
                    404
                </div>

                {/* Main Content */}
                <div className='flex flex-col lg:flex-row items-center gap-12 w-full'>
                    {/* Image Container */}
                    <div className='relative flex-1 w-full max-w-xl'>
                        <div className='absolute inset-0 bg-[#5E56E7] rounded-3xl rotate-3 scale-95'></div>
                        <img 
                            src={Image} 
                            alt="Error Illustration" 
                            className='relative z-10 w-full h-auto rounded-3xl transform hover:-translate-y-2 transition-all duration-300'
                        />
                    </div>

                    {/* Text Content */}
                    <div className='flex-1 space-y-8 text-left'>
                        <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5E56E7] to-[#FF8E4F] bg-clip-text text-transparent'>
                            Oops! Lost in Space?
                        </h1>
                        
                        <div className='space-y-4'>
                            <p className='text-xl md:text-2xl text-[#666666] leading-relaxed'>
                                Looks like the page you're searching for has embarked on a cosmic journey. Let's bring you back to familiar grounds.
                            </p>
                            <div className='relative inline-block'>
                                <button className='relative z-10 flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-br from-[#5E56E7] to-[#FF8E4F] text-white font-semibold hover:shadow-xl transition-all duration-300 group'>
                                    <FaHome className='text-xl group-hover:scale-125 transition-transform' />
                                    <span className='group-hover:translate-x-2 transition-transform'>
                                        Beam Me Home
                                    </span>
                                </button>
                                <div className='absolute inset-0 bg-white/30 blur-2xl -z-10 animate-pulse'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className='hidden lg:block absolute top-24 left-24 w-32 h-32 bg-[#FF8E4F]/10 rounded-full'></div>
                <div className='hidden lg:block absolute bottom-24 right-24 w-48 h-48 bg-[#5E56E7]/10 rounded-full'></div>
            </div>
        </div>
    );
};

export default ErrorPage;