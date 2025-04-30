import React from 'react';

const DeleteModal = ({ visible, onConfirm, onCancel }) => {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl text-center">
                <h2 className="text-2xl font-bold text-red-500 mb-4">⚠ Are you sure?</h2>
                <p className="text-gray-600 mb-6">This action will permanently delete the task.</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel}
                        className="px-5 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
