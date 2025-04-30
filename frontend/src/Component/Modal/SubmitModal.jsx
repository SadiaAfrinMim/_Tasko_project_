import React from 'react';

const SubmitModal = ({ setShowSubmitModal }) => {
  
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-xl space-y-6 text-center">
                        <h3 className="text-2xl font-bold text-[#5E56E7]">🎉 Congratulations!</h3>
                        <p className="text-gray-600">Your task has been submitted successfully.</p>
                        <button
                            onClick={() => setShowSubmitModal(true)}
                            className="mt-4 px-6 py-2 rounded-xl bg-[#5E56E7] text-white hover:bg-[#4b45c7]"
                        >
                            Close
                        </button>
                    </div>
                </div>
    );
};

export default SubmitModal;