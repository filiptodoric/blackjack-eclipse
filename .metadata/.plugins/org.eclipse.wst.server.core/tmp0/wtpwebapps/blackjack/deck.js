/**
 * The logic behind anything to do with creating the deck 
 */
function createDeck() {
	var newDeck = [];
	var usedCards = [];
	var deckIndex = 0;
	for (var x = 0; x <= 3; x++) {
		for (var i = 1; i < 14; i++) {
			newDeck[deckIndex] = i;
			deckIndex++
		}
	}
	return newDeck;
}

function shuffle(array) {
	for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
}

function getDeck()	{
	return shuffle(createDeck());
}
