import {
  Home,
  Newspaper,
  Task,
  Chat,
  GroupAdd,
  Assignment,
  CalendarMonth,
  ContactPage,
} from "@mui/icons-material";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    title: "News",
    path: "/job-news",
    icon: <Newspaper />,
  },
  {
    title: "채용공고",
    path: "/job-posting",
    icon: <Task />,
  },
  {
    title: "JOB담",
    path: "/jobdam",
    icon: <Chat />,
  },
  {
    title: "GaJob-study",
    path: "/gajob-study",
    icon: <GroupAdd />,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <Assignment />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <CalendarMonth />,
  },
  {
    title: "MyPage",
    path: "/mypage",
    icon: <ContactPage />,
  },
];
