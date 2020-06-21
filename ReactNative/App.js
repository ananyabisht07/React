import  React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  const [people, setPeople] = useState([
    {name:'Ananya', id: '1'},
    {name:'Garvit', id: '2'},
    {name:'Suraj', id: '3'},
    {name:'Sallo', id: '4'},
    {name:'Dhruv', id: '5'},
    {name:'Abhi', id: '6'},
    {name:'Rishabh', id: '7'},
  ])
  
  
    //setPerson({name:'Dhruv',age:10})
  
  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={ (item ) => item.id }
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      {/* <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:40,
    paddingHorizontal:20
  },
  input: {
    borderWidth:1,
    padding:10,
    borderColor: '#777',
    width:200,
    margin:10
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24
  }
  
});
