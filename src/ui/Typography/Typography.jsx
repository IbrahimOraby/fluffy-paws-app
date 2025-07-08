import Heading from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph";
import SubHeading from "./SubHeadings/SubHeading";

function Typography() {
	return (
		<div className="p-12 space-y-20">
			<section>
				<Heading className="text-header-lg text-primary-color">Typography Components</Heading>
				<Paragraph className="text-paragraph-md text-gray-600">
					This guide demonstrates how to use the custom <code>Heading</code>, <code>SubHeading</code>, and <code>Paragraph</code> components with predefined Tailwind classes.
				</Paragraph>
			</section>

			<section>
				<SubHeading className="text-subheader-md">🧱 Headings</SubHeading>
				<Paragraph className="text-paragraph-sm mb-6 text-gray-500">
					Import and use the <code>Heading</code> component to render main titles.
				</Paragraph>

				<Heading className="text-header-lg">Heading Large (text-header-lg)</Heading>
				<Heading className="text-header-md">Heading Medium (text-header-md)</Heading>
				<Heading className="text-header-sm">Heading Small (text-header-sm)</Heading>

				<code className="block mt-4 bg-gray-100 p-4 rounded text-sm">
					{`<Heading className="text-header-lg">Heading Text</Heading>`}
				</code>
			</section>

			<section>
				<SubHeading className="text-subheader-md">📎 Paragraphs</SubHeading>
				<Paragraph className="text-paragraph-sm mb-6 text-gray-500">
					Use the <code>Paragraph</code> component for body text with consistent spacing and sizes.
				</Paragraph>

				<Paragraph className="text-paragraph-lg">Paragraph Large (text-paragraph-lg)</Paragraph>
				<Paragraph className="text-paragraph-md">Paragraph Medium (text-paragraph-md)</Paragraph>
				<Paragraph className="text-paragraph-sm">Paragraph Small (text-paragraph-sm)</Paragraph>
				<Paragraph className="text-paragraph-xs">Paragraph XS (text-paragraph-xs)</Paragraph>

				<code className="block mt-4 bg-gray-100 p-4 rounded text-sm">
					{`<Paragraph className="text-paragraph-md">Paragraph text</Paragraph>`}
				</code>
			</section>

			<section>
				<SubHeading className="text-subheader-md">🔖 Subheadings</SubHeading>
				<Paragraph className="text-paragraph-sm mb-6 text-gray-500">
					The <code>SubHeading</code> component works well for section titles or supporting headings.
				</Paragraph>

				<SubHeading className="text-subheader-lg">SubHeading Large (text-subheader-lg)</SubHeading>
				<SubHeading className="text-subheader-md">SubHeading Medium (text-subheader-md)</SubHeading>
				<SubHeading className="text-subheader-sm">SubHeading Small (text-subheader-sm)</SubHeading>

				<code className="block mt-4 bg-gray-100 p-4 rounded text-sm">
					{`<SubHeading className="text-subheader-sm">Sub title</SubHeading>`}
				</code>
			</section>
		</div>
	);
}

export default Typography;
