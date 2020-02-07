//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import TextButon from './TextButon'

class QuizView extends Component {
  render () {
    return (
      <View>
        <Text>Does ... ?</Text>
        <TextButon>
          Answer
        </TextButon>
        <Button title='correct' />
        <Button title='incorrect' />
      </View>
    )
  }
}
export default QuizView
