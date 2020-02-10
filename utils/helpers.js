import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";

import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { white, pink, red, orange, blue, lightPurp } from "./colors";

const DECK = 'deck'

function generateQuestionID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks () {

}

// saveDeckTitle: take in a single title argument and add it to the decks.
export const saveDeckTitle = async title => {
  try {
    await AsyncStorage.setItem('deck', title)
  } catch (error) {
    console.log(error.message)
  }
}

// getDeck: take in a single id argument and return the deck associated with that id.

export const getDeck = async () => {
  let deck = ''
  try {
    deck = await AsyncStorage.getItem('deck') || 'none'
  } catch (error) {
    console.log(error.message)
  }
  return deck
}
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck (title, card) {

}
