/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import SimpleList from './src/components/SimpleList'
import TextInputWButton from './src/components/TextInputWButton'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  state = {
    places: []
  }

  onInputSubmit = place => {
    this.setState({places: this.state.places.concat({key: Date.now().toString(), value: place})})
  }

  removeListItem = key => {
    this.setState(prevState => {
      return {places: prevState.places.filter(item  => item.key !== key)}
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInputWButton 
          callback={this.onInputSubmit.bind(this)} 
          />

        <SimpleList 
          items={this.state.places} 
          removeListItem={this.removeListItem.bind(this)} 
        />

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
  }
});
