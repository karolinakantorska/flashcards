import React, { Component } from 'react'
import { SafeAreaView,View, StyleSheet, FlatList, Text, Button,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from "react-redux";

import IndividualDeckComponentMin from './IndividualDeckComponentMin'

function AddDeckBtn () {
  const navigation = useNavigation();
  return (
    <Button
      title="Add Deck"
      onPress={() => navigation.navigate('AddDeck')}
    />
  )
}
function DeleteDeckBtn () {
  const navigation = useNavigation();
  return (
    <Button
      title="Delete Deck"
    />
  )
}
function navigating (id) {
  const navigation = useNavigation();
  return (
    navigation.navigate('Deck', {id:id})
  )
}
class DeckListView extends Component {
  // componentDidMount() {
  //   // this.props.dispatch(handleInitialData())
  // }
  render () {
    const { ID, state, list } = this.props
    return (
      <View>
      <SafeAreaView style={styles.container}>
          <FlatList
            data= {list}
            renderItem = {({ item }) =><IndividualDeckComponentMin list={item} key ={item.id} />}
            />
          <AddDeckBtn />
          <DeleteDeckBtn />
        </SafeAreaView>
      </View>
    )
  }
}
function mapStateToProps (state) {
  const ID = Object.keys(state)
  const list = ID.map((id) => {
    const cardsNr = state[id].questions.length
    return {
      id,
      cardsNr,
    }
  })
  return{
    ID,
    state,
    list
  }
}
export default connect(mapStateToProps)(DeckListView)

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
