import React, { useState, useEffect } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (title: string, description: string) => void;
    initialTitle?: string;
    initialDescription?: string;
};

const Modal = ({ isOpen, onClose, onSave, initialTitle = '', initialDescription = '' }: ModalProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        console.log('useEffect Triggered');
        setTitle(initialTitle);
        setDescription(initialDescription);
    }, [isOpen, initialTitle, initialDescription]);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(title, description);
        setTitle('');
        setDescription('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
                <button onClick={onClose} className="float-right text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {initialTitle ? 'Update Task' : 'Add New Task'}
                </h2>
                <form onSubmit={handleSave}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white p-2 rounded mr-2 hover:bg-gray-600 transition-colors duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;