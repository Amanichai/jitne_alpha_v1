import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const SignupScreen = ()=>{
    return <View style={styles.container}>
                <AuthForm
                    headerText='Sign Up To Jitne'
                    errorMsg=""
                    onSubmit={()=>{}}
                    submitButtonText='Sign Up'
                ></AuthForm>
            </View>
};

SignupScreen.navigationOptions = ()=>{
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;