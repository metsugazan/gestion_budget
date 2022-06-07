
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import GlobalContext from './GlobalContext';
import { useFocusEffect } from '@react-navigation/native';

const PickerComponent = (props) => {
    const { data } = props
    const contextValue = useContext(GlobalContext)
    const [user, setUser] = useState(contextValue.user);
    const [userData, setUserData] = useState(data[contextValue.index])
  
  
    useFocusEffect(() => {
      setUser(contextValue.user)
      setUserData(data[contextValue.index])
    })
  
    return (
        <View style={styles.dropDownStyle}>
        <Picker
        selectedValue={user}
        onValueChange={(text, index) => {
          contextValue.user = text
          contextValue.index = index - 1
          setUser(text)
          setUserData(data[index - 1])
        }}
            mode="dropdown"
        >
            <Picker.Item label="Choisissez un utilisateur" value=" " />
            {data.map((item, index) => <Picker.Item  key={index} label={item.user} value={item.user} />)}
        </Picker>
    </View>
    )

}

export default PickerComponent

const styles = StyleSheet.create({

    dropDownStyle: {
        width: '80%',
        borderColor: '#838383',
        paddingHorizontal: 5,
        backgroundColor: '#adabab',
        borderRadius: 10,
        color: '#838383',
        height: 45,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5
    },
    
});