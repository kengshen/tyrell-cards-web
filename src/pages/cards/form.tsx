import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { ICardDTO } from "../../features/card/cardInterfaces";
import { setCards } from "../../features/card/cardSlice";

export const CardForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const playersInput = React.useRef<HTMLInputElement>(null);

    /**
     * Can be moved to AsyncThunk or use React Query to handle APIs call
     */
    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const noOfPlayer = playersInput.current?.value;
        if (!noOfPlayer) {
            alert('Please enter the amount of players to distribute card!');
            return;
        }
        const intNoOfPlayer = parseInt(noOfPlayer);
        if (isNaN(intNoOfPlayer)) {
            alert('Please enter a valid number!');
            return;
        }
        if (intNoOfPlayer <= 0 || intNoOfPlayer >= 100) {
            alert('Amount entered is out of range!');
            return;
        }
        fetch(`http://localhost:8765/api/cards/${noOfPlayer}.json`).then((res) => {
            if (res.status !== 200) {
                alert('Something went wrong! Try again.');
                window.location.reload();
                return;
            }
            
            return res.json();

        }).then((data: ICardDTO) => {
            console.log(data);
            if (data.status !== 200) {
                alert(data.message);
                return;
            }
            dispatch(setCards(data.cards || []));
        })
    }

    return (
        <div style={{ marginBottom: '2rem' }}>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="players">No. of Players</label>
                    <input id="players" ref={playersInput} type="number" style={{width: '200px', padding: '0.5rem', marginLeft: '0.5rem'}} />
                </div>
                <div>
                    <button type="submit" style={{padding: '.5rem 1rem'}}>Submit</button>
                </div>
            </form>
        </div>
    );
};