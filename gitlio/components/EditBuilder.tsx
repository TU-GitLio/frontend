import React, { ReactNode } from "react";

interface EditBuilderProps {
  children?: ReactNode;
}

const EditBuilder: React.FC<EditBuilderProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-start w-4/5 h-full">
      <div className="w-full h-[95%] bg-[#F6F7FF] border-2 rounded-2xl ">
        {children}
      </div>
    </div>
  );
};

export default EditBuilder;
