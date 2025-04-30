import React from 'react';

const SubmitModal = ({ visible, onClose }) => {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl text-center">
                <h2 className="text-2xl font-bold text-[#5E56E7] mb-4">🎉 Congratulations!</h2>
                <p className="text-gray-600 mb-6">Your task has been submitted successfully.</p>
                <button
                    onClick={onClose}
                    className="bg-[#5E56E7] text-white px-5 py-2 rounded-xl hover:bg-[#4b45c7] transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SubmitModal;
