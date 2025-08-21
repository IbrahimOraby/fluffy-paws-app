import React from "react";
import OptionButton from "../../../ui/Buttons/OptionButton";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import Heading from "../../../ui/Typography/Heading/Heading";

export default function BackgroundImageCard({
  img,
  buttonclass = "",
  h = "",
  p = "",
  imgclass = "",
}) {
  return (
    <div className={`relative ${imgclass}`}>
      <img
        src={img}
        alt="Card Background"
        className={`w-full  object-cover ${imgclass}`}
      />

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-start justify-center mt-12">
        <div className="flex flex-col items-center text-center">
          {h && (
            <Heading
              className="text-white font-bold 
      text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              {h}
            </Heading>
          )}

          {p && (
            <Paragraph
              className="text-white font-bold 
      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            >
              {p}
            </Paragraph>
          )}
        </div>
        <OptionButton title={"test"} className={`${buttonclass}`} />
      </div>
    </div>
  );
}
