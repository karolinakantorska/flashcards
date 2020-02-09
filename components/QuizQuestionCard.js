import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import TextButon from './TextButon'
import { connect } from "react-redux";

class QuizQuestionCard extends Component {
  state = {
    question: true
  }
render () {
  const { toggleQuestionCard, Que } = this.props
  return (
    <View>
      {(this.state.question===true) ?
          (<View>
          <Text>{Que.question}</Text>
          <TextButon  onPress={() => this.setState({question: false})}>
            Answer
          </TextButon>
          </View>)
        :
          (<View>
          <Text>{Que.answer}</Text>
          <TextButon onPress={() => this.setState({question: true})}>
            Question
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
