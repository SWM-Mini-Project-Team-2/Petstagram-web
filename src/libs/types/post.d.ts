type Post = {
  createdAt: Date;
  description: string;
  id: string;
  imgSrc: string;
  like: number;
  userId: User["id"];
  view: number;
};
