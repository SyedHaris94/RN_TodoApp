import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'native-base';
import { Divider } from 'react-native-elements';
import moment from 'moment';
import { useTask } from '../../context/Tasks';
import { CustomHeader, TextInput, Button } from '../../components';
import styles from './styles';

const NewTasks = ({ navigation }) => {

    const { handleCreateTodoTask } = useTask()
    const [description, changeDescription] = useState("");
    const [summary, changeSummary] = useState("");
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };


    const saveNewTasks = () => {

        const obj = {
            title: summary,
            description: description,
            status: 'inprogress',
            due_at: moment(date).format('YYYY-MM-DD HH:mm:ss')
        }
        let navigate = navigation.navigate("Tasks");
        changeSummary("");
        changeDescription("");
        handleCreateTodoTask(obj, navigate);



    }

    return (
        <>
            <CustomHeader
                centerComponent={
                    <Text style={styles.headerTitle}>New Task</Text>
                }
                backgroundColor="black"
            />
            <View style={styles.container}>
                <TextInput
                    textPlaceHolder={"Summary"}
                    onChangeText={changeSummary}
                    value={summary}
                    leftIcon={<Icon name="message1" type="AntDesign" style={{ fontSize: 20 }} />
                    }
                />

                <TextInput
                    textPlaceHolder={"Description"}
                    onChangeText={changeDescription}
                    value={description}
                    style={styles.inputContainer}
                    multiline={true}
                    leftIcon={<Icon name="text" type="Entypo" style={{ fontSize: 25 }} />}

                />

                <TouchableOpacity style={styles.dateCont} onPress={() => showMode('date')}>
                    <Icon name="time-outline" type="Ionicons" style={{ fontSize: 20 }} />
                    <Text style={styles.dateTextStyle}>{moment(date).format("DD MMM, HH:MM")}</Text>
                </TouchableOpacity>

                <Divider style={{ backgroundColor: 'grey', marginVertical: 20, marginHorizontal: 9, height: 1 }} />

                <View style={styles.saveBtn}>
                    <Button
                        title={"Save"}
                        containerStyle={styles.containerBtnStyle}
                        onPress={saveNewTasks}

                    />
                </View>
            </View>
            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </>
    );
};

export default NewTasks;
