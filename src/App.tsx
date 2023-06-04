import "./App.css";
import { Button } from "./components/Button";
import { TextAccordion } from "./components/TextAccordion";

function App() {
  const d = new Date();
  const fullYear = d.getFullYear();
  return (
    <>
      <h1>Text Accordion </h1>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          background: "#F4F4F4",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridGap: "12px",
        }}
      >
        <input type="checkbox" />
        <TextAccordion />
      </div>
      <h1>Dev Challenge io - Button </h1>
      <p>
        Prefer Storybook - visit -{" "}
        <a href="https://dc-vam-button-sb.vercel.app/" target="_blank">
          StoryBook
        </a>
      </p>
      <div className="container">
        <Button> Default </Button>
      </div>
      <div className="container">
        <Button variant="outline">Outline</Button>
      </div>
      <div className="container">
        <Button variant="text">Text</Button>
      </div>
      <div className="container">
        <Button variant="text" disabled>
          Text-Disabled
        </Button>
      </div>
      <div className="container">
        <Button disabled>Text-Disabled</Button>
      </div>
      <div className="container">
        <Button disableShadow>Disabled Shadow</Button>
      </div>
      <div className="container">
        <Button color="primary" startIcon="local_grocery_store">
          Icon
        </Button>
      </div>
      <div className="container">
        <Button color="primary" endIcon="local_grocery_store">
          Icon
        </Button>
      </div>
      <div className="container">
        <Button sizes="sm">small</Button>
      </div>
      <div className="container">
        <Button sizes="md">med</Button>
      </div>
      <div className="container">
        <Button sizes="lg">Large</Button>
      </div>
      <div className="container">
        <Button color="primary">Primary</Button>
      </div>
      <div className="container">
        <Button color="secondary">Secondary</Button>
      </div>
      <div className="container">
        <Button color="danger">Danger</Button>
      </div>
      <span>
        &copy; {fullYear} -
        <a href="https://www.vamdigital.com/comingsoon" target="_blank">
          {" "}
          VAM Digital Limited
        </a>
      </span>
    </>
  );
}

export default App;
