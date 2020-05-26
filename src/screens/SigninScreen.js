import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ()=>{
    return <View style={styles.container}>
                <AuthForm
                    headerText="Sign In To Jitne"
                    errorMsg=""
                    onSubmit={()=>{}}
                    submitButtonText='Sign In'
                ></AuthForm>
                    
                <NavLink
                    routeName='Signup'
                    text="Don't have an account? Sign up!"
                ></NavLink>
            </View>
};

SigninScreen.navigationOptions =()=>{
    return {
        headerShown: false
    };
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 200,
        backgroundColor: "#fed301"
    },
});

export default SigninScreen;