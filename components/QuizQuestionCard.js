import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import TextButon from './TextButon'
import { connect } from 'react-redux';

class QuizQuestionCard extends Component {
  state = {
    question: true
  }
render () {
  const { toggleQuestionCard, Que } = this.props
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {(this.state.question===true) ?
          (<View>
          <Text>{Que.question}</Text>
          <TextButon  onPress={() => this.setState({question: false})}>
            Show Answer
          </TextButon>
          </View>)
        :
          (<View>
          <Text>{Que.answer}</Text>
          <TextButon onPress={() => this.setState({question: true})}>
            Show Question
          </TextButon>
          </View>)
        }
    </View>
  )
}
}
function mapStateToProps(state, {Que}) {
  return {
    Que
  }
}
export default QuizQuestionCard
