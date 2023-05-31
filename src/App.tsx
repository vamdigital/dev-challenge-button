import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <h1>Hello Vite</h1>
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
    </>
  );
}

export default App;
