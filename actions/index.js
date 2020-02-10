import {_getDecks, _saveDeckTitle, _getDeck } from '../utils/helpers'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECK = 'RECEIVE_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
    }
}
export function addDeck(id) {
  return {
    type: ADD_DECK,
    id
  }
}
export function receiveDeck (id) {
  return {
    type: RECEIVE_DECK,
    id
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return _getDecks()
    .then((decks) =>  {
      dispatch(receiveDecks(decks))
    })
  }
}
export function hadleSaveDeck (id) {
  return (dispatch) => {
    return _saveDeckTitle({
      id
    })
    .then((id) => {
      dispatch(addDeck(id))
    })
  }
}
export function handleGetDeck (id) {
  return (dispatch) => {
    return _getDeck({
      id
    })
    .then(() => {
      dispatch ()
    })
  }
}
