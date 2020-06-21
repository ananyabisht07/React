import  React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({ item, pressHandler}) {
    return (
        <TouchableOpacity style={styles.touch} onPress={() => pressHandler(item.key) }>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#000066' ,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor:'#b3c6ff'
        
    },
    touch: {
        
    }
})