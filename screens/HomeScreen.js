import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.containerSolde}>
                <Text style={styles.txtSolde}>Solde actuel :</Text>
            </View>
            <View style={styles.containerGroup}>
                <View style={styles.containerCol}>
                    <Text style={styles.txt}>Débit</Text>
                </View>
                <View style={styles.containerCol}>
                    <Text style={styles.txt}>Crédit</Text>
                </View>
            </View>
            <View style={{ flex: 0.50, flexDirection: 'row' }}>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Revenus')}>
                        <Icon name="plus-circle" size={46} />
                        <Text>Ajout revenus</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Depenses')}>
                        <Icon name="plus-circle" size={46} />
                        <Text>Ajout dépenses</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    containerCol: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 2
    },
    containerBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    containerSolde: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    btn: {
        alignItems: 'center'
    },
    containerGroup: {
        flex: 3,
        borderWidth: 2,
        borderRadius: 10,
        margin: 15,
        backgroundColor: 'lightgray',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    txtSolde: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign:'center'
    }
});