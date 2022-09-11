import React from "react";

const Tags = ({ tag }) => {
  return (
    <p className="text-gray-600 text-xs rounded-md px-2 m-1 text-center bg-[#e9e9e9]">
      {tag.display_name}
    </p>
  );
};

export default Tags;
