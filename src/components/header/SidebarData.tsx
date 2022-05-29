import {
  Home,
  Newspaper,
  ContentPasteSearch,
  Business,
  Chat,
  GroupAdd,
  Assignment,
  CalendarMonth,
} from "@mui/icons-material";

export const SidebarData = [
  {
    title: "HOME",
    path: "/",
    icon: <Home />,
  },
  {
    title: "NEWS",
    path: "/job-news",
    icon: <Newspaper />,
  },
  {
    title: "공모전 소식",
    path: "/contest",
    icon: <ContentPasteSearch />,
  },
  {
    title: "채용공고",
    path: "/job-posting",
    icon: <Business />,
  },
  {
    title: "JOB담",
    path: "/jobdam",
    icon: <Chat />,
  },
  {
    title: "JOB STUDY",
    path: "/study",
    icon: <GroupAdd />,
  },
  {
    title: "PORTFOLIO",
    path: "/portfolio",
    icon: <Assignment />,
  },
  {
    title: "CALENDAR",
    path: "/calendar",
    icon: <CalendarMonth />,
  },
];
