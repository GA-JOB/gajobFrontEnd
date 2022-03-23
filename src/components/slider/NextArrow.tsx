import React from "react";

interface INextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

export const NextArrow = ({ onClick }: INextArrowProps) => {
  return (
    <div className="next-arrow" onClick={onClick}>
      누르면 넘어감
    </div>
  );
};
