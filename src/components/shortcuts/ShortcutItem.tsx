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
    title: " 취업 NEWS",
    path: "/job-news",
    icon: <Newspaper sx={IconStyle} />,
    description: (
      <>
        사용자들이 궁금해하는
        <br /> 취업과 관련된 소식을 알려주는 <br />
        서비스를 제공해드립니다
      </>
    ),
  },
  {
    title: "채용정보",
    path: "/job-posting",
    icon: <Business sx={IconStyle} />,
    description: (
      <>
        사용자 맞춤 채용 소식을 찾을 수 있도록
        <br />
        직업 카테고리 별 채용공고 <br />
        서비스를 제공해드립니다
      </>
    ),
  },
  {
    title: "Community",
    path: "/job-posting",
    icon: <Forum sx={IconStyle} />,
    description: (
      <>
        사용자 맞춤 채용 소식을 찾을 수 있도록
        <br />
        직업 카테고리 별 채용공고 <br />
        서비스를 제공해드립니다
      </>
    ),
  },
  {
    title: "STUDY 참여",
    path: "/gajob-study",
    icon: <GroupAdd sx={IconStyle} />,
    description: (
      <>
        사용자가 직접 스터디를 만들수 있고,
        <br />
        관심 분야에 적합한 스터디를 찾아 <br />
        자유롭게 신청을 할 수 있는
        <br />
        스터디 매칭 서비스를 제공해드립니다.
      </>
    ),
  },
  {
    title: "자기소개서 작성",
    path: "/job-posting",
    icon: <Assignment sx={IconStyle} />,
    description: (
      <>
        사용자 맞춤 채용 소식을 찾을 수 있도록
        <br />
        직업 카테고리 별 채용공고 <br />
        서비스를 제공해드립니다
      </>
    ),
  },
  {
    title: "Calendar",
    path: "/job-posting",
    icon: <CalendarMonth sx={IconStyle} />,
    description: (
      <>
        사용자 맞춤 채용 소식을 찾을 수 있도록
        <br />
        직업 카테고리 별 채용공고 <br />
        서비스를 제공해드립니다
      </>
    ),
  },
];
