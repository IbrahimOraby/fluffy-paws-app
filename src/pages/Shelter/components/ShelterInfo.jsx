import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import { StaticStarIcon } from "../../../ui/Icons/StaticIcons";
import Gallery from "./Gallery";
import { listenOrgRating } from "../../../services/firestore_service";
import { useEffect, useState } from "react";

export default function ShelterInfo({ shelterData, role }) {
  const [rating, setRating] = useState({ avg: 0, count: 0 });

  const shelterId =
    shelterData?.uid ?? shelterData?.id ?? shelterData?.docId ?? null;

  useEffect(() => {
    if (!shelterId) return;

    if (role !== "organization") return;

    const unsub = listenOrgRating(shelterId, setRating);
    return () => unsub && unsub();
  }, [shelterId, role]);
  console.log(role);
  return (
    <div className="">
      {role === "organization" && (
        <SubHeading className="text-subheader-lg mb-2">
          {" "}
          {shelterData?.info.name}{" "}
        </SubHeading>
      )}
      {role === "personal" && (
        <SubHeading className="text-subheader-lg mb-2">
          {" "}
          {shelterData?.userName}{" "}
        </SubHeading>
      )}
      <div className="flex items-center gap-1 mb-4">
        <StaticStarIcon size={18} color="#F7C457" fill="#F7C457" />

        <Paragraph className="text-paragraph-sm text-paragraph-color">
          {rating.count
            ? `${rating.avg.toFixed(1)} (${rating.count})`
            : "No ratings yet"}
        </Paragraph>
        <Paragraph className="text-paragraph-sm text-primary-color">
          {shelterData?.contact.city || "4"}
        </Paragraph>
      </div>

      <Gallery images={shelterData?.gallery || []} />

      {/* <Paragraph className="text-paragraph-lg mb-4">
        Caring and Experienced Pet sitter / Dog walker
      </Paragraph> */}
    </div>
  );
}
