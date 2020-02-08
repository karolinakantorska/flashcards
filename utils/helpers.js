import React from "react";
import { View, Text, StyleSheet } from "react-native";


import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { white, pink, red, orange, blue, lightPurp } from "./colors";

function generateQuestionID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks () {

}

// getDeck: take in a single id argument and return the deck associated with that id.

export function getDeck (id) {
  return id
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle (title) {

}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck (title, card) {

}
