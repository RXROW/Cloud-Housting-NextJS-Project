"use client";
import { Article } from "@/utils/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Pagenation from "../components/Pagenation";
import { resolve } from "path";

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchArticles = async () => {

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Unexpected data format");
      }

      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="p-8 mt-16 max-w-6xl mx-auto">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-6 w-full px-4 py-2 border rounded-lg"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.slice(0,6).map((item) => (
          <div
            key={item.id}
            className="border p-4 bg-white shadow-lg rounded-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
              {item.title}
            </h2>
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
      <Pagenation/>
    </section>
  );
}

export default Articles;
