import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "./components/layout/Container";
import Navbar from "./components/header/Navbar";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
    </Container>
  );
}

export default App;
