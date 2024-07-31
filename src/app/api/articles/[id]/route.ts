import { articles } from "@/utils/articlesData";
import   prisma   from "@/utils/DB";
import { updateArticleDTO } from "@/utils/Dtos";
import { NextRequest, NextResponse } from "next/server";
import { title } from "process";

interface IProps {
  params: { id: string };
}

/**
 * @method GET
 * @route ~/api/articles/:id
 * @dec Get Sngile Article
 * @access Public
 */
export async function GET(req: NextRequest, { params }: IProps) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article Not Found!" },
        { status: 404 }
      );
    }
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Intrnal Server Erorr !", error },
      { status: 500 }
    );
  }
}

/**
 * @method PUT
 * @route ~/api/articles/:id
 * @dec Update Article
 * @access Public
 */
export async function PUT(req: NextRequest, { params }: IProps) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!article) {
      return NextResponse.json(
        { message: "Article Not Found!" },
        { status: 404 }
      );
    }
    const body = (await req.json()) as updateArticleDTO;
    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(updatedArticle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Intrnal Server Erorr !", error },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @route ~/api/articles/:id
 * @dec Update Article
 * @access Public
 */
export async function DELETE(req: NextRequest, { params }: IProps) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article Not Found!" },
        { status: 404 }
      );
    }
    await prisma.article.delete({where:{ id: parseInt(params.id) }})
  
    return NextResponse.json({ message: "Article Deleted !" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Intrnal Server Erorr !", error },
      { status: 500 }
    );
  }

}
