import React from "react";
import Card from './Card'

const CardList = ({ robots }) => {

    const cards = robots.map(robot => 
    <Card 
    key ={robot.id} 
    id={robot.id} 
    name={robot.name} 
    email={robot.email} />);

    return (cards);
}

export default CardList