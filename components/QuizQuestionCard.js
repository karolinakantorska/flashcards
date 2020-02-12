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
          (<View style={styles.card}>
          <Text>{Que.question}</Text>
          <TextButon  onPress={() => this.setState({question: false})}>
            Show Answer
          </TextButon>
          </View>)
        :
          (<View>
          <Text style={styles.card} >{Que.answer}</Text>
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
const styles = StyleSheet.create({
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
