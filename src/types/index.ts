export interface IUserData {
  id?: number;
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  studentId?: string;
  studentEmail: string;
  department?: string;
  introduction?: string;
  profileFilePath?: string;
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
  category: string;
  state: string;
  todayState: string;
  url: string;
  imgUrl: string;
}

export interface IContestRankingCrawling {
  id: number;
  title: string;
  ranking: string;
  rankingState: string;
  host: string;
  perks: string;
  category: string;
  target: string;
  url: string;
  imgUrl: string;
  dday: string;
  state: string;
}

export interface IJobPostingCrawling {
  id: number;
  career: string;
  employTypeCode: number;
  lastModifyDate: number;
  infoSource: string;
  title: string;
  closeDate: string;
  basicAddress: string;
  prefCd: string | any;
  registrationDate: string | Date;
  wantedMobileInfoUrl: string;
  workType: string;
  maxSalary: number;
  wantedInfoUrl: string;
  salaryType: string;
  minEdu: string;
  minSalary: number;
  company: string;
  streetNameAddress: number;
  jobCode: string | null;
  authNum: string;
  region: string;
  salary: string;
}

export interface ICommunity {
  id: number;
  title: string | null;
  content: string | null;
  postCategory: string | null;
  jobCategory: string | null;
  writer?: string;
  view?: number;
  comments?: ICommunityComment[];
  commentsCnt?: number;
  likes?: number;
  likesList?: ILikesList[];
  likeStatus?: boolean;
  scrap?: number;
  scrapStatus?: boolean;
  createdDate?: Date;
  modifiedDate?: Date;
}

export interface IStudy {
  id: number;
  title: string;
  content: string;
  studyCategory: string;
  area: string;
  maxPeople: number;
  minPeople: number;
  startDate: string | Date;
  endDate: string | Date;
  status: string;
  writer: string;
  view: number;
  createdDate: string | Date;
  modifiedDate: string | Date;
  comments: string[];
  commentsCnt?: number;
  likes?: number;
  likesList?: ILikesList[];
  likeStatus?: boolean;
  scrap?: number;
  scrapStatus?: boolean;
  openTalkUrl: string | null;
}

type ILikesList = {
  id?: number;
  nickname?: string;
};
type ICommunityComment = {
  id?: number;
  isSecret?: boolean;
  comment?: string;
  createdDate?: Date;
  modifiedDate?: Date;
  nickname?: string;
  postsId?: number;
};
