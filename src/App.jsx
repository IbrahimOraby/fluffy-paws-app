import ActionLink from "./ui/Links/ActionLink";
import FooterLink from "./ui/Links/FooterLink";

export default function App() {
  return (
    <>
      <p className="text-whiteColor">Hello Pets</p>
      <h1 style={{ fontWeight: 900 }}>hello</h1>
      <div style={{ color: "var(--primary-color)",fontWeight:500 }}>
        This uses --color-primary
      </div>
      <ActionLink text="Click me"/>

      <br/>
      <FooterLink/>
    </>
  );
}
