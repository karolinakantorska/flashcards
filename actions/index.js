export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_DECK = 'RECEIVE_DECK'

export function receiveDecks() {
  return {
    type: RECEIVE_DECKS,
    }
}
export function addDeck(id) {
  return {
    type: ADD_DECK,
    id
  }
}
//id it is a name of the Deck
export function addQuestion(id, answer, question) {
  return {
    type: ADD_QUESTION,
    id,
    answer,
    question
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
    // return _getDecks()
    // .then((decks) =>  {
      dispatch(receiveDecks())
    // })
  }
}
export function hadleSaveDeck (id) {
  return (dispatch) => {
    // return _saveDeckTitle({
    //   id
    // })
    // .then((id) => {
      dispatch(addDeck(id))
    // })
  }
}
export function hadleSaveQuestion (id, answer, question) {
  return (dispatch) => {
      dispatch(addQuestion(id, answer, question))
  }
}
export function handleGetDeck (id) {
  return (dispatch) => {
    // return _getDeck({
    //   id
    // })
    // .then(() => {
      dispatch (receiveDeck(id))
    // })
  }
}
