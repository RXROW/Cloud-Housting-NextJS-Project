"use client";
import { Article } from "@/utils/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const articles: Article[] = await response.json();
      setArticles(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section className="p-8 mt-16 max-w-6xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((item) => (
          <div
            key={item.id}
            className="border p-4 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">{item.title}</h2>
            <p className="mt-2 text-gray-600 h-44">{item.body}</p>
            <Link
              className="block mt-4 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-900 transition duration-300"
              href={`/articles/${item.id}`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
