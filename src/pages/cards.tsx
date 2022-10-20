import React from "react";
import { CardForm } from "./cards/form";
import { CardList } from "./cards/list";

export const CardPage: React.FC = () => {
    return (
        <div>
            <h2>Card Page</h2>
            <CardForm />

            <h3>List</h3>
            <CardList />
        </div>
    );
}