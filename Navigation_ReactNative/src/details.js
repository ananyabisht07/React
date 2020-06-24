import React, { Component } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, StyleSheet } from 'react-native';

//import { styles } from './styles'

class Detail extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Detail Screen</Text>
            </View>
        );
    }
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


export default Detail;

