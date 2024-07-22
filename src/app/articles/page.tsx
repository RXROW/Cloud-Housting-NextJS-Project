"use client";
import { Article } from '@/utils/types';
import React, { useState, useEffect } from 'react';


function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
    <section className="p-8 max-w-4xl mx-auto">
      {articles.map(item => (
        <div key={item.id} className="border p-4 my-4 bg-white shadow rounded">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="mt-2">{item.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Articles;
