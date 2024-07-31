 
import { createArticleDTO } from "@/utils/Dtos";
import { NextRequest, NextResponse } from "next/server";
import { createZodSchema } from "@/utils/validationSchemas";
 
import { Article } from "@prisma/client";
import prisma from "@/utils/DB";
 

/**
 * @method GET
 * @route ~/api/articles
 * @dec Get All Articles
 * @access Public
 */
export async function GET(req: NextRequest) {
try {
const articles =await prisma.article.findMany();
return NextResponse.json(articles,{ status: 200 });

  
} catch (error) {
  return NextResponse.json({message:"Intrnal Server Erorr !" , error}, { status: 500 });

}
}

/**
 * @method POST
 * @route ~/api/articles
 * @dec  Create New Article
 * @access Public
 */

export async function POST(req: NextRequest) {
 try {
  const body = (await req.json()) as createArticleDTO;

  const validation = createZodSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { message: validation.error.errors[0].message },
      { status: 400 }
    );
  }

  const newArticle: Article = await prisma.article.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newArticle, { status: 201 });
 } catch (error) {
  return NextResponse.json({message:"Intrnal Server Erorr !" , error}, { status: 500 });
 }

}
