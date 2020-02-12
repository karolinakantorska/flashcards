import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION, RECEIVE_DECK } from '../actions'

const initialState ={
  math: {
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
// addQuestion(id, answer, question)
function decks (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        state
      }
    case ADD_DECK:
      return {
        ...state,
        [action.id]: { questions: [] }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: state[action.id].questions.concat(
            {
              answer: action.answer,
              question: action.question
            }
          )
        }
      }
    case RECEIVE_DECK:
      return {
        ...state,
        ...action.id
      }

    default:
      return state
  }
}

export default decks
