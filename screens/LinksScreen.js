import React from 'react';
import { ScrollView, StyleSheet, Image, FlatList, Text, TouchableOpacity, View, Button} from 'react-native';

import TabBarIcon from '../components/TabBarIcon';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
            Your Pets
      </Text>
      <View style={styles.scrollViews} >
        
        <Text style={styles.scrollListsTitles}>Pet</Text><Text style={styles.scrollListsTitles}>Pet Type</Text><Text style={styles.scrollListsTitles}>Description</Text>
        
        
      </View>
    
      <TouchableOpacity style={styles.petButton} onPress={() => alert("Button Pressed")}>
        <Text style={styles.petText}>Add Pet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  //title: 'Your Pets',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#262626',
  },
  scrollViews: {
    borderRadius: 3,
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
  },

  scrollListsTitles: {
    flex: 1,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 16,
    color: 'white',
    paddingTop: 5,
    paddingBottom: 3,
  },
  scrollListsText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    paddingTop: 5,
    
  },
  petButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white'
  }, 
  petText: {
    color: 'black',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
});
