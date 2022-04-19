import { useState } from "react";
import { Loading } from "components/loading";
import { ButtonType } from "components/button/ButtonType";
import styled from "styled-components";
import { Visibility, ChatBubble } from "@mui/icons-material";
import useGetPieceCommunity from "hooks/api/community/useGetPieceCommunity";
import { useCommunity } from "hooks/api/community/index";

interface ICommunityListProps {
  id: number | null;
  comment?: string;
}

export const ViewDetails = ({ id, comment = "" }: ICommunityListProps) => {
  const { data } = useGetPieceCommunity(id ? id : null);
  const { postComment } = useCommunity();
  const IconStyle = {
    fontSize: 18,
    margin: "5px",
    color: "black",
  };

  const [form, setForm] = useState({
    commentForm: comment,
  });
  const { commentForm } = form;

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // commentForm 비어있을 경우 disabled 되도록.
    if (commentForm === "") return;
    if (window.confirm("댓글을 등록하시겠습니까?") === true) {
      console.log(form);

      postComment({
        id: id,
        comment: commentForm,
      });
    }
  };

  if (!data) return <Loading />;
  return (
    <ViewDetailWrapper>
      <DetailContent>
        <Writer>
          {data.writer}{" "}
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
          </IconContent>
        </IconWrapper>
      </DetailContent>

      {/* 댓글 */}
      {data.comments?.map((comment: any, index: number) => (
        // 댓글 개수, 조회수 등.
        <CommentWrapper key={index}>
          <Writer>
            {comment.nickname}{" "}
            <CreateDate>
              {data.createdDate === data.modifiedDate ? (
                <>{data.createdDate}</>
              ) : (
                <>{data.modifiedDate} 수정됨.</>
              )}
            </CreateDate>
          </Writer>
          <PostContent>{comment.comment}</PostContent>
        </CommentWrapper>
      ))}

      <CommentForm onSubmit={handleSubmit}>
        <InputStyle
          name="commentForm"
          value={commentForm}
          placeholder="댓글을 입력하세요."
          onChange={onTextAreaChange}
        ></InputStyle>
        <ButtonStyle>
          {commentForm === "" ? (
            <ButtonType
              disabled={true}
              title={"등록"}
              widthStyle={"50%"}
              paddingStyle="1vw"
            />
          ) : (
            <ButtonType title={"등록"} widthStyle={"50%"} paddingStyle="1vw" />
          )}
        </ButtonStyle>
      </CommentForm>

      <ButtonType title={"목록으로"} link="/jobdam" buttonColor="black" />
    </ViewDetailWrapper>
  );
};

const ViewDetailWrapper = styled.div``;
const DetailContent = styled.div`
  padding: 2vw;
`;

const CommentWrapper = styled.div`
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
  margin: 3vw 0;
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

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #eaeaea;
`;

const InputStyle = styled.textarea`
  width: 95%;
  height: 4vw;
  margin: 2vw 0 0 2vw;
  padding: 1vw;
  border: 1px solid lightgray;
  border-radius: 5px;

  font-size: 11pt;
`;
const ButtonStyle = styled.span`
  width: 20%;
  margin-left: 2vw;
`;
