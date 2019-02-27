import React from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './src/components/common/Header';
import {List, ListItem} from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}
