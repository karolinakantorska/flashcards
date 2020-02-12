import React, { Component } from "react"
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function IndividualDeckComponentMin ({list}) {
  const navigation = useNavigation();
  const id = list[0]
  const cardsNr = list[1]
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Deck', { list: [id, cardsNr] })} >
          <Text>Deck Title: { id }</Text>
          <Text>Number of Cards: {cardsNr}</Text>
        </TouchableOpacity>
      </View>
    )
  }
