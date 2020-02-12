import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { Notifications} from 'expo'

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
    clearLocalNotifications().then(setLocalNotifications())
  }

  state = {
    ansQ: 0,
    correct: 0
  }
  render () {
    const { id, questions, nrQuestions } = this.props
    return (
      <SafeAreaView style={styles.container} >
        { (this.state.ansQ === nrQuestions) ?
          (<View >
            <View style={styles.card}>
              <Text>correct: {this.state.correct} / {nrQuestions}</Text>
            </View>
              <Button
                title='Restart Quiz'
                onPress={() =>
                this.setState({ansQ: 0, correct: 0 })}/>
            <BackToDeckBtn id={id} />
          </View>
        )
        :
        (<View >
            <Text>Quiz: {id}</Text>
            <Text> {this.state.ansQ} / {nrQuestions}</Text>

            <QuizQuestionCard style={styles.card}  Que={questions[this.state.ansQ]}/>

            <Button
              title='correct'
              onPress={(state) => this.setState({ansQ: this.state.ansQ +1, correct: this.state.correct +1 })}/>
            <Button
              title='incorrect'
              onPress={(state) => this.setState({ansQ: this.state.ansQ +1})}/>

        </View>)
        }
      </SafeAreaView>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginBottom: 200,
    alignItems: 'center',
  },
  card: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
    backgroundColor: '#f0f5f5',
    borderRadius: 5,
    borderColor: '#394d00',
    borderWidth: 1,

  },
})
