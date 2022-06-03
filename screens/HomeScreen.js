import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0A0A0A' }}>
            <View style={styles.containerSolde}>
                    <Text style={styles.txtSolde}>Romain RICORD</Text>
                    <Text style={styles.txtSolde}>Solde actuel : Pauvre</Text>
            </View>

            <Text style={styles.txtSolde}>Dernières transactions</Text>

            <View style={{ flex: 2.5, marginHorizontal: 15 }}>
                    <Text style={styles.txtTitleCol}>Débit</Text>
                <View style={{ flexDirection: 'row', flex: 0.17, marginBottom: 10 }}>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'left', marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' }} >Casque VR</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Loisir</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 13:14 </Text>
                    </View>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- 350 €</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 0.17, marginBottom: 10 }}>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'left', marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' }} >Sangle</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Loisir</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 13:14 </Text>
                    </View>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- 50 €</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 0.17, marginBottom: 10 }}>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'left', marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' }} >Abonnement SNCF</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Transport</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 13:14 </Text>
                    </View>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- 75 €</Text>
                    </View>
                </View>
                <Text style={styles.txtTitleCol}>Crédit</Text>
                <View style={{ flexDirection: 'row', flex: 0.17 }}>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'left', marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' }} >Pôle emploi</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Indemnité</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 07:00 </Text>
                    </View>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >1000 €</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 0.17 }}>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'left', marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' }} >Gary's mod</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Revenus</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 07:00 </Text>
                    </View>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >10 €</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 0.17 }}>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'left', marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' }} >Gary's mod</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Revenus</Text>
                        <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >02-06-2022, 07:00 </Text>
                    </View>
                    <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#adabab', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >20 €</Text>
                    </View>
                </View>

            </View>




            <View style={{ flex: 0.50, flexDirection: 'row' }}>
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
    containerCol: {
        flex: 0.5,
    },
    containerBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    containerSolde: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 15
    },
    btn: {
        alignItems: 'center'
    },
    containerGroup: {
        flex: 0.20,
        borderRadius: 40,
        margin: 15,
        backgroundColor: '#2B6747',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
    },
    txtTitleCol: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#EEF1F1",
        textAlign: 'center',
        marginVertical: 5
    },
    txtSolde: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    }
});