import React from "react";

interface SegmentButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  paddingX: string;
  paddingY: string; 
}

function SegmentButton({ text, bgColor, textColor, paddingX, paddingY }: SegmentButtonProps) {
  return (
    <button
      className={`grow flex justify-center items-center ${paddingX} ${paddingY} ${bgColor} ${textColor}`}
      type="button"
    >
      {text}
    </button>
  );
}

function RoleSegment() {
  return (
    <section className="max-w-screen-lg mx-48 mt-16 flex text-2xl text-center whitespace-nowrap bg-white shadow-sm max-w-[800px] md:flex-wrap">
      <SegmentButton
        text="Members"
        bgColor="bg-cyan-100"
        textColor="text-sky-400"
        paddingX="px-32 md:px-5"
        paddingY="py-2"
      />
      <SegmentButton
        text="Project owners"
        bgColor="bg-white"
        textColor="text-sky-400"
        paddingX="px-16 pl-20 md:px-5 md:max-w-full"
        paddingY="py-7"
      />
    </section>
  );
}

export default RoleSegment;
