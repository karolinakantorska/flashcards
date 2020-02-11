import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'

import { connect } from "react-redux";
import IndividualDeckComponentMin from './IndividualDeckComponentMin'

class IndividualDeckComponent extends Component {
  render () {
    const {id }= this.props
    const { navigation } = this.props
    return (
      <View>
        <IndividualDeckComponentMin id={id}/>
      <Button
        title="Add Question"
        onPress={() => navigation.navigate('AddQuestion', {id:id})}
        />
        <Button
          title="Quiz"
          onPress={() => navigation.navigate('Quiz', {id:id})}
          />
              </View>
    )
  }
}
function mapStateToProps (state, { id }) {
    return {
    id
  }
}
export default connect(mapStateToProps)(IndividualDeckComponent)
