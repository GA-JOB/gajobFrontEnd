import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostEdit } from "pages/community/PostEdit";
import { PostDelete } from "pages/community/PostDelete";
import { CommentList } from "pages/community/CommentList";
import { CommentForm } from "components/common/CommentForm";
import styled from "styled-components";
import {
  Markunread,
  Visibility,
  Chat,
  ChatBubbleOutline,
  BookmarkBorder,
  Bookmark,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import storage from "hooks/store";
import useGetPieceCommunity from "hooks/api/community/useGetPieceCommunity";
import { useCommunity } from "hooks/api/community";

export const PostDetails = () => {
  const nickname = storage.get("user-nickname");
  const { viewId } = useParams();
  const navigate = useNavigate();
  const { postScrap, postLikes } = useCommunity();
  // 커뮤니티 낱개 조회
  const { data } = useGetPieceCommunity(viewId ? parseInt(viewId) : 0);
  const [isOpenChat, setIsOpenChat] = useState<boolean>(true);
  const [isOpenLikesList, setIsOpenLikesList] = useState<boolean>(false);

  // 좋아요, 스크랩
  const [scrapState, setScrapState] = useState<boolean | undefined>(false);
  const [likesState, setLikesState] = useState<boolean | undefined>(
    data?.likeStatus
  );

  // 스크랩
  const onClickScrapBtn = async (e: any) => {
    e.preventDefault();

    setScrapState(!scrapState);
    postScrap(viewId ? parseInt(viewId) : 0);
  };

  // 좋아요
  const onClickFavoritBtn = async (e: any) => {
    e.preventDefault();

    if (data?.likeStatus === false) {
      if (window.confirm("게시글에 공감하시겠습니까?") === true) {
        setLikesState(!likesState);
        postLikes(viewId ? parseInt(viewId) : 0);
      }
    } else if (data?.likeStatus === true) {
      setLikesState(!likesState);
      postLikes(viewId ? parseInt(viewId) : 0);
      window.location.reload();
    }
  };

  const clickIconStyle = {
    fontSize: 25,
    cursor: "pointer",
    color: "black",
    margin: "0 0.5vw",
  };
  const IconStyle = {
    fontSize: 15,
    marginRight: "5px",
    marginTop: "-3px",
    color: "black",
    opacity: "0.6",
  };
  if (!data || data === undefined) return <></>;
  return (
    <>
      <ViewDetailWrapper>
        <WriterInfoWrapper>
          <WriterInfo>
            <strong> 🔎 게시글 정보</strong>
            <Info>
              <div>
                작성자: {data.writer + " "} <Markunread style={IconStyle} />
              </div>
              <div>
                카테고리: {data.postCategory ? data.postCategory : "선택 안함"}
              </div>
              <div>
                전공별: {data.jobCategory ? data.jobCategory : "선택 안함"}
              </div>
              <br />
              <Visibility style={IconStyle} />
              <span>{data.view}</span> <Chat style={IconStyle} />
              <span>{data.commentsCnt}</span> <Favorite style={IconStyle} />
              <span>{data.likes}</span>
            </Info>

            {/* login user === post writer일 경우 수정 or 삭제 */}
            {data.writer === nickname ? (
              <ButtonTypeBox>
                <PostEdit
                  id={viewId ? parseInt(viewId) : 0}
                  title={data.title}
                  content={data.content}
                  postCategory={data.postCategory}
                  jobCategory={data.jobCategory}
                />
                <PostDelete postId={viewId ? parseInt(viewId) : 0} />
              </ButtonTypeBox>
            ) : null}
          </WriterInfo>
        </WriterInfoWrapper>

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
            </Writer>
            <ContentContainer>
              <Title>{data.title}</Title>
              <PostContent>{data.content}</PostContent>
            </ContentContainer>

            <IconWrapper>
              {data.likeStatus === true && (
                <Favorite onClick={onClickFavoritBtn} style={clickIconStyle} />
              )}
              {data.likeStatus === false && (
                <FavoriteBorder
                  onClick={onClickFavoritBtn}
                  style={clickIconStyle}
                />
              )}

              <ChatBubbleOutline
                onClick={() => {
                  setIsOpenChat(!isOpenChat);
                }}
                style={clickIconStyle}
              />

              {scrapState !== true ? (
                <BookmarkBorder
                  onClick={onClickScrapBtn}
                  style={clickIconStyle}
                />
              ) : (
                <Bookmark onClick={onClickScrapBtn} style={clickIconStyle} />
              )}

              <br />
            </IconWrapper>

            <IconCnt>좋아요 {data.likes}개 </IconCnt>
            <IconCnt>댓글 {data.commentsCnt}개 </IconCnt>
          </DetailContent>

          {isOpenChat ? (
            <>
              {/* 댓글 리스트 */}
              <CommentList
                postId={viewId ? parseInt(viewId) : 0}
                postWriter={data?.writer}
              />

              {/* 댓글 등록 */}
              <CommentForm id={viewId ? parseInt(viewId) : 0} />
            </>
          ) : null}

          <ButtonWrapper>
            <Button onClick={() => navigate("/jobdam")}>목록으로</Button>
          </ButtonWrapper>
        </DetailContainer>
      </ViewDetailWrapper>
    </>
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
const WriterInfoWrapper = styled.div`
  width: 20%;
  height: 100%;
`;
const WriterInfo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 20%;
  margin: 13vw 8vw;
  padding: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  font-size: 13pt;
`;
const Info = styled.div`
  padding: 1vw;
  font-size: 11pt;
  font-weight: lighter;
`;
const ButtonTypeBox = styled.div`
  border-top: 1px solid #eaeaea;
  padding-top: 0.5vw;
  text-align: right;
`;

const DetailContainer = styled.div`
  width: 60%;
  padding: 2vw;
  margin: 1vw;

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

const ContentContainer = styled.div`
  margin: 3vw 2vw;
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
  padding-bottom: 1vw;
  opacity: 0.8;
`;
const IconCnt = styled.span`
  font-size: 11pt;
  margin-left: 0.5vw;
`;
const ButtonWrapper = styled.div`
  margin: 2vw;
  text-align: center;
  color: black;
`;
