import React from 'react';
import { Input } from 'react-native-elements';

const TextInput = (props) => {
    const { textPlaceHolder, onChangeText, style, leftIcon = null, value, keyboardType = 'default', multiline = false, secureTextEntry = false } = props
    return (
        <Input
            placeholder={textPlaceHolder}
            leftIcon={leftIcon}
            onChangeText={onChangeText}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C6C8CE"
            value={value}
            style={style}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
        />
    );
}

export default TextInput