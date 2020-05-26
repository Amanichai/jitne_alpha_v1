import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMsg, onSubmit, submitButtonText})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3 style={styles.headerStyle}>{headerText}</Text>
            </Spacer>
            <Spacer>
                <Input
                    label='email'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                ></Input>
                <Input
                    secureTextEntry
                    label="password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                ></Input>
                </Spacer>
                <Spacer>
                    {errorMsg ? <Text style={styles.errorStyle}>{errorMsg}</Text> : null}
                    <Button
                    style={styles.buttonStyle}
                    title={submitButtonText}
                    onPress={()=>onSubmit({email, password})}
                    raised
                    type="solid"
                ></Button>
                </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 18,
        color: '#D11149',
        textAlign: 'center',
        margin: 10
    },
    headerStyle: {
        textAlign: 'center',
        fontSize: 28,
        color: '#4388d6'
    }
});

export default AuthForm;


