import React, {useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {Context as AuthContext } from '../context/authContext';
import { NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation})=>{
    const {state, signup, localLogin, clrErrMsg} = useContext(AuthContext);

    useEffect(()=>{
        localLogin();
    }, [])
    return <View style={styles.container}>

                <NavigationEvents
                    onWillFocus={clrErrMsg}
                ></NavigationEvents>
                <AuthForm
                    headerText='Sign Up To Jitne'
                    errorMsg={state.errorMessage}
                    onSubmit={signup}
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