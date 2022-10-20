export type ICard = string[] | null;

export interface ICardDTO {
    status: number;
    message?: string;
    cards?: ICard[];
}