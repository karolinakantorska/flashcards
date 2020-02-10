import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { decks } from '../reducers/index'

import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { white, pink, red, orange, blue, lightPurp } from "./colors";

const DECK = 'deck'

// getDecks: return all of the decks along with their titles, questions, and answers.
export const _getDecks = () => {
  return decks
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export const _saveDeckTitle = async id => {
  try {
    await AsyncStorage.setItem('deck', id)
  } catch (error) {
    console.log(error.message)
  }
}

// getDeck: take in a single id argument and return the deck associated with that id.
export const _getDeck = async () => {
  let deck = ''
  try {
    deck = await AsyncStorage.getItem('deck')
  } catch (error) {
    console.log(error.message)
  }
  return deck
}
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck (title, card) {

}
