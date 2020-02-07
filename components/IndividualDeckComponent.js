//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function AddQuestionBtn () {
  const navigation = useNavigation();
  return (
    <Button
      title="Add Question"
      onPress={() => navigation.navigate('AddQuestion')}
      />
  )
}
function StartQuizBtn () {
  const navigation = useNavigation();
  return (
    <Button
      title="Quiz"
      onPress={() => navigation.navigate('Quiz')}
      />
  )
}

class IndividualDeckComponent extends Component {
  render () {
    return (
      <View>
        <Text>Deck Title</Text>
        <Text>3 questions</Text>
        <AddQuestionBtn />
        <StartQuizBtn />
      </View>
    )
  }
}
export default IndividualDeckComponent
