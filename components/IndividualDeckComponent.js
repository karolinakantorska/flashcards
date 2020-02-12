import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function IndividualDeckComponent ({ list }) {
  const navigation = useNavigation()
  const id = list[0]
  const cardsNr = list[1]
  if (cardsNr === 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Deck Title: {id}</Text>
        <Text>Number of Cards: {cardsNr}</Text>
        <Text>It's time to add some questions!</Text>
        <Button
          title='Add Card'
          onPress={() => navigation.navigate('AddQuestion', { id: id })}
        />
        <Button
          title='Start a Quiz'
          disabled
          onPress={() => navigation.navigate('Quiz', { id: id })}
        />
      </View>
    )
  }
  else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Deck Title: {id}</Text>
        <Text>Number of Cards: {cardsNr}</Text>
        <Button
          title='Add Card'
          onPress={() => navigation.navigate('AddQuestion', { id: id })}
        />
        <Button
          title='Start a Quiz'
          onPress={() => navigation.navigate('Quiz', { id: id })}
        />
      </View>
    )
  }
}
