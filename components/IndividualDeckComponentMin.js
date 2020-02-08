//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'


export default function IndividualDeckComponentMin ({id}) {
    return (
      <View>
        <TouchableOpacity>
          <Text>Deck Title</Text>
          <Text>{ id }</Text>
        </TouchableOpacity>
      </View>
    )
  }
