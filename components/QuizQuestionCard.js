import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import TextButon from './TextButon'
import { connect } from "react-redux";

export default function QuizQuestionCard () {
  return (
    <View>
    <Text>Does ... ?</Text>
    <TextButon>
      Answer
    </TextButon>
    </View>
  )
}
