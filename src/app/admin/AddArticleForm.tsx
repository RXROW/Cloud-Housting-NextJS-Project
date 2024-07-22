"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddArticleForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title === "") return toast.error("Title is required");
        if (description === "") return toast.error("Description is required");
        console.log({title,description})

        // Add your form submission logic here
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col">
            <input
                className="mb-4 border rounded p-2 b text-xl"
                type="text"
                placeholder="Enter Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='mb-4 p-2 lg:text-xl rounded resize-none'
                rows={5}
                placeholder='Enter Article Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
                type="submit"
                className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-3 rounded-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            >
                Add Article
            </button>
        </form>
    )
}

export default AddArticleForm;
