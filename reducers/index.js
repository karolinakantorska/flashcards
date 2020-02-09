import { RECEIVE_DECKS, ADD_DECK } from '../actions'
const initialState ={
  math: {
    title:  'Math',
    questions: [
      {
        question: 'How much is: 8 * 7 = ... ?',
        answer: ' 56 '
      },
      {
        question: 'How much is: 9 * 8 = ... ?',
        answer: ' 72 '
      },
      {
        question: 'How much is: 6 * 8 = ... ?',
        answer: ' 48 '
      },
    ]
  },
  colors: {
    title: 'Colors',
    questions: [
      {
        question: 'What color is: #000000 ?',
        answer: 'black'
      },
      {
        question: 'What color is: rgb(0, 0, 0) ?',
        answer: 'black'
      },
      {
        question: 'What color is: #ffffff ?' ,
        answer: 'white'
      },
    ]
  }
}
// function decks(state= initialState, action) {
function decks (state= initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: 'new deck'
      }
    default:
      return state;
  }
}

export default decks
