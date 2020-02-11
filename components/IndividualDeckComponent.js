import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from "react-redux";

function AddQuestionBtn ({id}) {
  const navigation = useNavigation();
  return (
    <Button
      title="Add Card"
      onPress={() => navigation.navigate('AddQuestion', {id:id})}
      />
  )
}

function StartQuizBtn ({id}) {
  const navigation = useNavigation();
  return (
    <View>
      <Text>{id}</Text>
      <Button
        title="Start a Quiz"
        onPress={() => navigation.navigate('Quiz', {id:id})}
        />
    </View>
  )
}

class IndividualDeckComponent extends Component {
  render () {
    const {id, cardsNr }= this.props
    return (
      <View>
        <Text>Deck Title: { id }</Text>
        <Text>Number of Cards: { cardsNr }</Text>
        <AddQuestionBtn id={id} />
        <StartQuizBtn id={id} />
      </View>
    )
  }
}
function mapStateToProps (state, { list }) {
    const id = list.id
    const cardsNr = list.cardsNr
    return {
    id,
    cardsNr,
  }
}
export default connect(mapStateToProps)(IndividualDeckComponent)
