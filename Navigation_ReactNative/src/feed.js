import React, { Component } from 'react';
import { View, Text, Button, Platform, TouchableOpacity,StyleSheet } from 'react-native';
//import { useNavigation, useRoute } from '@react-navigation/native';

//import { styles } from './styles';

class Feed extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Navigation Drawer</Text>
            </View>
        )
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

export default Feed;