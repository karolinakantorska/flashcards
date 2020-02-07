//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'

function SubmittBtn () {
  return (
    <Button
      title="Submitt"

      />
  )
}

class NewQuestionView extends Component {
  render () {
    return (
      <View>
        <Text>Add Question</Text>
        <Text>Add Answer</Text>
        <SubmittBtn />
      </View>
    )
  }
}
export default NewQuestionView
