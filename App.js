/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  state = {
    placeName: ''
  }

  onInputChange = (e) => {
    // alert(e) 
    this.setState({placeName: e})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{width: 300}}
          value={this.state.placeName} 
          placeholder='An awesome place'
          onChangeText={this.onInputChange} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
