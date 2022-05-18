import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loading } from "components/loading";
import { PostEdit } from "pages/community/PostEdit";
import { PostDelete } from "pages/community/PostDelete";
import { CommentList } from "pages/community/CommentList";
import { CommentForm } from "components/common/CommentForm";
import styled from "styled-components";
import {
  Markunread,
  Visibility,
  ChatBubble,
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
  const [loading, setLoading] = useState<boolean>(true);
  console.log(data);

  // loading 상태 적용
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // 좋아요 리스트 목록 로직 구현.
  // data의 likesList 리스트만 가져와 배열 재구성.
  const likesMap = data?.likesList
    ?.filter((likes: any) => likes.nickname === nickname)
    .map((likes: any) => likes.nickname);
  console.log(likesMap!);

  const [scrapState, setScrapState] = useState<boolean | undefined>(
    likesMap && likesMap?.length === 0 ? false : true
  );
  const [likesState, setLikesState] = useState<boolean | undefined>(
    likesMap && likesMap?.length === 0 ? false : true
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

    setLikesState(!likesState);
    postLikes(viewId ? parseInt(viewId) : 0);
    console.log(likesMap);
  };

  const clickIconStyle = {
    fontSize: 22,
    cursor: "pointer",
    color: "black",
    marginLeft: "1vw",
  };
  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
  };

  if (!data) return <>Error</>;
  return (
    <>
      {loading ? (
        // 스켈레톤으로 변경 생각.
        <Loading />
      ) : (
        <ViewDetailWrapper>
          <WriterInfo>
            <div>게시글 정보</div>
            작성자: {data.writer}
            {/* <Markunread /> */}
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
          </WriterInfo>

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
                <IconContent>
                  <Visibility style={IconStyle} />
                  {data.view}
                </IconContent>
                <IconContent>
                  <ChatBubble style={IconStyle} />
                  {data.commentsCnt}
                </IconContent>

                {/* 좋아요 리스트 */}
                <AddIconWrapper>
                  <div>좋아요 {data.likes}개</div>
                  {likesState === true ? (
                    <Favorite
                      onClick={onClickFavoritBtn}
                      style={clickIconStyle}
                    />
                  ) : (
                    <FavoriteBorder
                      onClick={onClickFavoritBtn}
                      style={clickIconStyle}
                    />
                  )}

                  {scrapState !== true ? (
                    <BookmarkBorder
                      onClick={onClickScrapBtn}
                      style={clickIconStyle}
                    />
                  ) : (
                    <Bookmark
                      onClick={onClickScrapBtn}
                      style={clickIconStyle}
                    />
                  )}
                </AddIconWrapper>
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
              <Button onClick={() => navigate("/jobdam")}>목록으로</Button>
            </ButtonWrapper>
          </DetailContainer>
        </ViewDetailWrapper>
      )}
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
const WriterInfo = styled.div`
  width: 20%;
  padding: 2vw;
  margin: 2vw;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  font-weight: lighter;
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
const AddIconWrapper = styled.div`
  float: right;
  margin-right: 3vw;
`;
const ContentContainer = styled.div`
  margin: 3vw 0;
`;
const ButtonTypeBox = styled.div`
  border-top: 1px solid #eaeaea;
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
