
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import PickerComponent from '../components/PickerComponent';
import GlobalContext from '../components/GlobalContext';

import data from '../assets/src/data.json'

const HomeScreen = ({ navigation }) => {

    const contextValue = useContext(GlobalContext)
    const [user, setUser] = useState(contextValue.user);
    const [userData, setUserData] = useState(data[contextValue.index])
    useEffect(() => {
        setUser(contextValue.user)
        setUserData(data[contextValue.index])
    })
    /*for(var i = 0; i < userData.expenses.length; i++){
        var obj = userData.expenses[i];
        for(var prop in obj){
            if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                obj[prop] = +obj[prop];   
            }
        }
    }
    console.log(JSON.stringify(userData.expenses, null, 2));*/

    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
                <View style={{ flexDirection: 'row' }}>
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
                            {data.map((item, index) => <Picker.Item key={index} label={item.user} value={item.user} />)}
                        </Picker>
                    </View>
                    {(user === "") && setUser == "Maynklin"}
                    <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10 }}>
                        <Text style={styles.txtSolde}>{user}</Text>
                        {userData.expenses.slice(0, 1).map((item, index) =><Text style={styles.txtSolde} key={index}>Solde : {item.amount} € <Entypo name="wallet" size={24} /></Text>)}
                    </View>
                </View>
            </View>
            <Text style={styles.txtSolde}>Dernières transactions</Text>

            <View style={styles.boxTransac}>
                <Text style={styles.txtTitleCol}>Débit</Text>
                <ScrollView>
                    {userData.expenses.slice(0, 3).map((item, index) =>
                        <View style={styles.line} key={index}>
                            <View style={styles.lineLeft}>
                                <Text style={styles.titleLine} >{item.category}</Text>
                                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >{item.date}</Text>
                            </View>
                            <View style={styles.lineRight}>
                                <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- {item.amount} €</Text>
                            </View>
                        </View>
                    )}
                </ScrollView>
                <Text style={styles.txtTitleCol}>Crédit</Text>
                <ScrollView>
                    {userData.incomes.slice(0, 3).map((item, index) =>
                        <View style={styles.line}>
                            <View style={styles.lineLeft}>
                                <Text style={styles.titleLine} >{item.category}</Text>
                                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >{item.date}</Text>
                            </View>
                            <View style={styles.lineRight}>
                                <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >{item.amount} €</Text>
                            </View>
                        </View>
                    )}
                </ScrollView>
            </View>




            <View style={{ flex: 0.45, flexDirection: 'row' }}>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Revenus')}>
                        <MaterialCommunityIcons name="plus-circle" style={{ color: '#9F8236' }} size={46} />
                        <Text style={{ color: '#adabab', fontWeight: 'bold' }}>Ajout revenus</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Depenses')}>
                        <MaterialCommunityIcons name="plus-circle" style={{ color: '#9F8236' }} size={46} />
                        <Text style={{ color: '#adabab', fontWeight: 'bold' }}>Ajout dépenses</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0A0A0A'
    },
    containerSolde: {
        flex: 0.65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 15,
    },
    boxTransac: {
        flex: 3,
        marginHorizontal: 15
    },
    txtTitleCol: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#EEF1F1",
        textAlign: 'center',
        marginVertical: 5
    },
    line: {
        flexDirection: 'row',
        flex: 0.19,
        marginBottom: 10
    },
    lineLeft: {
        flex: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#adabab',
        paddingBottom: 10
    },
    lineRight: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#adabab',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 10
    },
    titleLine: {
        color: '#EEF1F1',
        textAlign: 'left',
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtSolde: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    containerBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    btn: {
        alignItems: 'center'
    },
    dropDownStyle: {
        width: '50%',
        flex: 0.85,
        borderColor: '#838383',
        paddingHorizontal: 5,
        backgroundColor: '#adabab',
        borderRadius: 10,
        color: '#838383',
        height: 35,
        textAlign: 'center',
        justifyContent: 'center',
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