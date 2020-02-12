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
    const {id, cardsNr, list }= this.props
    console.log(list)
    console.log(id)
    console.log(cardsNr)
    if (cardsNr === 0){
    return (
      <View>
        <Text>Deck Title: { id }</Text>
        <Text>Number of Cards: { cardsNr }</Text>
        <Text>It's time to add some questions!</Text>
        <AddQuestionBtn id={id} />

      </View>
    )}
    else {
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

}
function mapStateToProps (state, { list }) {
    const id = list[0]
    const cardsNr = list[1]
    return {
    id,
    cardsNr,
    list
  }
}
export default connect(mapStateToProps)(IndividualDeckComponent)
