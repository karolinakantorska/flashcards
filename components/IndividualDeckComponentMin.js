//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function IndividualDeckComponentMin ({id}) {
  const navigation = useNavigation();
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Deck', {id: id})} >
          <Text>Deck Title</Text>
          <Text>{ id }</Text>
        </TouchableOpacity>
      </View>
    )
  }
