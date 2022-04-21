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
];
