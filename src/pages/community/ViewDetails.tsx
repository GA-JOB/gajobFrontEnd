import { Dispatch, SetStateAction, useState } from "react";
import { Loading } from "components/loading";
import useGetCommunity from "hooks/api/community/useGetCommunity";

interface ICommunityListProps {
  id?: number;
  viewId: number | null;
}

export const ViewDetails = ({ id, viewId }: ICommunityListProps) => {
  const { data } = useGetCommunity(viewId);

  console.log(viewId);

  console.log(data);

  if (!data) return <Loading />;
  return (
    <>
      {viewId}
      {data ? <div>{data}</div> : null}
    </>
  );
};
