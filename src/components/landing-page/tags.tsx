import React from "react";

type Props = {};

const Tags = (props: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="bg-[#e7e7e7] px-2 py-2 rounded-full w-fit font-medium">High performance</div>
      <div className="bg-[#57F2CC] px-2 py-2 rounded-full w-fit font-medium">Revolutionary</div>
      <div className="bg-[#e7e7e7] px-2 py-2 rounded-full w-fit font-medium">Progressive</div>
    </div>
  );
};

export default Tags;
