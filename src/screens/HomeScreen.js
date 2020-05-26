import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ()=>{
    return <View style={styles.container}>
             <Text>HomeScreen</Text>
           </View>
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 200,
    backgroundColor: "#fed301"
},
});

export default HomeScreen;