import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from "react-redux";

class DeckListView extends Component {
  render () {
    const { state, list } = this.props
    const { navigation } =this.props
    const id = list[0]
    const cardsNr = list[1]
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
          <FlatList
            data= {list}
            renderItem = {({ item }) =>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Deck', { list: [id, cardsNr] })} >
                  <Text>Deck Title: { id }</Text>
                  <Text>Number of Cards: {cardsNr}</Text>
                </TouchableOpacity>
              </View>
          }
            keyExtractor={item => item[0]}
            />
            <Button
              title="Add Deck"
              onPress={() => navigation.navigate('AddDeck')}
            />
            <Button
              title="Delete Deck"
              disabled
            />
        </SafeAreaView>
      </View>
    )
  }
}
function mapStateToProps (state) {
  const ID = Object.keys(state)
  const list = ID.map((id) => {
    const cardsNr = state[id].questions.length
    return [
      id,
      cardsNr,
    ]
  })
  return{
    state,
    list
  }
}
export default connect(mapStateToProps)(DeckListView)

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
