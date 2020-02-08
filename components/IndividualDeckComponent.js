//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from "react-redux";
import IndividualDeckComponentMin from './IndividualDeckComponentMin'

function AddQuestionBtn () {
  const navigation = useNavigation();
  return (
    <Button
      title="Add Question"
      onPress={() => navigation.navigate('AddQuestion')}
      />
  )
}
function StartQuizBtn ({id}) {
  const navigation = useNavigation();
  return (
    <View>
      <Text>{id}</Text>
      <Button
        title="Quiz"
        onPress={() => navigation.navigate('Quiz', {id:id})}
        />
    </View>

  )
}

class IndividualDeckComponent extends Component {
  render () {
    const {id }= this.props
    return (
      <View>
        <IndividualDeckComponentMin id={id}/>
        <AddQuestionBtn />
        <StartQuizBtn id={id} />
      </View>
    )
  }
}
function mapStateToProps (state, { id }) {
    return {
    id
  }
}
export default connect(mapStateToProps)(IndividualDeckComponent)
