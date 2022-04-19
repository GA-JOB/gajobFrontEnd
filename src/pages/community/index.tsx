import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuTitle } from "components/Menutitle";
import { Loading } from "components/loading";
import { ViewDetails } from "./ViewDetails";
import styled from "styled-components";
import {
  Visibility,
  ChatBubble,
  // BookOutlined,
  // Bookmark,
} from "@mui/icons-material";
import useGetCommunity from "hooks/api/community/useGetCommunity";
import storage from "hooks/store";

export const Community = () => {
  const token = storage.get("user-token");
  const { data } = useGetCommunity();

  const [viewId, setViewId] = useState<number | null>(null);
  const [category, setCategory] = useState<String | null>(null);

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
  };

  if (!data) return <Loading />;
  return (
    <>
      {!token ? (
        window.confirm("로그인 후 이용가능합니다.") === true ? (
          window.location.replace("/login")
        ) : (
          window.location.replace("/")
        )
      ) : (
        <>
          <CommunityWrapper>
            <MenuTitle
              title="JOB담"
              info="취업 관련하여 꿀팁을 서로 공유해보세요!"
            />

            <CommuContainer>
              <SideNavWrapper>
                <SideNav>
                  <NavTitle>category</NavTitle>
                  <NavList onClick={() => setCategory(null)}>
                    📍 전체보기
                  </NavList>
                  <NavList onClick={() => setCategory("취뽀")}>🥳 취뽀</NavList>
                  <NavList onClick={() => setCategory("취업고민")}>
                    💼 취업고민
                  </NavList>
                  <NavList onClick={() => setCategory("취뽀")}>🍯 꿀팁</NavList>
                  <NavList onClick={() => setCategory("일상")}>🌸 일상</NavList>
                </SideNav>
              </SideNavWrapper>

              <ContentWrapper>
                {viewId === null ? (
                  <>
                    <JobdamPick></JobdamPick>

                    <GoToPostStyle to="/jobdam-posting">
                      <div>
                        취업 고민이나 나만의 취업 꿀팁 or 경험담을 공유하러
                        가보아요 !
                      </div>
                    </GoToPostStyle>

                    {data?.map((list: any, index: number) => (
                      <div key={index}>
                        {category === list.postCategory && (
                          <>
                            <PostWrapper
                              onClick={() => {
                                setViewId(list.id);
                              }}
                            >
                              <Writer>
                                {list.writer}{" "}
                                <CreateDate>
                                  {list.createdDate === list.modifiedDate ? (
                                    <>{list.createdDate}</>
                                  ) : (
                                    <>{list.modifiedDate} 수정됨.</>
                                  )}
                                </CreateDate>
                              </Writer>
                              <ContentContainer>
                                <Title>{list.title}</Title>
                                <PostContent>{list.content}</PostContent>
                              </ContentContainer>
                              <IconWrapper>
                                <IconContent>
                                  <Visibility style={IconStyle} />
                                  {list.view}
                                </IconContent>
                                <IconContent>
                                  <ChatBubble style={IconStyle} />
                                </IconContent>
                              </IconWrapper>
                            </PostWrapper>
                          </>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <ViewDetails id={viewId} />
                  </>
                )}
              </ContentWrapper>
            </CommuContainer>
          </CommunityWrapper>
        </>
      )}
    </>
  );
};

const CommunityWrapper = styled.div`
  width: 100%;
  min-height: 45vw;
  background-color: #eaeaea;
`;
const CommuContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SideNavWrapper = styled.div`
  width: 30%;
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 15%;
  height: 39%;
  margin-top: 17vw;
  margin-left: 10vw;
  padding: 1vw;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const NavTitle = styled.div`
  font-weight: lighter;
  margin: 0.3vw 0.5vw;
`;
const NavList = styled.div`
  list-style: none;
  margin: 0.6vw;
  padding: 0.3vw;
  font-size: 12pt;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    padding: 0.3vw 1vw;
    background-color: #eaeaea;
    border-radius: 5px;
    transition: 0.5s;
  }
`;

const JobdamPick = styled.div``;
const GoToPostStyle = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2vw;
  padding: 1vw 2vw;
  text-decoration: none;
  font-weight: lighter;
  font-size: 13pt;
  color: black;

  border: 1px solid #eaeaea;
  border-radius: 5px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  width: 70%;
  margin-bottom: 3vw;
  padding: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`;
const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw;
  border-top: 1px solid #eaeaea;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
const Writer = styled.div`
  margin: 5px;
  font-size: 12pt;
  font-weight: bold;
`;
const ContentContainer = styled.div`
  margin: 5px;
`;
const Title = styled.h5`
  color: #333;
  letter-spacing: 1px;
`;
const PostContent = styled.div`
  font-size: 11pt;
  font-weight: lighter;
`;
const CreateDate = styled.span`
  margin-left: 5px;
  font-size: 10pt;
  font-weight: lighter;
  color: gray;
`;

const IconWrapper = styled.div`
  font-size: 10pt;
  opacity: 0.6;
`;
const IconContent = styled.span`
  margin-right: 10px;
`;
