export interface IBlog extends Record<string, string | number> {
  id: string;
  title: string;
  author: string;
  content: string;
  upVote: number;
  downVote: number;
}
