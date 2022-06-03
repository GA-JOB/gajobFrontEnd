import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loading } from "components/loading";
import { ButtonType } from "components/button/ButtonType";
import { CommentForm } from "components/common/CommentForm";
import { CommentList } from "./CommentList";
import { StudyDelete } from "pages/study/StudyDetele";
import { StudyRegister } from "./StudyRegister";
import styled from "styled-components";
import {
  Markunread,
  Chat,
  Edit,
  BookmarkBorder,
  Bookmark,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import storage from "hooks/store";
import useGetPieceStudy from "hooks/api/study/useGetPieceStudy";
import { useStudy } from "hooks/api/study";

export const StudyDetails = () => {
  const nickname = storage.get("user-nickname");
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPieceStudy(Number(id));
  const { postScrap, postLikes } = useStudy();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);
  const [isOpenChat, setIsOpenChat] = useState<boolean>(true);
  const [isOpenLikesList, setIsOpenLikesList] = useState<boolean>(false);

  // 스크랩
  const onClickScrapBtn = async (e: any) => {
    e.preventDefault();

    postScrap(Number(id));
  };

  // 좋아요
  const onClickFavoritBtn = async (e: any) => {
    e.preventDefault();

    postLikes(Number(id));
  };

  const IconStyle = {
    fontSize: 15,
    margin: "5px",
    color: "black",
    opacity: "0.8",
    cursor: "pointer",
  };

  // 모집 상태 css
  const progressStatus = {
    border: "1.5px solid #1245AB",
    color: "#1245AB",
  };
  const closedStatus = {
    border: "1.5px solid #DB0000",
    color: "#DB0000",
  };

  if (!data) return <Loading />;
  return (
    <ViewDetailWrapper>
      <WriterInfoWrapper>
        <WriterInfo>
          <strong> 🔎 스터디 정보</strong>
          <Info>
            <div>
              작성자: {data.writer + " "} <Markunread style={IconStyle} />
            </div>
            <div>
              카테고리: {data.studyCategory ? data.studyCategory : "선택 안함"}
            </div>
            <div>등록일: {data.startDate ? data.startDate : ""}</div>
          </Info>

          {/* login user === post writer일 경우 수정 or 삭제 */}
          {data.writer === nickname ? (
            <ButtonTypeBox>
              <EditTxt
                onClick={() => {
                  setRegister((prev) => !prev);
                  setIsEdit((prev) => !prev);
                }}
              >
                {!register ? "수정" : "닫기"}
                <Edit style={IconStyle} />
              </EditTxt>
              <StudyDelete studyId={Number(id)} />
            </ButtonTypeBox>
          ) : (
            <ButtonType
              variants="contained"
              title="신청하러 가기"
              link={`/study/recruitment/${Number(id)}`}
              widthStyle="100%"
              onClick={() => {
                navigate(`/study/recruitment/${id}`, { state: data });
              }}
            />
          )}
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

            <Status
              style={data.status === "모집중" ? progressStatus : closedStatus}
            >
              {data.status}
            </Status>
          </Writer>

          {register ? (
            <ContentContainer>
              <StudyRegister
                id={data.id}
                title={data.title}
                content={data.content}
                studyCategory={data.studyCategory}
                area={data.area}
                minPeople={data.minPeople}
                maxPeople={data.maxPeople}
                startDate={data.startDate}
                endDate={data.endDate}
                status={data.status}
                isEdit={isEdit}
                setRegister={setRegister}
              />
            </ContentContainer>
          ) : (
            <ContentContainer>
              <Title>{data.title}</Title>

              <StudyInfo>
                <Info>
                  <div>
                    분야 <strong>{data.studyCategory}</strong>
                  </div>
                  <div>
                    지역 <strong>{data.area}</strong>
                  </div>
                  <div>
                    인원{" "}
                    <strong>{data.minPeople + "~" + data.maxPeople}명</strong>
                  </div>
                  <div>
                    모집 마감일 <strong>{data.endDate}</strong>
                  </div>
                </Info>
              </StudyInfo>

              <PostContent>
                {data.content}
                <br />
                {data.openTalkUrl && (
                  <a href={data.openTalkUrl} target="_blank" rel="noreferrer">
                    {data.openTalkUrl}
                  </a>
                )}
              </PostContent>
            </ContentContainer>
          )}

          <IconWrapper>
            <IconContent>
              <Chat
                style={IconStyle}
                onClick={() => {
                  setIsOpenChat((prev) => !prev);
                }}
              />
              {data.commentsCnt}
            </IconContent>
            <IconContent>
              <Favorite
                style={IconStyle}
                onClick={() => {
                  setIsOpenLikesList((prev) => !prev);
                }}
              />
              {data.likes}
            </IconContent>
            <IconContent>
              <Bookmark style={IconStyle} />
              {data.scrap}
            </IconContent>
          </IconWrapper>
        </DetailContent>

        {isOpenLikesList ? (
          <>
            {/* 좋아요 리스트 */}
            {data?.likesList?.map((list: any, index: number) => (
              <div>{list.nickname}</div>
            ))}
          </>
        ) : null}

        {isOpenChat ? (
          <>
            {/* 댓글 리스트 */}
            <CommentList
              studyId={Number(id)}
              postWriter={data?.writer}
              commentList={data?.comments}
            />

            {/* 댓글 등록 */}
            <CommentForm id={Number(id)} isStudy={true} />
          </>
        ) : null}

        <ButtonWrapper>
          <ButtonType
            variants="text"
            title="목록으로"
            onClick={() => navigate(-1)}
          />
        </ButtonWrapper>
      </DetailContainer>

      <LikesRound>
        {data.likeStatus === true ? (
          <Favorite onClick={onClickFavoritBtn} />
        ) : (
          <FavoriteBorder onClick={onClickFavoritBtn} />
        )}
        <IconTxt>likes</IconTxt>
      </LikesRound>
      <ScrapRound>
        {data.scrapStatus === true ? (
          <Bookmark onClick={onClickScrapBtn} />
        ) : (
          <BookmarkBorder onClick={onClickScrapBtn} />
        )}
        <IconTxt>scrap</IconTxt>
      </ScrapRound>
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

const WriterInfoWrapper = styled.div`
  width: 12%;
  height: 100%;
`;
const WriterInfo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 18%;
  margin: 12vw 8vw;
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
const EditTxt = styled.span`
  opacity: 0.8;
  font-size: 9pt;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  font-size: 11pt;
  opacity: 0.8;
`;
const IconContent = styled.span`
  margin-right: 10px;
`;

const DetailContainer = styled.div`
  width: 55%;
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
const CreateDate = styled.span`
  margin-left: 5px;
  font-size: 10pt;
  font-weight: lighter;
  color: gray;
`;
const Status = styled.span`
  float: right;
  padding: 0 0.5vw;
  border-radius: 20px;
  font-size: 10pt;
  font-weight: lighter;
`;

const ContentContainer = styled.div`
  margin: 3vw 0;
`;

const Title = styled.h4`
  color: #333;
  letter-spacing: 1px;
`;
const StudyInfo = styled.div`
  margin-left: -1vw;
  letter-spacing: 2px;
`;
const PostContent = styled.div`
  font-size: 12pt;
  padding-top: 1vw;
  font-weight: lighter;
`;

const ButtonWrapper = styled.div`
  margin: 2vw;
  text-align: center;
  color: black;
`;

// 좋아요, 스크랩 디자인
const LikesRound = styled.div`
  position: fixed;
  top: 320px;
  right: 150px;
  padding: 0.8vw;
  border-radius: 50px;
  background-color: white;
  cursor: pointer;
`;
const ScrapRound = styled.div`
  position: fixed;
  top: 400px;
  right: 150px;
  padding: 0.8vw;
  border-radius: 50px;
  background-color: white;
  cursor: pointer;
`;

const IconTxt = styled.div`
  text-align: center;
  font-size: 8pt;
  font-weight: bold;
`;
