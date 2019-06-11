/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  onInputChange = (e) => {
    // alert(e) 
    this.setState({placeName: e})
  }

  onAddButtonPress = e => {
    if(this.state.placeName.trim() === '') return
    this.setState({places: this.state.places.concat(this.state.placeName), placeName: ''})
  }

  removeListItem = index => {
    this.setState(prevState => {
      return {places: prevState.places.filter((_, i) => i !== index)}
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            value={this.state.placeName} 
            placeholder='An awesome place'
            onChangeText={this.onInputChange} />
          <Button 
            styles={styles.button}
            title='Add'
            onPress={this.onAddButtonPress.bind(this)}
          />
        </View>
        <View> 
          {this.state.places.map((place, i) => <Text key={i} onPress={this.removeListItem.bind(this, i)}> {place} </Text>)}
        </View>
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
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }, 
  input:{
    width: '70%',
  },
  button: {
    width: '30%'
  }
});
