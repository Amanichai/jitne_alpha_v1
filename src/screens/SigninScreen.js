import React, {useContext} from 'react';
import{Context as AuthContext } from '../context/authContext';
import { NavigationEvents} from 'react-navigation'
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ()=>{
    const { state, signin, clrErrMsg} = useContext(AuthContext)
    return <View style={styles.container}>

                <NavigationEvents
                    onWillFocus={clrErrMsg}
                ></NavigationEvents>
                
                <AuthForm
                    headerText="Sign In To Jitne"
                    errorMsg={state.errorMessage}
                    onSubmit={signin}
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