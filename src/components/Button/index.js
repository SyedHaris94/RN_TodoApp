/**
 * importing componetns 
 */
import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles';

const Button = (props) => {
    const { onPress, title, containerStyle } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={containerStyle}
        >
            <Text
                style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;
