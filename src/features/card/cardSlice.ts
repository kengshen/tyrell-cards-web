import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "./cardInterfaces";

interface ICardState {
    cards: ICard[];
}

const initialState: ICardState = {
    cards: []
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<ICard[]>) => {
            state.cards = action.payload;
        }
    },
});

export const {
    setCards
} = cardSlice.actions;

export default cardSlice.reducer;