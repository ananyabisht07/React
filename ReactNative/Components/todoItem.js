import  React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler}) {
    return (
        <TouchableOpacity style={styles.touch} onPress={() => pressHandler(item.key) }>
        <View style={styles.item}>
        <MaterialIcons name='delete' size={29} color='#333'/>
        <Text style={styles.itemText}>{item.text}</Text>
        </View>    
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
        backgroundColor:'#b3c6ff',
        width:250,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 20,
    }
})