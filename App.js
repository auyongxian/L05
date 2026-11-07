import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};
const MyApp = () => {
    // Declare variables
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("admin"); // Default to 'admin' so it's never empty

    return (
        <View>
            <Text></Text>

            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Text>User Type</Text>
            <Picker
                selectedValue={type}
                onValueChange={(value) => setType(value)}
                style={{backgroundColor:'grey'}}
            >
                <Picker.Item label='Admin' value='admin'/>
                <Picker.Item label='Guest' value='guest'/>
            </Picker>

            {/* Ex1G: Create a TextInput labelled as "User Name".*/}
            <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>

            {/* Ex1A: Display the text "Password:" with a simple TextInput underneath */}
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)}/>

            {/* Ex1C & Ex1D: Add a Button with title "LOG IN" and Alert message "Welcome!" */}
            <Button onPress={() => {Alert.alert("Welcome!")}} title="LOG IN"/>

            <Text></Text>

            {/* Ex1E & Ex1F: TouchableOpacity login with password check and Toast message */}
            <TouchableOpacity onPress={()=> {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw === correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }}>
                <Text>LOG IN</Text>
            </TouchableOpacity>

            <Text>Entered password: {pw}</Text>
        </View>
    );
};

export default MyApp;