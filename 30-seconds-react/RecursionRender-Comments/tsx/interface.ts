export interface IComment {
  id: number;
  text: string;
  author: string;
  children?: ICommentArray;
}

export type ICommentArray = IComment[];

export interface IArticle {
  id: number;
  title: string;
  author: string;
  text: string;
  comments?: IComment[];
}

// export { IComment, ICommentArray, IArticle };
