import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



export default function HomeScreen() {
  return (   
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
            Welcome {"\n"} Triston!
      </Text>
      <Text style={styles.ScrollTextTitle}>Pet List</Text>
      <ScrollView style={styles.scrollViews} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.scrollListsTitles}>Name</Text><Text style={styles.scrollListsTitles}>Type</Text><Text style={styles.scrollListsTitles}>Age</Text>
      </ScrollView>
      <Text style={styles.ScrollTextTitle}>Appointments</Text>
      <ScrollView style={styles.scrollViews} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.scrollListsTitles}>Pet</Text><Text style={styles.scrollListsTitles}>Appt. Type</Text><Text style={styles.scrollListsTitles}>Date</Text>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#262626',
  },
  ScrollTextTitle: {
    fontSize: 20,
    marginLeft: '7%',
    color: 'white',
  },
  scrollViews: {
    borderRadius: 3,
    marginTop: '1%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderColor: 'white',
    borderWidth: 1,
  },
  contentContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  scrollListsTitles: {
    flex: 1,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 16,
    color: 'white',
  },
});
