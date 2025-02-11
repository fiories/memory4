import { useState } from "react";
import Card from "./Card";
import styles from "../styles/Home.module.css";


let deck = [
  { id: 1, name: "billiard ball", image: "/billiardball.svg" },
  { id: 2, name: "billiard ball", image: "/billiardball.svg" },
  { id: 3, name: "bubble tea", image: "/bubbletea.svg" },
  { id: 4, name: "bubble tea", image: "/bubbletea.svg" },
  { id: 5, name: "cactus", image: "/cactus.svg" },
  { id: 6, name: "cactus", image: "/cactus.svg" },
  { id: 7, name: "dog", image: "/dog.svg" },
  { id: 8, name: "dog", image: "/dog.svg" },
  { id: 9, name: "laptop", image: "/laptop.svg" },
  { id: 10, name: "laptop", image: "/laptop.svg" },
  { id: 11, name: "octopus", image: "/octopus.svg" },
  { id: 12, name: "octopus", image: "/octopus.svg" },
  { id: 13, name: "strawberry", image: "/strawberry.svg" },
  { id: 14, name: "strawberry", image: "/strawberry.svg" },
  { id: 15, name: "sunglasses", image: "/sunglasses.svg" },
  { id: 16, name: "sunglasses", image: "/sunglasses.svg" },
];
let deck2 = [];
let rand = 0;
for (let i = 16; i > 0; i--) {
  rand = parseInt(Math.random() * deck.length);
  deck2.push(deck[rand]);
  deck.splice(rand, 1);
}
//console.log(deck2);
for (let i = 0; i < 16; i++) {
  deck2[i].id = i + 1;
}
deck = deck2;
let score=0;
let scoreafficher=0;
let carteTrouver = 0;
//************************************************************************************ */
function Home() {
  const [selected, setSelected] = useState([]);

  const selectCard = (id) => {score-=0.34;if (score>0)scoreafficher=parseInt(score);else scoreafficher=0;
    setSelected([...selected, id]);
  };
  function restart() {
    console.log("restart2");
    score=0;
    scoreafficher=0;
    setSelected(selected.filter((e, i) => i === -1));
    deck =[];
    deck = [
      { id: 1, name: "billiard ball", image: "/billiardball.svg" },
      { id: 2, name: "billiard ball", image: "/billiardball.svg" },
      { id: 3, name: "bubble tea", image: "/bubbletea.svg" },
      { id: 4, name: "bubble tea", image: "/bubbletea.svg" },
      { id: 5, name: "cactus", image: "/cactus.svg" },
      { id: 6, name: "cactus", image: "/cactus.svg" },
      { id: 7, name: "dog", image: "/dog.svg" },
      { id: 8, name: "dog", image: "/dog.svg" },
      { id: 9, name: "laptop", image: "/laptop.svg" },
      { id: 10, name: "laptop", image: "/laptop.svg" },
      { id: 11, name: "octopus", image: "/octopus.svg" },
      { id: 12, name: "octopus", image: "/octopus.svg" },
      { id: 13, name: "strawberry", image: "/strawberry.svg" },
      { id: 14, name: "strawberry", image: "/strawberry.svg" },
      { id: 15, name: "sunglasses", image: "/sunglasses.svg" },
      { id: 16, name: "sunglasses", image: "/sunglasses.svg" },
    ];
    deck2 = [];
    rand = 0;
    for (let i = 16; i > 0; i--) {
      rand = parseInt(Math.random() * deck.length);
      deck2.push(deck[rand]);
      deck.splice(rand, 1);
    }
    //console.log(deck2);
    for (let i = 0; i < 16; i++) {
      deck2[i].id = i + 1;
    }
    deck = deck2;

    carteTrouver = 0;
  }

  if (selected.length > carteTrouver + 2) {
    setSelected(selected.filter((e, i) => i < selected.length - 3));
  }

  if (selected.length === 2 + carteTrouver) {
    if (
      deck[selected[selected.length - 1] - 1].name ===
      deck[selected[selected.length - 2] - 1].name
    ) {
      carteTrouver += 2;
      score+=14;if (score>0)scoreafficher=parseInt(score);else scoreafficher=0;
    }
  }
  const cardsToDisplay = deck.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        image={card.image}
        selectCard={selectCard} //fonction inverse data flow  // selectionne la carte by id
        selected={selected.includes(card.id)}
      />
    );
  });

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.lo}>
          <h1 className={styles.headerTitle}>Memory Game 🧠</h1>
          <button className={styles.restartButton} onClick={restart}>
            new games
          </button> 
          <h2 className={styles.styleScore}>score : {scoreafficher}</h2>
        </div>
        <div className={styles.headerDivider} />
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>{cardsToDisplay}</div>
      </div>
    </div>
  );
}

export default Home;
