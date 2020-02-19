import React from 'react';
import { AsyncStorage } from 'react-native';

const DECKS_KEY = 'flashcards:decks'

// getDecks: return all of the decks along with their titles, questions, and answers.
export const _getDecks = async DECKS_KEY => {
  try {
    return await AsyncStorage.getItem(DECKS_KEY)
  } catch (error) {
    console.log("Error retrieving data:", error)
  }
}


export const _saveInitialDeck = async (DECKS_KEY, deck) => {
  const decksToStore = {
    [deck]: {
      questions: []
    }
  }
  try {
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decksToStore))
  } catch (error) {
    console.log('Error saving  initial deck', error)
  }
}
// saveDeckTitle: take in a single title argument and add it to the decks.
export const _saveDeck = async (DECKS_KEY, deck) => {
  const decksToStore = {
    [deck]: {
      questions: []
    }
  }
  try {
    await AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decksToStore))
  } catch (error) {
    console.log('Error saving deck', error)
  }
}

export const _saveQuestion = async (DECKS_KEY, deckQuestion) => {
  const {id, answer, question} = deckQuestion
  const deck = id
  try {
    const existing = await _getDeck(id)
    console.log('existing: ', existing)
    await AsyncStorage.mergeItem(
      DECKS_KEY,
      JSON.stringify({
         [deck]: {
           questions: [].concat({question, answer})
         }
       })
     ).then(console.log('existing: ' + existing))
  } catch (error) {
    console.log('Error saving deck', error)
  }
}

// export const _getDeck = async (DECKS_KEY, id) => {
//   try {
//     const storeResults = await AsyncStorage.getItem(DECKS_KEY);
//     return JSON.parse(storeResults)[id];
//   } catch (err) {
//     console.log(err);
//   }
// }


export const _clearData = () => AsyncStorage.clear();
