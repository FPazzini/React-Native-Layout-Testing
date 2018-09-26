import React from 'react'
import { Text, View, FlatList } from 'react-native';
import SquaresInterface from './components/SquaresInterface'
import { Header } from './components/common'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText="SharksList" />
        <SquaresInterface />
      </View>
    );
  }
}