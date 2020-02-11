import React, { Component } from "react"
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function IndividualDeckComponentMin ({list}) {
  const navigation = useNavigation();
  const id = list.id
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Deck', {list:list })} >
          <Text>Deck Title: { list.id }</Text>
          <Text>Number of Cards: {list.cardsNr}</Text>
        </TouchableOpacity>
      </View>
    )
  }
