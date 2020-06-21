import  React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const [name, setName] = useState('Ananya')
  const [age, setAge] = useState('20')
  
    //setPerson({name:'Dhruv',age:10})
  
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. Ananya Bisht' 
        onChangeText={(val) => setName(val)}  / >

        <Text>Enter age:</Text>
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 20' 
          onChangeText={(val) => setAge(val)}  / >
      <Text>Name: {name}  Age: {age}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    borderWidth:1,
    padding:10,
    borderColor: '#777',
    width:200,
    margin:10
  }
  
});
