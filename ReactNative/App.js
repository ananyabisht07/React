import  React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const [name, setName] = useState('Ananya')
  const [person, setPerson] = useState({name:'Saloni', age:20})
  const clickHandler = () => {
    setName('Abhigyan')
    setPerson({name: 'Db',age: 10})
    //setPerson({name:'Dhruv',age:10})
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My name is {person.name} and I am {person.age}.</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20
  }
  
});
