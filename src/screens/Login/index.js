import React, { useState } from 'react';
import {
    View,
    Text
} from 'react-native';

import { TextInput, Button } from '../../components';
import styles from './styles';

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    const submitButton = () => {
        let obj = {
            email: email,
            password: password
        }

        if (email !== "" && password !== "") {
            navigation.navigate("TabNavigator");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Log In</Text>
            <TextInput
                textPlaceHolder={"Email"}
                style={styles.inputContainer}
                keyboardType={"email-address"}
                onChangeText={onChangeEmail}
                value={email}
            />

            <TextInput
                textPlaceHolder={"Password"}
                style={styles.inputContainer}
                keyboardType={"numeric"}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
            />

            <Button
                title={"Log In"}
                onPress={submitButton}
                containerStyle={styles.containerBtnStyle}
            />
        </View>
    );
};

export default Login;
