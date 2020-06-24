import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

//import { styles } from './styles'

export default function Screen1() {
    return(
        <View style={styles.center}>
            <Text style={styles.title}> Contacts</Text>
        </View>
    )
} 


    const styles = StyleSheet.create({
        center: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        title: {
          fontSize: 36,
          marginBottom: 16
        },
    })
    
