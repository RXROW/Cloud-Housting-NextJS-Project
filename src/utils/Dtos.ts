export interface CreateArticleDto {
  title: string;
  description: string;
}

export interface UpdateArticleDto {
  title?: string;
  description?: string;
}

export interface registerUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface loginUserDTO {
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  username?: string;
  email?: string;
  password?: string;
}
export interface CreateCommentDto {
   text:string;
   articleId:number;
}

export interface UpdateCommentDto {
  text:string;
 
}

