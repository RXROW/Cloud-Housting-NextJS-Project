import { Article } from '@prisma/client';
import { DOMAIN } from '@/utils/constants';

export async function getArticles(pageNumber?: string): Promise<Article[]> {
 
  const url = pageNumber ? `${DOMAIN}/api/articles?pageNumber=${pageNumber}` : `${DOMAIN}/api/articles`;

  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    const errorMessage = `Failed to fetch articles: ${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return response.json();
}


 
// Get single article by id
// export async function getSingleArticle(articleId: string): Promise<SingleArticle> {
//   const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
//     cache: 'no-store'
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch article");
//   }

//   return response.json();
// }