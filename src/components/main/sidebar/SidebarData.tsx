import React from "react";
import { Home, Person, Task, Chat, Analytics } from "@mui/icons-material";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <Person />,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <Task />,
  },
  {
    title: "Chats",
    path: "/chats",
    icon: <Chat />,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <Analytics />,
  },
];
