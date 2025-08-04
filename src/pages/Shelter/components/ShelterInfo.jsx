import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import { StaticStarIcon } from "../../../ui/Icons/StaticIcons";
import Gallery from "./Gallery";

export default function ShelterInfo({shelterData,role}) {
console.log(role)
  return (
    <div className="">
      {role==='organization'&&<SubHeading className="text-subheader-lg mb-2"> {shelterData?.info.name} </SubHeading>}
      {role==='personal'&&<SubHeading className="text-subheader-lg mb-2"> {shelterData?.userName} </SubHeading>}
      <div className="flex items-center gap-1 mb-4">
        <StaticStarIcon size={18} color="#F7C457" fill="#F7C457" />

        <Paragraph className="text-paragraph-sm text-paragraph-color">
          ({shelterData?.rating||'5'})
        </Paragraph>
        <Paragraph className="text-paragraph-sm text-primary-color">
          {shelterData?.contact.city||'4'}
        </Paragraph>
      </div>

      <Gallery images={shelterData?.gallery||[]} />

      {/* <Paragraph className="text-paragraph-lg mb-4">
        Caring and Experienced Pet sitter / Dog walker
      </Paragraph> */}
    </div>
  );
}
