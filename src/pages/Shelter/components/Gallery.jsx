import React from "react";
import OptionButton from "../../../ui/Buttons/OptionButton";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Gallery({ images }) {
  const firstFourImg = images?.slice(0, 4) || [];

  const fancyboxItems =
    images?.map((img) => ({
      src: img,
      thumb: img,
    })) || [];

  const fancyboxOptions = {
    Carousel: {
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
      Zoomable: {
        Panzoom: {
          maxScale: "cover",
          panMode: "mousemove",
          mouseMoveFactor: 1.1,
        },
      },
    },
  };

  const openFancybox = (startIndex = 0) => {
    if (fancyboxItems.length > 0) {
      if (typeof Fancybox !== "undefined") {
        Fancybox.show(fancyboxItems, { ...fancyboxOptions, startIndex });
      } else {
        console.error(
          "Fancybox is not loaded. Please ensure CDN scripts are correctly included or npm package is installed."
        );
      }
    } else {
      console.warn("No images available to open Fancybox.");
    }
  };

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-1 mb-6 h-90 relative">
      {firstFourImg.map((img, index) => {
        const colSpanClass =
          index === 0 || index === 1
            ? "col-span-2 row-span-2"
            : "col-span-1 row-span-1";

        if (!img) {
          return null;
        }

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-md ${colSpanClass}`}
          >
            <img
              src={img}
              alt={`img ${index + 1}`}
              className="w-full h-full object-cover aspect-video transform hover:scale-105 transition-transform duration-300"
              onClick={() => openFancybox(index)}
            />
          </div>
        );
      })}

      <OptionButton
        title="more photos"
        className="text-white-color bg-primary-color w-fit text-sm absolute right-2 bottom-2"
        onClick={() => openFancybox(4)}
      />
    </div>
  );
}
