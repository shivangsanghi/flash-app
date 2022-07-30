
import { difference, cloneDeep, sortBy, chain, reduce } from "lodash";

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

export enum CARD_TYPE {
	CLUBS = "clubs",
	DIAMONDS = "diamonds",
	HEARTS = "hearts",
	SPADES = "spades"
}

export const NumberName = {
	ace: 14,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	jack: 11,
	queen: 12,
	king: 13
}

export interface Card {
	image?: string;
	value: {
		number: number;
		type: CARD_TYPE;
	},
	name?: string;
}

let winningCardsList = [];
export const Cards = (() => {
	const cards: Card[] = []
	for (let element in NumberName) {
		for (let cardType in CARD_TYPE) {
			cards.push({
				image: `/cards/${element}-of-${CARD_TYPE[cardType]}.png`,
				value: {
					number: NumberName[element],
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
		const sortedRandomCards = chain(randomCards).sortBy(["value.number"]).reverse().value()
		shuffledCards.push(sortedRandomCards);
		clonedCards = difference(clonedCards, randomCards)
	}
	winningCardsList = sortCardsByWeight(shuffledCards)
	console.log(winningCardsList)
	return shuffledCards;
}

export const isTrial = (cards: Card[]) => {
	return cards[0].value.number == cards[1].value.number && cards[0].value.number == cards[2].value.number
}

export const isPure = (cards: Card[]) => {
	return isSequence(cards) && isColor(cards)
}

export const isSequence = (cards: Card[]) => {
	return cards[0].value.number == cards[1].value.number + 1
		&&
		cards[1].value.number == cards[2].value.number + 1
}

export const isColor = (cards: Card[]) => {
	return cards[0].value.type == cards[1].value.type
	&&
	cards[1].value.type == cards[2].value.type
}

export const isPair = (cards: Card[]) => {
	return cards[0].value.number == cards[1].value.number
	||
	cards[1].value.number == cards[2].value.number
}

export const sortCardsByWeight = (cardsArr: Array<Card[]>) => {
	const trailArray = [];
	const pureArray = [];
	const sequenceArray = [];
	const colorArray = [];
	const pairArray = [];

	for (const cards of cardsArr) {
		if(isTrial(cards)) trailArray.push(cards)
		if(isPure(cards)) pureArray.push(cards)
		if(isSequence(cards)) sequenceArray.push(cards)
		if(isColor(cards)) colorArray.push(cards)
		if(isPair(cards)) pairArray.push(cards)
	}

	console.log('sort pair')
	console.log(chain(pairArray).sortBy((cards: Card[]) => {
		return reduce(cards, function(total, card) {
			return total + card.value.number;
		}, 0)}).reverse().value());
	

console.log("Trail Array",trailArray)
console.log("Pure Array",pureArray)
console.log("Sequence Array",sequenceArray)
console.log("Color Array",colorArray)
console.log("Pair Array",pairArray)
	return [...trailArray, ...pureArray, ...sequenceArray, ...colorArray, ...pairArray];
}

export const isBigger = (cards1: Card[], cards2: Card[]) => {
	// if(isTrial(cards1) && )
}

export const getWinner = (cards: Card[]) => {

}

let cards1: Card[] = [{
	value: {
		number: 14,
		type: CARD_TYPE.CLUBS
	}
},
{
	value: {
		number: 13,
		type: CARD_TYPE.CLUBS
	}
},
{
	value: {
		number: 13,
		type: CARD_TYPE.CLUBS
	}
}]

let cards2: Card[] = [{
	value: {
		number: 14,
		type: CARD_TYPE.CLUBS
	}
},
{
	value: {
		number: 13,
		type: CARD_TYPE.CLUBS
	}
},
{
	value: {
		number: 13,
		type: CARD_TYPE.CLUBS
	}
}]

// console.log("Is Trail",isTrial(cards1))
// console.log("Is Pure",isPure(cards1))
// console.log("Is Sequence",isSequence(cards1))
// console.log("Is Color",isColor(cards1))
// console.log("Is Pair",isPair(cards1))
