import React from "react";
import CardPage from "./CardPage";
import Header from "./Header";
import Body from "./Body";
import CreateChallangeForm from "./CreateChallangeForm";
import CardItems from "./CardItems";
import { useState } from "react";

const Home = () => {
  const[cardElements,setCardElements] = useState(CardItems)

  function handleCardItems(object){
    console.log(object)
    setCardElements(prevItems =>{
      return[...prevItems,object]
    })
    console.log(cardElements)
  }
  return (
    <>
      <Header
        cardItems={cardElements}
      />

      <Body />
      <CardPage cardItems={cardElements} />
      <CreateChallangeForm cardItems={cardElements} setData={handleCardItems} />
    </>
  );
};


export default Home;