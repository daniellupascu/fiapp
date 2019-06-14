import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
 

const TextInputWButton = props => {
  const [text, setText] = useState('')

  const onInputChange = e => {
    setText(e)
  }

  const onInputSubmit = () => {
    text.trim() !== '' && props.callback ? 
      (props.callback(text), setText('')) 
      : null 

  }

  return ( 
    <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            value={text} 
            placeholder='An awesome place'
            onChangeText={onInputChange} />
          <Button 
            styles={styles.button}
            title='Add'
            onPress={onInputSubmit}
            />
      </View>
  )
}

const styles = StyleSheet.create({
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
})

export default TextInputWButton;