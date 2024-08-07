 
import { Article } from '@prisma/client';
import type { Metadata } from 'next'; 
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import Pagination from '../components/Pagenation';
import ArticleItem from '../components/ArticleItem';
import SearchArticleInput from '../components/SearchArticleInput';
import { getArticles } from '../apiCall/articleApiCall';
 

interface ArticlesPageProps {
  searchParams: { pageNumber: string }
}

const ArticlesPage = async ({ searchParams } : ArticlesPageProps) => {
  const { pageNumber } = searchParams;
  const articles: Article[] = await getArticles(pageNumber);
 

  const pages = Math.ceil( 20 / ARTICLE_PER_PAGE);

  return (
    <section className="container m-auto px-5">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination pageNumber={parseInt(pageNumber)} route="/articles" pages={pages} />
    </section>
  )
}

export default ArticlesPage;

export const metadata: Metadata = {
  title: 'Articles Page',
  description: 'Articles about programming',
}