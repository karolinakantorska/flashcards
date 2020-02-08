// import React from 'react'
import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import IndividualDeckComponentMin from './IndividualDeckComponentMin'
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native'

class DeckListView extends Component {

  render () {
    const navigation = useNavigation();
    const { ID } = this.props
    return (
      <View style={styles.container}>

          <FlatList
            data={ID}
            renderItem={({ item }) => <IndividualDeckComponentMin id={item} />}
          />

      </View>
    )
  }
}


function mapStateToProps (state) {
  const ID = Object.keys(state)
  return{
    ID
  }
}
export default connect(mapStateToProps)(DeckListView)

// styling
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
