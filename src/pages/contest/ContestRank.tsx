import { useState } from "react";
import { Loading } from "components/loading/index";
import styled from "styled-components";
import { EmojiEventsTwoTone } from "@mui/icons-material";
import useGetContestRank from "hooks/api/useGetContestRank";

export const ContestRank = () => {
  const { data } = useGetContestRank();

  const [state, setState] = useState<string | null>(null);
  const [color, setColor] = useState("red");
  //   const onChangeBtnColor = () => {
  //     color === "red" ? setColor("yellow") : setColor("red");
  //   };

  const IconStyle = {
    fontSize: 50,
    color: "white",
  };

  if (!data) return <Loading />;
  return (
    <>
      <GalleryWrapper>
        <SubTitle>🔥 실시간 HOT 공모전</SubTitle>

        <StateTag>
          <ListStyle onClick={() => setState(null)}># 전체</ListStyle>
          <ListStyle onClick={() => setState("접수예정")}># 접수예정</ListStyle>
          <ListStyle onClick={() => setState("접수중")}># 접수중</ListStyle>
          <ListStyle onClick={() => setState("마감임박")}># 마감임박</ListStyle>
          <ListStyle onClick={() => setState("마감")}># 마감</ListStyle>
        </StateTag>

        {/* 1, 2, 3랭킹 상단에 보이기 */}
        {data.map((gallery: any, index: number) => (
          <>
            {(state === null ||
              (state !== null && state === gallery.state)) && (
              <Box>
                <LinkStyle href={gallery.url} target="_blank">
                  <ContentsBox key={index}>
                    <ImgBox>
                      <Ranking>
                        {(gallery.ranking === "1" ||
                          gallery.ranking === "2" ||
                          gallery.ranking === "3") && (
                          <>
                            {gallery.ranking}
                            <EmojiEventsTwoTone style={IconStyle} />
                          </>
                        )}
                      </Ranking>
                      <img
                        src={gallery.imgUrl}
                        alt="이미지 준비중 .."
                        width={"100%"}
                      />
                    </ImgBox>
                  </ContentsBox>
                  <TextBox>
                    <Title>{gallery.title}</Title>
                    <Category>{gallery.category}</Category>

                    <Text>{gallery.host}</Text>
                    <State>
                      {gallery.state === "마감"
                        ? gallery.state
                        : gallery.dday !== ""
                        ? gallery.dday
                        : "-"}
                    </State>
                  </TextBox>
                </LinkStyle>
              </Box>
            )}
          </>
        ))}
      </GalleryWrapper>
    </>
  );
};

const GalleryWrapper = styled.div`
  width: 100%;
  position: relative;
`;
const SubTitle = styled.div`
  margin: 1vw 0;
  font-size: 15pt;
  font-weight: lighter;
`;
const StateTag = styled.div`
  width: 100%;
`;
const ListStyle = styled.li`
  list-style: none;
  display: inline-block;
  background-color: #eaeaea;
  border-radius: 10px;
  font-size: 10pt;
  opacity: 0.7;

  margin: 1vw;
  padding: 0.5vw 1vw;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: white;
    border: 1px solid black;
    opacity: 1;
    transition: 0.1s;
  }
`;
const Box = styled.li`
  width: 30%;
  float: left;
  list-style: none;
  margin: 1vw 1vw 1vw 0;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const LinkStyle = styled.a`
  text-decoration: none;
`;
const ContentsBox = styled.div`
  position: relative;
  height: 100%;
`;
const Ranking = styled.div`
  position: absolute;
  right: 0;
  margin: 1vw;
  color: white;
  font-size: 23pt;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
`;
const TextBox = styled.div`
  height: 100px;
  padding: 1vw;

  color: black;
`;
const Title = styled.div`
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Category = styled.div`
  font-size: 10pt;
  margin: 0.5vw 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Text = styled.span`
  width: 60%;
  float: left;
  font-size: 10pt;
  opacity: 0.5;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const State = styled.span`
  float: right;
  font-size: 10pt;
  font-weight: bold;
`;
