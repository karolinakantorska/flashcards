// import React from 'react'
import React, { Component } from 'react'
import { SafeAreaView,View, StyleSheet, FlatList, Text } from 'react-native'
import IndividualDeckComponentMin from './IndividualDeckComponentMin'
import { connect } from "react-redux";
// import { useNavigation } from '@react-navigation/native'

class DeckListView extends Component {
  render () {
    // const navigation = useNavigation();
    const { ID, list } = this.props
    return (
      <View>
      <SafeAreaView style={styles.container}>
          <FlatList
            data= {ID}
            renderItem = {({ item }) => <IndividualDeckComponentMin id={item}/>}
            keyExtractor={item => item.id}
            />
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
    marginTop: 100
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// <SafeAreaView style={styles.container}>
//     <FlatList
//       data= {ID}
//       renderItem = {({ item }) => <IndividualDeckComponentMin id={item}/>}
//       />
// </SafeAreaView>
