//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function SubmittBtn () {
  const navigation = useNavigation();
  return (
    <Button
      title="Submitt"
      onPress={() => navigation.navigate('AddQuestion')}
      />
  )
}

class NewDeckView extends Component {

  render () {
    return (
      <View>
        <Text>Enter the title</Text>
        <SubmittBtn />
      </View>
    )
  }
}
export default NewDeckView
