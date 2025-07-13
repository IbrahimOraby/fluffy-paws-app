import React, { useEffect, useState } from "react";
import Paragraph from "../Typography/Paragraph/Paragraph";
import SubHeading from "../Typography/SubHeadings/SubHeading";
import Heading from "../Typography/Heading/Heading";
import data from "../../data/shelterData.json";
import {
  StaticDogIcon,
  StaticCatIcon,
  StaticStarIcon,
} from "../Icons/StaticIcons.jsx";

function renderStars(rating) {
  const totalStars = 5;

  return [...Array(totalStars)].map((_, index) => {
    const isFilled = index < rating;
    return (
      <StaticStarIcon
        key={index}
        color={isFilled ? "#F7C457" : "#D1D5DB"}
        fill={isFilled ? "#F7C457" : "none"}
        size={12}
      />
    );
  });
}

function renderPetIcon(petType) {
  return petType === "dog" ? (
    <span>
      <StaticDogIcon size={16} color=" #be5985" />
    </span>
  ) : (
    <span>
      <StaticCatIcon size={16} color=" #be5985" />
    </span>
  );
}
export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(data.reviews);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex-col px-15  ">
        <Heading className="text-center">Reviews</Heading>
        {reviews.map((review, index) => (
          <div key={index} className="pb-4 mb-4 border-b border-gray-400">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div className="flex-1">
                <Heading className="text-lg font-semibold text-black">
                  {review.author}
                </Heading>
                <div className="flex gap-1 mt-1">
                  {renderStars(review.rating)}
                </div>
                <Paragraph className="text-paragraph-sm text-gray-700 mt-2">
                  {review.comment}
                </Paragraph>
                <div className="mt-2">{renderPetIcon(review.petType)}</div>
                <Paragraph className="mt-2 text-paragraph-xs text-paragraph-color text-right">
                  {review.date}
                </Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
