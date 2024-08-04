export interface createArticleDTO {
  title: string;
  description: string;
}

export interface updateArticleDTO {
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
