import React, { Component } from 'react'
import { SafeAreaView,View, StyleSheet, FlatList, Text, Button } from 'react-native'
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

class DeckListView extends Component {
  render () {
    const { ID, list } = this.props
    return (
      <View>
      <SafeAreaView style={styles.container}>
          <FlatList
            data= {ID}
            renderItem = {({ item }) => <IndividualDeckComponentMin id={item}  key ={item} />}

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
  const list = ID.map((deck) => {
    return [
      {
        id: deck,
        nrQ: state[deck].questions.length
      }
    ]
  })
  return{
    ID,
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
