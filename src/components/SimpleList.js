import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItem from './ListItem'
 

const simpleList = props => (
    <FlatList 
        style={styles.listContainer} 
        data={props.items}
        renderItem={({item}) => (
                <ListItem  
                    onPressItem={() => props.removeListItem( item.key)} 
                    text={item.value}/>
                )}
    /> 
          /* {props.items.map((item, i) =>  <ListItem key={i} onPressItem={props.removeListItem.bind(this, i)} text={item} />)}
    </FlatList> */
)

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
      }
})

export default simpleList