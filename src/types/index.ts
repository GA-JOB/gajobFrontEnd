export interface IAuthData {
  id: number;
  name: string;
  nickname: string;
  email: string;
  password: string;
}

export interface INewsCrawling {
  id: number;
  title: string;
  contents: string;
  createTime: string;
  imgUrl: string;
  url: string;
}
