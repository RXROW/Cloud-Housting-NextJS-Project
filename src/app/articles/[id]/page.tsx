"use client";
import { useEffect, useState } from "react";
import { getSingleArticle } from "@/app/apiCall/articleApiCall";
import AddCommentForm from "@/app/components/AddCommentForm";
import CommentItems from "@/app/components/CommentItems";
import { SingleArticle } from "@/utils/types";

interface PageProps {
  params: { id: string };
}

const ArticlePage = ({ params }: PageProps) => {
  const [article, setArticle] = useState<SingleArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleData = await getSingleArticle(params.id);
        setArticle(articleData);
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params.id]);

  if (loading) {
    return <p className="p-8 mt-16 mx-auto">Loading...</p>;
  }

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
              {article.description}
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              {new Date(article.createdAt).toLocaleString()}
            </p>
            <p className="mt-2 text-gray-500 text-sm">Comments: 5</p>
            <AddCommentForm articleId={article.id} />

            {article.comments.map((comment) => (
              <CommentItems key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <p>Article not found.</p>
        )}
      </div>
    </section>
  );
};

export default ArticlePage;
