import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

const BottomTabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                if (label === 'Tasks') {
                    return (
                        <TouchableOpacity onPress={onPress} style={styles.routeCont} key={index}>
                            <Icon name="tasks" type="FontAwesome5" style={styles.iconStyle} />
                            <Text style={styles.routeTextStyle}>{label}</Text>

                        </TouchableOpacity>)
                }
                if (label === 'Create') {
                    return (
                        <TouchableOpacity onPress={onPress} style={styles.routeCont} key={index}>
                            <Icon name="pluscircle" type="AntDesign" style={styles.iconStyleAdd} />
                        </TouchableOpacity>
                    )
                }

                if (label === 'Location') {
                    return (
                        <TouchableOpacity onPress={onPress} style={styles.routeCont} key={index}>
                            <Icon name="location" type="EvilIcons" style={styles.iconStyleLocation} />
                            <Text style={styles.routeTextStyle}>{label}</Text>

                        </TouchableOpacity>
                    )
                }
            })}
        </View>
    );
}

export default BottomTabBar;