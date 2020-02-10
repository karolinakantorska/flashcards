import {_getDecks, _saveDeckTitle } from '../utils/helpers'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

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

// export function receiveQuestions (questions) {
//   return {
//     type: RECEIVE_QUESTIONS,
//     questions
//   }
// }
// export function handleInitialDataQuestions () {
//   return (dispatch) => {
//     return _getQuestions()
//       .then((questions) => {
//         dispatch(receiveQuestions(questions))
//       })
//   }
// }
