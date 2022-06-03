import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PickerComponent from '../components/PickerComponent';

import data from '../assets/src/data.json'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
            <PickerComponent data={data} />
                <Text style={styles.txtSolde}>Romain RICORD</Text>
                <Text style={styles.txtSolde}>Solde : Pauvre</Text>
                
            </View>
            <Text style={styles.txtSolde}>Dernières transactions</Text>

            <View style={styles.boxTransac}>
                <Text style={styles.txtTitleCol}>Débit</Text>
                <View style={styles.line}>
                    <View style={styles.lineLeft}>
                        <Text style={styles.titleLine} >Casque VR</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Loisir</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 13:14 </Text>
                    </View>
                    <View style={styles.lineRight}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- 350 €</Text>
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.lineLeft}>
                        <Text style={styles.titleLine} >Sangle</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Loisir</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 13:14 </Text>
                    </View>
                    <View style={styles.lineRight}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- 50 €</Text>
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.lineLeft}>
                        <Text style={styles.titleLine} >Abonnement SNCF</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Transport</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 08:14 </Text>
                    </View>
                    <View style={styles.lineRight}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- 75 €</Text>
                    </View>
                </View>
                <Text style={styles.txtTitleCol}>Crédit</Text>
                <View style={styles.line}>
                    <View style={styles.lineLeft}>
                        <Text style={styles.titleLine} >Pôle emploi</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Indemnité</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 07:00 </Text>
                    </View>
                    <View style={styles.lineRight}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >1000 €</Text>
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.lineLeft}>
                        <Text style={styles.titleLine} >Gary's mod</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Revenus</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >01-06-2022, 21:30 </Text>
                    </View>
                    <View style={styles.lineRight}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >10 €</Text>
                    </View>
                </View>
                <View style={styles.line}>
                    <View style={styles.lineLeft}>
                        <Text style={styles.titleLine} >Gary's mod</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Revenus</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >31-05-2022, 22:14 </Text>
                    </View>
                    <View style={styles.lineRight}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >20 €</Text>
                    </View>
                </View>
            </View>




            <View style={{ flex: 0.45, flexDirection: 'row' }}>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Revenus')}>
                        <Icon name="plus-circle" style={{ color: '#9F8236' }} size={46} />
                        <Text style={{ color: '#adabab', fontWeight: 'bold' }}>Ajout revenus</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Depenses')}>
                        <Icon name="plus-circle" style={{ color: '#9F8236' }} size={46} />
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
        marginBottom: 15
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
        flex: 1,
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
});