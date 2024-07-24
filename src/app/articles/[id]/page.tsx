"use client";
import AddCommentForm from "@/app/components/AddCommentForm";
import CommentItems from "@/app/components/CommentItems";
import { Article } from "@/utils/types";
import React, { useEffect, useState } from "react";

interface PageProps {
  params: { id: string };
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const staticDate = "2023-07-24"; // Static date for demonstration

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const article: Article = await response.json();
      setArticle(article);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
      );
      const comments: Comment[] = await response.json();
      setComments(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchArticle();
    fetchComments();
  }, [params.id]);

  return (
    <section className="p-8 mt-16 mx-auto">
      <div>
        {article ? (
          <div
            key={article.id}
            className="border p-4 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
              {article.title}
            </h2>
            <p className="mt-2 text-gray-600 h-44 overflow-hidden">
              {article.body}
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Date: {staticDate}
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Comments: {comments.length}
            </p>
            <AddCommentForm/>
            <CommentItems/>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Page;
