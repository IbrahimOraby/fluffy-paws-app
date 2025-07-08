import React from "react";
import LargeHeading from "./Headings/LargeHeading";
import MediumHeading from "./Headings/MediumHeading";
import SmallHeading from "./Headings/SmallHeading";
import MediumParagraph from "./Paragraphs/MediumParagraph";
import SmallParagraph from "./Paragraphs/SmallParagraph";
import LargeParagraph from "./Paragraphs/LargeParagraph";
import LargeSubHeading from "./SubHeadings/LargeSubHeading";
import MediumSubHeading from "./SubHeadings/MediumSubHeading";
import SmallSubHeading from "./SubHeadings/SmallSubHeading";

function Typography() {
	return (
		<div className="p-24">
			<LargeHeading>ِAyo, I'm Large</LargeHeading>
			<br />
			<hr />
			<br />
			<MediumHeading>Hey guys, I'm Medium</MediumHeading>
			<br />
			<hr />
			<br />
			<SmallHeading>
				It's kinda weird, but I've always been this small 😞
			</SmallHeading>
			<div className="bg-blue-700 my-18">-</div>
			<LargeParagraph>ِAyo, I'm Large</LargeParagraph>
			<br />
			<hr />
			<br />
			<MediumParagraph>Hey guys, I'm Medium</MediumParagraph>
			<br />
			<hr />
			<br />
			<SmallParagraph>
				It's kinda weird, but I've always been this small 😞
			</SmallParagraph>
			<SmallParagraph className="text-emerald-600">
				I'm also small 😞
			</SmallParagraph>
			<div className="bg-green-700 my-18">-</div>
			<LargeSubHeading>ِAyo, I'm Large</LargeSubHeading>
			<br />
			<hr />
			<br />
			<MediumSubHeading>Hey guys, I'm Medium</MediumSubHeading>
			<br />
			<hr />
			<br />
			<SmallSubHeading>
				It's kinda weird, but I've always been this small 😞
			</SmallSubHeading>
		</div>
	);
}

export default Typography;
