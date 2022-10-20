import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCards } from "../../features/card/cardSelectors";
import { Card } from "./playerCard";

export const CardList: React.FC = () => {
    const cards = useAppSelector(selectCards);

    return (
        <ul>
            {
                cards.length > 0
                ? cards.map((card, id) => <Card key={`card_${id}`} data={card} id={id} />) : (
                    <li><i>Set the no. of players and distribute them!</i> </li>
                )
            }
        </ul>
    );
}