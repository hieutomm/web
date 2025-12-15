import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./presentation/components/Header/Header";
import Main from "./presentation/components/Main/Main";
// import Detail from "./presentation/components/Main/Detail";
import Footer from "./presentation/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
