import {
  Newspaper,
  Business,
  Forum,
  GroupAdd,
  Assignment,
  CalendarMonth,
} from "@mui/icons-material";

const IconStyle = {
  fontSize: 55,
  color: "black",
  opacity: 0.6,
};
export const ShortcutItem = [
  {
    title: "취업 NEWS",
    path: "/job-news",
    icon: <Newspaper sx={IconStyle} />,
    description: (
      <>
        실시간 취업 관련 뉴스를 통해 <br />
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
    path: "/job-posting",
    icon: <Forum sx={IconStyle} />,
    description: (
      <>
        스터디, 모임 일정 혹은 <br />
        중요한 면접 일정 등 <br />
        GA-JOB에서 제공되는 <br />
        캘린더로 관리하세요 !
      </>
    ),
  },
  {
    title: "GA-JOB STUDY",
    path: "/gajob-study",
    icon: <GroupAdd sx={IconStyle} />,
    description: (
      <>
        관심 분야인 스터디를 만들거나 <br />
        비슷한 관심 분야를 가진 <br />
        스터디원들과 함께 <br />
        스터디에 참여해보세요 !
      </>
    ),
  },
  {
    title: "자기소개서 작성",
    path: "/job-posting",
    icon: <Assignment sx={IconStyle} />,
    description: (
      <>
        모의 자소서 작성에서 <br />
        글자수 제한 기준 및 <br />
        GA-JOB에서 제공되는 <br />
        캘린더로 관리하세요 !
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
