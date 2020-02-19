import {
  _saveInitialDeck,
  _saveDeck,
  _getDecks,
  _saveQuestion
} from "../utils/Api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_DECK = "RECEIVE_DECK";

export function handleInitialData() {
  return dispatch => {
    // return "AAA";
    return _getDecks().then(decks => {
      console.log("Retrieving decks from Async: ", decks);
      dispatch(receiveDeck(decks));
    });
  };
  // return {
  //   type: "AAAA"
  // };
}

export function receiveDecks() {
  return {
    type: RECEIVE_DECKS
  };
}
export function addDeck(id) {
  return {
    type: ADD_DECK,
    id
  };
}

export function addQuestion(id, answer, question) {
  return {
    type: ADD_QUESTION,
    id,
    answer,
    question
  };
}
export function receiveDeck(id) {
  return {
    type: RECEIVE_DECK,
    id
  };
}

export function hadleSaveInitialDeck(id) {
  return dispatch => {
    return _saveInitialDeck("decks", id).then(() => {
      dispatch(addDeck(id));
    });
  };
}
export function hadleSaveDeck(id) {
  return dispatch => {
    return _saveDeck(id).then(() => {
      dispatch(addDeck(id));
    });
  };
}

export function hadleSaveQuestion(id, answer, question) {
  return dispatch => {
    dispatch(addQuestion(id, answer, question));
    return _saveQuestion({ id, answer, question }).then(() => {
      dispatch(addQuestion(id, answer, question));
    });
  };
}

export function handleGetDeck(id) {
  return dispatch => {
    // return _getDeck({
    //   id
    // })
    // .then(() => {
    dispatch(receiveDeck(id));
    // })
  };
}
// export function hadleSaveDeck (id) {
//   return (dispatch) => {
//     return _saveInitialDeck('decks', id)
//       .then((id) => { dispatch(addDeck(id))
//       })
//   }
// }
