import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import { SwipeRow } from "react-native-swipe-list-view";
import { Icon, Button } from "native-base";
import { CheckBox, ListItem } from 'react-native-elements'
import moment from 'moment';
import { useTask } from '../../context/Tasks';
import { CustomHeader } from '../../components';
import styles from './styles';

const Tasks = ({ navigation }) => {

    const { tasks, handleUpdateTodos, handleDeleteTodoTask } = useTask()

    const filterCompletedTodos = tasks.filter(task => task.status === 'completed');
    const filterIncompletedTodos = tasks.filter(task => task.status !== 'completed');


    const renderTodoData = ({ item }) => {
        return (
            <SwipeRow leftOpenValue={0} rightOpenValue={-75}>
                <View style={styles.standaloneRowBack}>
                    <Button
                        danger
                        onPress={() => handleDeleteTodoTask(item.id)}
                    >
                        <Icon active name="trash" />
                    </Button>
                </View>

                <ListItem bottomDivider>
                    <ListItem.Content>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                containerStyle={{ padding: 0 }}
                                checked={item.status === 'completed'}
                                checkedColor={"black"}
                                onPress={() => handleUpdateTodos(item)}
                            />
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </View>
                        <View style={{ paddingLeft: 45, alignItems: 'center' }}>
                            <ListItem.Subtitle>
                                <Icon name="time-outline" type="Ionicons" style={{ fontSize: 15, color: "grey" }} />
                                <Text>
                                    {moment(item.due_at).format('YYYY-MM-DD HH:MM')}
                                </Text>
                            </ListItem.Subtitle>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </SwipeRow >
        )
    }

    return (
        <>
            <CustomHeader
                centerComponent={
                    <Text style={styles.headerTitle}>Tasks</Text>
                }
                backgroundColor="black"
            />
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity style={styles.addNewTaskCont} onPress={() => navigation.navigate("Create")}>
                    <Icon name="plus" type="Entypo" />
                    <Text style={styles.newTaskTextStyle}>Add New task</Text>
                </TouchableOpacity>
                <View style={styles.addNewTaskCont}>
                    <Text style={styles.newTaskTextStyle}>Incomplete</Text>
                </View>


                <FlatList
                    inverted
                    keyExtractor={item => item.id}
                    data={filterIncompletedTodos && filterIncompletedTodos}
                    renderItem={renderTodoData}
                />

                <TouchableOpacity style={styles.addNewTaskCont}>
                    <Text style={styles.newTaskTextStyle}>Completed</Text>
                </TouchableOpacity>

                <FlatList
                    inverted
                    keyExtractor={item => item.id}
                    data={filterCompletedTodos && filterCompletedTodos}
                    renderItem={renderTodoData}
                />

            </ScrollView >
        </>
    );


};

export default Tasks;
