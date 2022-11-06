import Card from "./components/Card"
import './App.css';

const card1 = {
  image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  alt: "картинка 200",
  title: "Card title",
  text: "Some quick example text to build on the card title and make up the bulk of the card's content"
}

const card2 = {
  image: "",
  alt: "",
  title: "Special title treatment",
  text: "With supporting text below as a natural lead-in to additional content"
}

function App() {
  return (
    <main className="App">
    <Card props={card1}/>
    <Card props={card2}/>
    </main>
  );
}

export default App;
