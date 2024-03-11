import "./Main.css";
import Card from "../card/Card";

export default function Main(params) {
  const cards = [];

  for (let i = 0; i < 1000; i++) {
    cards.push({ id: i, title: `Card ${i}` });
  }

  return (
    <main className="main">
      <div className="cards-container">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
    </main>
  );
}
