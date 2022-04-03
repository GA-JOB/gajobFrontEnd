import {
  Newspaper,
  Business,
  Chat,
  GroupAdd,
  Assignment,
  CalendarMonth,
} from "@mui/icons-material";

const IconStyle = {
  fontSize: 60,
  color: "black",
  opacity: 0.7,
};
export const ShortcutItem = [
  {
    title: "취업 NEWS",
    path: "/job-news",
    icon: <Newspaper sx={IconStyle} />,
    description: (
      <>
        실시간으로 제공되는 <br />
        취업 관련 뉴스를 통해 <br />
        빠르게 취업 소식을 확인하세요 !
      </>
    ),
  },
  {
    title: "채용공고",
    path: "/job-posting",
    icon: <Business sx={IconStyle} />,
    description: (
      <>
        사용자 맞춤 채용 소식은 <br />
        카테고리 별 채용공고를 통해 <br />
        확인할 수 있습니다 ! <br />
      </>
    ),
  },
  {
    title: "Community",
    path: "/jobdam",
    icon: <Chat sx={IconStyle} />,
    description: (
      <>
        취업에 도움이 될만한 <br />
        취업, 면접, 공부 꿀 tip <br />
        다함께 공유하세요 !
      </>
    ),
  },
  {
    title: "GA-JOB STUDY",
    path: "/gajob-study",
    icon: <GroupAdd sx={IconStyle} />,
    description: (
      <>
        스터디를 직접 만들거나 <br />
        본인 관심 분야의 스터디를 <br />
        조회하고 참여해보세요 !
      </>
    ),
  },
  {
    title: "자기소개서 작성",
    path: "/job-posting",
    icon: <Assignment sx={IconStyle} />,
    description: (
      <>
        자소서 작성 및 저장 <br />
        작성 이력 조회까지 <br />
        미리 경험해 보세요 !
      </>
    ),
  },
  {
    title: "Calendar",
    path: "/job-posting",
    icon: <CalendarMonth sx={IconStyle} />,
    description: (
      <>
        스터디, 모임 일정 혹은 <br />
        중요한 면접 일정 등 <br />
        캘린더로 관리하세요 !
      </>
    ),
  },
];
