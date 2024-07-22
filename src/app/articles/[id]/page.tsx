 "use client";
import { Article } from "@/utils/types";
import React, { useEffect, useState } from "react";

interface PageProps {
  params: { id: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [article, setArticle] = useState<Article | null>(null);

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

  useEffect(() => {
    fetchArticle();
  }, [params.id]);

  return (
    <section className="p-8 mt-16   mx-auto">
      <div className=" ">
        {article ? (
          <div
            key={article.id}
            className="border p-4 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
              {article.title}
            </h2>
            <p className="mt-2 text-gray-600 h-44 overflow-hidden">{article.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Page;
