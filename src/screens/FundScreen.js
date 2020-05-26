import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FundScreen = ()=>{
    return  <View style={styles.container}>
                <Text>FundScreen</Text>
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

export default FundScreen;