import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ()=>{
    return <View style={styles.container}>
                <AuthForm
                    headerText='Sign Up To Jitne'
                    errorMsg=""
                    onSubmit={()=>{}}
                    submitButtonText='Sign Up'
                ></AuthForm>

                <NavLink
                    routeName='Signin'
                    text='Already have an Account? Sign in!'
                ></NavLink>
            </View>
};

SignupScreen.navigationOptions = ()=>{
    return {
        headerShown: false,
    }
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

export default SignupScreen;