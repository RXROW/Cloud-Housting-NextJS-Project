
"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface AddCommentProps {
  articleId: number;
}

const AddCommentForm = ({ articleId }: AddCommentProps) => {
  const router = useRouter();
  const [text, setText] = useState("");

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please enter your comment.");

    try {
      await axios.post(`${DOMAIN}/api/comments`, {
        articleId,
        text,
      });
      toast.success("Comment added successfully!");
      setText("");
      router.refresh();  
    } catch (error) {
      console.error("Failed to add comment:", error);
      toast.error("Failed to add comment. Please try again.");
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="mb-4">
      <label
        htmlFor="comment"
        className="block text-gray-700 font-medium mb-2"
      >
        Add Your Comment
      </label>
      <textarea
        id="comment"
        name="comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your comment"
      ></textarea>
      <div className="text-center mt-4">
        <button
          type="submit"
          className="px-4 py-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
