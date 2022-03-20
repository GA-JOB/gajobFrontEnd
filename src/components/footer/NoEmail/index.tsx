import styled from "styled-components";

export const NoEmail = () => {
  return (
    <>
      {/* <Etitle>이메일 무단수집거부</Etitle> */}

      <Econtainer>
        <EcontainerBox>
          <Eimg src="http://ilasskorea.org/inc/application/dubu_policy/skin/s150319001001/images/img_email_refusal.png"></Eimg>
          <Econtents>
            본 웹 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
            밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며 이를
            위반 시 정보통신망법에 의해 형사 처벌됨을 유념하시기 바랍니다.
          </Econtents>
          <Elegal>
            ※ 정보통신망 이용촉진 및 정보보호 등에 관한법률 제50조의 2
            (전자우편주소의 무단 수집행위 등 금지)
          </Elegal>
        </EcontainerBox>

        <EcontainerUl>
          <ul>
            <h4>
              | 정보통신망법 제 50조의 2 (전자우편주소의 무단 수집행위 등 금지)
            </h4>
            <LegalContents>
              누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷
              홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의
              기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.
            </LegalContents>
            <LegalContents>
              누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를
              판매·유통하여서는 아니된다.
            </LegalContents>
            <LegalContents>
              누구든지 제1항의 및 제2항의 규정에 의하여 수집·판매 및 유통이
              금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는
              아니된다.
            </LegalContents>
          </ul>
        </EcontainerUl>

        <Ealert>
          ※ 만일, 위와 같은 기술적 조치를 사용한 이메일주소 무단수집 피해를
          당하신 경우
          <Alerthighlight>
            {" "}
            불법스팸 대응센터 전용전화(국번없이 02-1336)나 홈페이지(
            www.spamcop.or.kr )의 신고
          </Alerthighlight>{" "}
          창을 통하여 신고하기 바랍니다.
        </Ealert>
      </Econtainer>
    </>
  );
};

/* 소제목 디자인 적용 */
// const noEmail_Title styled.div`
//     margin-left: 20%;
//     margin-top: 5%;

//     border-left: 5px solid #2a4476;
//     padding: 2px;
//     font-weight: bold;
// `;
// const Etitle = styled.div`
//   text-align: center;
// `;

/* container 여백 적용*/
const Econtainer = styled.div`
  margin-left: 20%;
  margin-bottom: 10%;
`;

/*container box*/
/*box 위치 설정 및 디자인*/
const EcontainerBox = styled.div`
  width: 75%;
  padding: 40px;
  margin-top: 4%;
  margin-bottom: 5%;

  border: 2px solid #2a4476;
  border-radius: 5px;
  box-shadow: var(--light-shadow);
`;

/*noEmail img 크기 및 위치 설정*/
const Eimg = styled.img`
  width: 15%;
  margin-top: 10px;
  margin-right: 20px;
  float: left;
`;
const Econtents = styled.p`
  font-size: 12pt;
`;
const Elegal = styled.p`
  font-size: 10pt;
`;

/* containerUl 디자인*/
const EcontainerUl = styled.div`
  margin-bottom: 50px;
`;
/* 상, 하위 li 구분을 위한 margin 값 적용 */
const LegalContents = styled.li`
  width: 73%;
  margin-left: 15px;
  margin-top: 5px;
`;

const Ealert = styled.div`
  margin-left: 3%;
  width: 72%;
  font-size: 9pt;
`;
const Alerthighlight = styled.span`
  color: #db0000;
  font-weight: bold;
`;
