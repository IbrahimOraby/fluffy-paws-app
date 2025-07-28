import Heading from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph";
import SubHeading from "./SubHeadings/SubHeading";
const colorTokens = [
  { name: "Primary", var: "--color-primary-color" },
  { name: "Primary 100", var: "--color-primary-color-100" },
  { name: "Light", var: "--color-light-color" },
  { name: "Secondary", var: "--color-secondary-color" },
  { name: "Hover", var: "--color-hover-color" },
  { name: "Light Hover", var: "--color-light-hover-color" },
  { name: "Error", var: "--color-error-color" },
  { name: "Paragraph", var: "--color-paragraph-color" },
  { name: "Header", var: "--color-header-color" },
  { name: "White", var: "--color-white-color" },
  { name: "Black", var: "--color-black-color" },
];

function Typography() {
  return (
    <div className="p-12 space-y-20">
      <section>
        <Heading className="text-header-lg text-primary-color">
          Typography Components
        </Heading>
        <Paragraph className="text-paragraph-md text-gray-600">
          This guide demonstrates how to use the custom <code>Heading</code>,{" "}
          <code>SubHeading</code>, and <code>Paragraph</code> components with
          predefined Tailwind classes.
        </Paragraph>
      </section>

      <section>
        <SubHeading className="text-subheader-md">🧱 Headings</SubHeading>
        <Paragraph className="text-paragraph-sm mb-6 text-gray-500">
          Import and use the <code>Heading</code> component to render main
          titles.
        </Paragraph>

        <Heading className="text-header-lg">
          Heading Large (text-header-lg)
        </Heading>
        <Heading className="text-header-md">
          Heading Medium (text-header-md)
        </Heading>
        <Heading className="text-header-sm">
          Heading Small (text-header-sm)
        </Heading>

        <code className="block mt-4 bg-gray-100 p-4 rounded text-sm">
          {`<Heading className="text-header-lg">Heading Text</Heading>`}
        </code>
      </section>

      <section>
        <SubHeading className="text-subheader-md">📎 Paragraphs</SubHeading>
        <Paragraph className="text-paragraph-sm mb-6 text-gray-500">
          Use the <code>Paragraph</code> component for body text with consistent
          spacing and sizes.
        </Paragraph>

        <Paragraph className="text-paragraph-lg">
          Paragraph Large (text-paragraph-lg)
        </Paragraph>
        <Paragraph className="text-paragraph-md">
          Paragraph Medium (text-paragraph-md)
        </Paragraph>
        <Paragraph className="text-paragraph-sm">
          Paragraph Small (text-paragraph-sm)
        </Paragraph>
        <Paragraph className="text-paragraph-xs">
          Paragraph XS (text-paragraph-xs)
        </Paragraph>

        <code className="block mt-4 bg-gray-100 p-4 rounded text-sm">
          {`<Paragraph className="text-paragraph-md">Paragraph text</Paragraph>`}
        </code>
      </section>

      <section>
        <SubHeading className="text-subheader-md">🔖 Subheadings</SubHeading>
        <Paragraph className="text-paragraph-sm mb-6 text-gray-500">
          The <code>SubHeading</code> component works well for section titles or
          supporting headings.
        </Paragraph>

        <SubHeading className="text-subheader-lg">
          SubHeading Large (text-subheader-lg)
        </SubHeading>
        <SubHeading className="text-subheader-md">
          SubHeading Medium (text-subheader-md)
        </SubHeading>
        <SubHeading className="text-subheader-sm">
          SubHeading Small (text-subheader-sm)
        </SubHeading>

        <code className="block mt-4 bg-gray-100 p-4 rounded text-sm">
          {`<SubHeading className="text-subheader-sm">Sub title</SubHeading>`}
        </code>
      </section>
      <section className="my-16 px-4">
        <Heading className="text-header-lg text-primary-color">
          🎨 Colors
        </Heading>

        <p className="text-paragraph-color mb-8 text-base">
          This section displays the main colors used throughout the app along
          with their corresponding CSS variables. Use these tokens to ensure
          visual consistency across the UI.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {colorTokens.map((color) => (
            <div
              key={color.name}
              className="rounded-2xl shadow-sm border border-gray-200 overflow-hidden bg-white"
            >
              <div
                className="h-24 w-full"
                style={{ backgroundColor: `var(${color.var})` }}
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-header-color">
                  {color.name}
                </h3>
                <code className="text-sm text-paragraph-color block mt-1">
                  {color.var}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Typography;
