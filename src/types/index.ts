export interface IUserData {
  id?: number;
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
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

export interface ICommunity {
  id: number;
  title: string | null;
  content: string | null;
  postCategory: string | null;
  writer?: string;
  view?: number;
  createdDate?: Date;
  modifiedDate?: Date;
  comments?: ICommunityComment[];
}

type ICommunityComment = {
  id?: number;
  comment?: string;
  createdDate?: Date;
  modifiedDate?: Date;
  nickname?: string;
  postsId?: number;
};
