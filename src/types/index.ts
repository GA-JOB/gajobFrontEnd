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

export interface IContestCrawling {
  id: number;
  title: string;
  organization: string;
  state: string;
  todayState: string;
  url: string;
  imgUrl: string;
}
