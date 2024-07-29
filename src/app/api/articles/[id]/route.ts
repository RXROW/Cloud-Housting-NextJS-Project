import { articles } from "@/utils/articlesData";
import { updateArticleDTO } from "@/utils/Dtos";
import { NextRequest, NextResponse } from "next/server";
 
interface IProps{
  params:{id:string};
}

/**
 * @method GET
 * @route ~/api/articles/:id
 * @dec Get Sngile Article
 * @access Public
 */
export function GET(req: NextRequest ,{params}:IProps) {
 const article =articles.find((a)=>a.id ===parseInt( params.id))
if(!article){
  return NextResponse.json({message:"Article Not Found!"}, { status: 404 });
}
 return NextResponse.json(article, { status: 200 });
}


/**
 * @method PUT
 * @route ~/api/articles/:id
 * @dec Update Article
 * @access Public
 */
export async  function PUT(req: NextRequest ,{params}:IProps) {
  const article =articles.find((a)=>a.id ===parseInt( params.id))
 if(!article){
   return NextResponse.json({message:"Article Not Found!"}, { status: 404 });
 }
 const body =(await req.json()) as updateArticleDTO;
 console.log(body)
  return NextResponse.json({message:"Article Updated !"}, { status: 200 });
 }

 /**
 * @method DELETE
 * @route ~/api/articles/:id
 * @dec Update Article
 * @access Public
 */
export async  function DELETE(req: NextRequest ,{params}:IProps) {
  const article =articles.find((a)=>a.id ===parseInt( params.id))
 if(!article){
   return NextResponse.json({message:"Article Not Found!"}, { status: 404 });
 }
  
  return NextResponse.json({message:"Article Deleted !"}, { status: 200 });
 }