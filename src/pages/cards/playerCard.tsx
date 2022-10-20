import React from "react";
import { ICard } from "../../features/card/cardInterfaces";

export const Card: React.FC<{data: ICard, id: number}> = ({
    data,
    id
}) => {
    return (
        <li style={{listStyle: 'none', padding: '.5rem'}}>
            <span>
                Player {id + 1}: {
                    data === null
                    ? 'This player has no cards.'
                    : data.join(', ')
                }
            </span>
        </li>
    );
}