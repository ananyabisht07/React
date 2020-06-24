import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import { styles } from './styles'

export default function Screen2() {
    return(
        <View style={styles.center}>
            <Text style={styles.title}> Favourites</Text>
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
    
