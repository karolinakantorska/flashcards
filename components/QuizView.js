import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

import QuizQuestionCard from './QuizQuestionCard'
import { setLocalNotifications, clearLocalNotifications } from '../utils/helpers'

function BackToDeckBtn ({id}) {
  const navigation = useNavigation();
  return (
    <Button
      title='Back to Deck'
      onPress={() => {
        navigation.navigate('Deck', {id: id})}}>
    </Button>
  )
}

class QuizView extends Component {
  componentDidMount () {
    // clearLocalNotifications().then(setLocalNotifications())
  }

  state = {
    ansQ: 0,
    correct: 0
  }
  render () {
    const { id, questions, nrQuestions } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        { (this.state.ansQ === nrQuestions) ?
          (<View>
            <Text style={{fontSize: 20 }}>correct: {this.state.correct} / {nrQuestions}</Text>
              <Button
                title='Restart Quiz'
                onPress={() =>
                this.setState({ansQ: 0, correct: 0 })}/>
            <BackToDeckBtn id={id} />
          </View>
        )
        :
        (<View>
          <View>
            <Text>Quiz: {id}</Text>
            <Text> {this.state.ansQ} / {nrQuestions}</Text>
          </View>
          <View>
            <QuizQuestionCard  Que={questions[this.state.ansQ]}/>
            <Button
              title='correct'
              onPress={(state) => this.setState({ansQ: this.state.ansQ +1, correct: this.state.correct +1 })}/>
            <Button
              title='incorrect'
              onPress={(state) => this.setState({ansQ: this.state.ansQ +1})}/>
          </View>
        </View>)
        }
      </View>
    )
  }
}
function mapStateToProps(state, {id}) {
  const questions = state[id].questions
  const nrQuestions = state[id].questions.length
  return {
    id,
    questions,
    nrQuestions,
  }
}
export default connect(mapStateToProps)(QuizView)
