import  React, {useState} from 'react';
import { Platform, StyleSheet, Text,TouchableWithoutFeedback, Keyboard, View, FlatList,Alert} from 'react-native';
import  Header from './Components/Header'
import TodoItem from './Components/todoItem'
import AddTodo from './Components/addTodo';
//import Sandbox from './Components/sandbox';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !=key )
    });
  }

  const submitHandler = (text) => {
    if (text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!!','Todos must be over 3 chars long.', [
        {text:'Understood', onPress: () => console.log('Alert Closed')}
      ])
    }
    
  }

  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3ecff',
  },
  content: {
    flex:1,
    padding: 40,
  },
  list: {
    flex:1,
    marginTop: 20,
    backgroundColor: '#80dfff',
    borderRadius: 10,
    alignItems: 'center'
    
  }
});
