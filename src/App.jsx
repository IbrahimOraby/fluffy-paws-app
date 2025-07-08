import ButtonWithIcon from "./ui/Buttons/ButtonWithIcon";

export default function App() {
  return (
    <>
      <p style={{ fontWeight: 100 }}>Hello Pets</p>
      <h1 style={{ fontWeight: 900 }}>hello</h1>
      <div className="bg-primary-color">This uses --color-primary</div>
      <br></br>
      <div className="m-4">
        <ButtonWithIcon title="search for a pet"/>
      </div>
    </>
  );
}
