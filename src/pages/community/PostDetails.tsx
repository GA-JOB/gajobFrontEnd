import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loading } from "components/loading";
import { PostEdit } from "pages/community/PostEdit";
import { PostDelete } from "pages/community/PostDelete";
import { CommentList } from "pages/community/CommentList";
import { CommentForm } from "components/common/CommentForm";
import styled from "styled-components";
import {
  Visibility,
  ChatBubble,
  BookmarkBorder,
  BookmarkAdded,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import storage from "hooks/store";
import { post } from "lib/api/client";
import useGetPieceCommunity from "hooks/api/community/useGetPieceCommunity";

export const PostDetails = () => {
  const nickname = storage.get("user-nickname");
  const { viewId } = useParams();
  const navigate = useNavigate();
  // 커뮤니티 낱개 조회
  const { data } = useGetPieceCommunity(viewId ? parseInt(viewId) : 0);
  const [scrapState, setScrapState] = useState<boolean>();

  const onClickBtn = async (e: any) => {
    e.preventDefault();
    await post(`/community/scrap/${viewId ? parseInt(viewId) : 0}`).then(
      (res) => {
        console.log(res);
        res === "scrap-success" ? setScrapState(true) : setScrapState(false);
      }
    );
  };

  const ScrapIconStyle = {
    fontSize: 25,
    cursor: "pointer",
    color: "#980000",
  };
  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
  };

  if (!data) return <Loading />;
  return (
    <ViewDetailWrapper>
      <DetailContainer>
        <DetailContent>
          <Writer>
            {data.writer}

            <CreateDate>
              {data.createdDate === data.modifiedDate ? (
                <>{data.createdDate}</>
              ) : (
                <>{data.modifiedDate} 수정됨.</>
              )}
            </CreateDate>

            <Bookmark>
              {scrapState !== true ? (
                <BookmarkBorder onClick={onClickBtn} style={ScrapIconStyle} />
              ) : (
                <BookmarkAdded onClick={onClickBtn} style={ScrapIconStyle} />
              )}
            </Bookmark>
          </Writer>

          <ContentContainer>
            <Title>{data.title}</Title>
            <PostContent>{data.content}</PostContent>

            {/* login user === post writer일 경우 수정 or 삭제 */}
            {data.writer === nickname ? (
              <ButtonTypeBox>
                <PostEdit
                  id={viewId ? parseInt(viewId) : 0}
                  title={data.title}
                  content={data.content}
                  postCategory={data.postCategory}
                />

                <PostDelete postId={viewId ? parseInt(viewId) : 0} />
              </ButtonTypeBox>
            ) : null}
          </ContentContainer>
          <IconWrapper>
            <IconContent>
              <Visibility style={IconStyle} />
              {data.view}
            </IconContent>
            <IconContent>
              <ChatBubble style={IconStyle} />
              {data.commentsCnt}
            </IconContent>
          </IconWrapper>
        </DetailContent>

        {/* 댓글 리스트 */}
        <CommentList
          postId={viewId ? parseInt(viewId) : 0}
          postWriter={data?.writer}
        />

        {/* 댓글 등록 */}
        <CommentForm id={viewId ? parseInt(viewId) : 0} />

        <ButtonWrapper>
          {viewId && viewId !== "1" ? (
            <Button
              onClick={() =>
                navigate(viewId ? `/jobdam/${parseInt(viewId) - 1}` : "/jobdam")
              }
            >
              이전
            </Button>
          ) : null}
          <Button onClick={() => navigate("/jobdam")}>목록으로</Button>
          <Button
            onClick={() =>
              navigate(viewId ? `/jobdam/${parseInt(viewId) + 1}` : "/jobdam")
            }
          >
            다음
          </Button>
        </ButtonWrapper>
      </DetailContainer>
    </ViewDetailWrapper>
  );
};

const ViewDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 45vw;
  margin: auto;
  padding: 5vw 0;
  background-color: #eaeaea;
`;
const DetailContainer = styled.div`
  width: 60%;
  padding: 2vw;

  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`;
const DetailContent = styled.div`
  padding: 2vw;
`;

const Writer = styled.div`
  margin: 5px;
  font-size: 12pt;
  font-weight: bold;
`;
const Bookmark = styled.div`
  float: right;
`;
const ContentContainer = styled.div`
  margin: 3vw 0;
`;
const ButtonTypeBox = styled.div`
  padding: 1vw;
  text-align: right;
`;
const Title = styled.h4`
  color: #333;
  letter-spacing: 1px;
`;
const PostContent = styled.div`
  font-size: 12pt;
  padding-top: 1vw;
  font-weight: lighter;
`;
const CreateDate = styled.span`
  margin-left: 5px;
  font-size: 10pt;
  font-weight: lighter;
  color: gray;
`;

const IconWrapper = styled.div`
  font-size: 11pt;
  opacity: 0.8;
`;
const IconContent = styled.span`
  margin-right: 10px;
`;
const ButtonWrapper = styled.div`
  margin: 2vw;
  text-align: center;
  color: black;
`;
