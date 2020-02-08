import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from "react-redux";


class IndividualDeckComponentMin extends Component {
  render () {
    const { id, one } = this.props
    return (
      <View>
        <Text>{id}</Text>
        <Text>{one}</Text>
      </View>
    )
  }
  }

  function mapStateToProps(state, id) {
    const ID = props.match.params.id.trim()
    const one = state[ID].questions.length
    return {
      one
    }
  }

export default connect(mapStateToProps)(IndividualDeckComponentMin)
