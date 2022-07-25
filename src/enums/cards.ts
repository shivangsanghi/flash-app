
import {difference, cloneDeep} from "lodash";

const MAX_PLAYERS = 17;
const getRandom = (arr: any, n: number) => {
	let result = new Array(n),
	len = arr.length,
	taken = new Array(len);
	if (n > len)
	throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
		let x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}

export enum CARD_TYPE{
	CLUBS= "clubs",
	DIAMONDS = "diamonds",
	HEARTS = "hearts",
	SPADES = "spades"
}

export enum NumberName {
	ace = "50",
	two = "2",
	three = "3",
	four = "4",
	five = "5",
	six = "6",
	seven = "7",
	eight = "8",
	nine = "9",
	ten = "10",
	jack = "11",
	queen = "12",
	king = "13"
}

export interface Card{
	image: string;
	value: {
		number: string;
		type: CARD_TYPE;
	},
	name: string;
}

export const Cards = (() => {
	const cards = []
	for (let element in NumberName) {
		for(let cardType in CARD_TYPE){
			cards.push({
				image: `/cards/${element}-of-${CARD_TYPE[cardType]}.png`,
				value: {
					number: +NumberName[element],
					type: cardType
				},
				name: `${NumberName[element]}-${CARD_TYPE[cardType]}`
			})
		}
	}
	return cards;
})()


export const getShulledCards = () => {
	let clonedCards = cloneDeep(Cards);
	const shuffledCards = [];
	for (let index = 0; index < MAX_PLAYERS; index++) {
		const randomCards = getRandom(clonedCards, 3);
		shuffledCards.push(randomCards);
		clonedCards = difference(clonedCards, randomCards)
	}
	return shuffledCards;
}

export const isTrial = () => {

}

export const isPure = () => {

}

export const isSequence = () => {

}

export const isColor = () => {

}

export const isPair = () => {

}

export const isBigger = () => {

}

export const getWinner = () => {

}

