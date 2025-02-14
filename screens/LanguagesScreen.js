import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyLanguagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои языки программирования</Text>
      <Text>- JavaScript</Text>
      <Text>- Java</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MyLanguagesScreen;
