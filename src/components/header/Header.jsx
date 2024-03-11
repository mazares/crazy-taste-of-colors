import "./Header.css";

import Nav from "../nav/Nav";

export default function Header(params) {
  return (
    <header className="header">
      <h1>Header</h1>
      <Nav />
    </header>
  );
}
