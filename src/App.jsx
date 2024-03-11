import "./App.css";

import Header from "./components/header/Header";

import Main from "./components/main/Main";

import Footer from "./components/footer/Footer";

export default function App(params) {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
