import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import MyLinks from './components/MyLinks';
import AddFav from './components/AddFav';

function App() {
  const [cardData, setCardData] = useState([
    { linkName: 'my Link', linkHref: 'https://www.github.com' },
  ]);

  const [newCard, setNewCard] = useState({ linkName: '', linkHref: '' });

  const dispatchCardSet = (payload) => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({ linkHref: '', linkName: '' });
  };
  return (
    <div>
      <Nav />
      <main>
        <AddFav
          newCard={newCard}
          setNewCard={setNewCard}
          cardData={cardData}
          setCardData={setCardData}
          dispatchCardSet={dispatchCardSet}
        />
        <MyLinks cards={cardData} />
      </main>
    </div>
  );
}

export default App;
