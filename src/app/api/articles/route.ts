import { articles } from "@/utils/articlesData";
import { createArticleDTO } from "@/utils/Dtos";
import { Article } from "@/utils/types";
import { createZodSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
 


/**
 * @method GET
 * @route ~/api/articles
 * @dec Get All Articles
 * @access Public
 */
export function GET(req: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}

/**
 * @method POST
 * @route ~/api/articles
 * @dec  Create New Article
 * @access Public
 */

export async function POST(req: NextRequest) {
  const body = (await req.json())as createArticleDTO;


const validation =createZodSchema.safeParse(body);

  if(!validation.success){
    return NextResponse.json({message:validation.error.errors[0].message}, { status: 400 });
  }
 
 const newArticle:Article ={
  title:body.title,
  body:body.body,
  id:articles.length +1,
  userId:200
 }
 articles.push(newArticle);
  return NextResponse.json(newArticle,{ status: 201 });

 
}
