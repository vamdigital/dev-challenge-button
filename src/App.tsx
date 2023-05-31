import "./App.css";
import { Button } from "./components/Button";

function App() {
  const d = new Date();
  const fullYear = d.getFullYear();
  return (
    <>
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
