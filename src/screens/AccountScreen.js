import React, {useContext} from 'react';
import {Context as AuthContext} from '../context/authContext';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AccountScreen = ({navigation})=>{
    const {signout} = useContext(AuthContext);
    return  <View style={styles.container}>
                <Text style={styles.headerText}>AccountScreen</Text>
                <Spacer>
                    <Button
                        title="Sign Out"
                        onPress={signout}
                    >  
                    </Button>
                </Spacer>
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
    headerText: {
        textAlign: 'center',
        fontSize: 32
    }
});

export default AccountScreen;