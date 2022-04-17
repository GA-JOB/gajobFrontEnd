import { useState } from "react";
import { MenuTitle } from "components/Menutitle";
import { ButtonType } from "components/button/ButtonType";
import { Loading } from "components/loading";
import { ViewDetails } from "./ViewDetails";
import styled from "styled-components";
import useGetCommunity from "hooks/api/community/useGetCommunity";
import storage from "hooks/store";

export const Community = () => {
  const token = storage.get("user-token");

  const [viewId, setViewId] = useState<number | null>(null);

  const { data } = useGetCommunity(viewId);

  console.log(data);

  if (!data) return <Loading />;
  return (
    <>
      {!token ? (
        window.confirm("로그인 후 이용가능합니다.")
      ) : (
        <>
          <CommunityWrapper>
            <MenuTitle
              title="JOB담"
              info="취업 관련하여 꿀팁을 서로 공유해보세요!"
            />

            <CommuContainer>
              <SideNav>
                <Title>category</Title>
                <NavList>취업고민</NavList>
                <NavList>꿀팁</NavList>
                <NavList>일상</NavList>
              </SideNav>
              <ContentWrapper>
                <ButtonType title={"게시글 등록하기"} link="/jobdam-posting" />

                {viewId === null ? (
                  <>
                    {data?.map((list: any, index: number) => (
                      <div key={index}>
                        <div
                          id="detail"
                          onClick={() => {
                            setViewId(list.id);
                          }}
                        >
                          {list.id}
                        </div>
                        {list.title}, {list.writer}, {list.view},
                        {list.createdDate},{list.modifiedDate}, 조회수:
                        {list.view}
                        {list.comments?.map((comment: any, index: number) => (
                          // 댓글 개수, 조회수 등.
                          <div key={index}>
                            댓글: {comment.comment} (작성자: {comment.nickname})
                          </div>
                        ))}
                      </div>
                    ))}
                  </>
                ) : (
                  <ViewDetails viewId={viewId} />
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
  background-color: #eaeaea;
`;
const CommuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SideNav = styled.div`
  width: 15%;
  height: 100%;
  margin: 2vw;
  padding: 1vw;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 5px;
`;
const Title = styled.div`
  font-weight: lighter;
`;
const NavList = styled.div`
  list-style: none;
  margin: 0.5vw;
`;
const ContentWrapper = styled.div`
  width: 70%;
  margin: 2vw;
  border-radius: 5px;
  background-color: white;
`;
