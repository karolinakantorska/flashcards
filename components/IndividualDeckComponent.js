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
        <View style={styles.card}>
          <Text>Deck Title: {id}</Text>
          <Text>Number of Cards: {cardsNr}</Text>
          <Text>It's time to add some questions!</Text>
        </View>
        <Button
          style={styles.btnGreen}
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
        <View style={styles.card}>
          <Text>Deck Title: {id}</Text>
          <Text>Number of Cards: {cardsNr}</Text>
        </View>
        <Button
          style={styles.btnGreen}
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
const styles = StyleSheet.create({
  btnGreen: {
    backgroundColor: '#394d00',
    padding: 10,
    marginBottom: 40,
    marginTop: 40,
    fontSize: 50,
  },
  btnRed: {

  },
  card: {
    marginBottom: 40,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#f0f5f5',
    borderRadius: 5,
    borderColor: '#394d00',
    borderWidth: 1,
  },
})
