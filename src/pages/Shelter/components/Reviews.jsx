import React, { useEffect, useState } from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph.jsx";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading.jsx";
import Heading from "../../../ui/Typography/Heading/Heading.jsx";
// import data from "../../../data/shelterData.json";
import { listenOrgReviews } from "../../../services/firestore_service.js";
import { useNavigate, useParams } from "react-router-dom";
import FilledButton from "../../../ui/Buttons/FilledButton.jsx";
import RatingStars from "./RatingStars";
import PetIcon from "./PetIcon.jsx";
export default function Reviews({ shelterId }) {
  const [reviews, setReviews] = useState([]);
  // const { id: shelterId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = listenOrgReviews(shelterId, setReviews);
    return unsub;
  }, [shelterId]);

  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-3xl flex flex-col">
        <div className="flex justify-between">
          <Heading className="text-center text-xl sm:text-2xl mb-6">
            Reviews
          </Heading>
          <FilledButton
            className="bg-primary-color rounded-xl text-white"
            onClick={() => navigate(`/shelters/${shelterId}/add-review`)}
          >
            Add Review
          </FilledButton>
        </div>

        {reviews.map((rv) => (
          <div key={rv.id} className="pb-4 mb-4 border-b border-gray-400">
            <div className="flex gap-4">
              <img
                src={rv.authorAvatar || "/placeholder-avatar.png"}
                alt={rv.authorName}
                className="w-12 h-12 rounded-full border"
              />
              <div className="flex-1">
                <Heading className="text-base font-semibold">
                  {rv.authorName}
                </Heading>
                <RatingStars rating={rv.rating} />
                <Paragraph className="mt-2">{rv.comment}</Paragraph>
                <PetIcon petType={rv.petType} />
                <Paragraph className="text-xs text-gray-500 mt-2">
                  {rv.createdAt?.seconds &&
                    new Date(rv.createdAt.seconds * 1000).toLocaleDateString()}
                </Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
