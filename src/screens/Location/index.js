import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { SwipeRow } from "react-native-swipe-list-view";
import { Icon, Button } from "native-base";
import { ListItem } from 'react-native-elements';
import GetLocation from 'react-native-get-location'

import { useLocation } from '../../context/Location';
import { CustomHeader } from '../../components';
import styles from './styles';

const Location = () => {

    const { locationData, handleDeleteLocation, addLocationData } = useLocation()
    const location = locationData;

    const [currLocation, setCurrLocation] = useState({});

    useEffect(() => {
        getCurrLocation();
    }, [])

    const getCurrLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(data => {
                const obj = {
                    latitude: data.latitude,
                    longitude: data.longitude,
                    address: "Karachi"
                }
                setCurrLocation(obj);
                addLocationData(obj);
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }


    const renderLocation = ({ item }) => {
        return (
            <SwipeRow leftOpenValue={0} rightOpenValue={-75}>
                <View style={styles.standaloneRowBack}>
                    <Button
                        danger
                        onPress={() => handleDeleteLocation(item.id)}
                    >
                        <Icon active name="trash" />
                    </Button>
                </View>

                <ListItem bottomDivider>
                    <ListItem.Content>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="map-pin" type="FontAwesome5" style={styles.iconStyle} />

                            <ListItem.Title>{item.address ?item.address : ""}</ListItem.Title>
                        </View>
                        <View style={{ paddingLeft: 25, alignItems: 'center' }}>
                            <ListItem.Subtitle>
                                <Text style={styles.latLogTextStyle}>
                                    {item.latitude ?item.latitude :  "" + "\u00B0N, " + item.longitude ?item.longitude : ""+ "\u00B0E"}
                                </Text>
                            </ListItem.Subtitle>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </SwipeRow >
        )
    }


    return (
        <View style={styles.container}>
            <CustomHeader
                centerComponent={
                    <Text style={styles.headerTitle}>Location</Text>
                }
                backgroundColor="black"
            />

            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.addNewTaskCont} onPress={() => getCurrLocation()}>
                    <Icon name="plus" type="Entypo" />
                    <Text style={styles.newTaskTextStyle}>Check In</Text>
                </TouchableOpacity>
                <View style={styles.addNewTaskCont}>
                    <Text style={styles.newTaskTextStyle}>Current Location</Text>
                </View>

                <ListItem bottomDivider>
                    <ListItem.Content>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="map-pin" type="FontAwesome5" style={styles.iconStyle} />

                            <ListItem.Title>{currLocation.address}</ListItem.Title>
                        </View>
                        <View style={{ paddingLeft: 25, alignItems: 'center' }}>
                            <ListItem.Subtitle>
                                <Text style={styles.latLogTextStyle}>
                                    {currLocation.latitude + "\u00B0N, " + currLocation.longitude + "\u00B0E"}
                                </Text>
                            </ListItem.Subtitle>
                        </View>
                    </ListItem.Content>
                </ListItem>

                <TouchableOpacity style={styles.addNewTaskCont}>
                    <Text style={styles.newTaskTextStyle}>Previous Location</Text>
                </TouchableOpacity>

                <FlatList
                    keyExtractor={item => item.id}
                    data={location && location}
                    renderItem={renderLocation}
                />

            </View >
        </View>
    );
};

export default Location;
