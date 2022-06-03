
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';

const PickerComponent = (props) => {
    const { data } = props

    return (
        <View style={styles.dropDownStyle}>
            <Picker
                /*onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }*/
                mode="dropdown"
            >
                <Picker.Item label="Choisissez un utilisateur" value="" />
                {data.map((item, index) => <Picker.Item label={item.user} value={item.user} />)}
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