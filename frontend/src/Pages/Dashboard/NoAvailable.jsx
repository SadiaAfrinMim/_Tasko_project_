import React from 'react';
import { FiPackage, FiRefreshCw } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const NoAvailable = () => {
    return (
        <div className="min-h-[60vh]  flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-6">
                {/* Animated Icon */}
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#5E56E7]/10 rounded-full animate-ping"></div>
                    <div className="relative flex items-center justify-center w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg border border-[#F4F4F4]">
                        <FiPackage className="text-4xl text-[#5E56E7]" />
                        <div className="absolute -top-2 -right-2 text-white bg-[#FF8E4F] rounded-full p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#333333]">
                        Currently Unavailable
                    </h2>
                    <p className="text-[#666666] leading-relaxed">
                        The content you're looking for is not available at the moment. Please check back later or explore other sections.
                    </p>
                </div>

                {/* Action Button */}
                <Link to={'/dashboard'} className="inline-flex items-center gap-2 px-6 py-3 bg-[#5E56E7] text-white rounded-lg hover:bg-[#4c44d1] transition-colors duration-200">
                    <FiRefreshCw className="text-lg" />
                    <span className="font-medium">Refresh Page</span>
                </Link>

                {/* Decorative Elements */}
                <div className="absolute left-0 right-0 mx-auto w-64 h-64 bg-[#FF8E4F]/5 rounded-full -z-10"></div>
            </div>
        </div>
    );
};

export default NoAvailable;