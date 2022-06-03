import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { Searchbar } from 'react-native-paper';
import ListComponent from '../components/ListComponent';

import  data from '../assets/src/data.json'


const AccountScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
                <Text style={styles.txtSolde}>Solde actuel : Toujours pauvre</Text>
            </View>
            <View>
            <Searchbar
                placeholder="Rechercher"
                //onChangeText={onChangeSearch}
                style={{ flexDirection: 'row-reverse', borderRadius: 20, backgroundColor: '#FEFFE2', marginBottom: 10 }}
                //value={searchQuery}
            />
            </View>

            <Text style={styles.txtSolde}>Transactions</Text>
            <ScrollView>
            {data.map((item, index) =>
            <View style={styles.boxTransac} key={index}>
               { /*<ListComponent data={data}   />*/}
               {item.expenses.map((truc, index) =>
               <View style={styles.line} key={index}>
                   
                <View style={styles.lineLeft} >
                <Text style={styles.titleLine} >{item.user}</Text>
                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Catégorie : {truc.category}</Text>
                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >{truc.comments} </Text>
                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} > {truc.date} </Text>


            </View>
            
            <View style={styles.lineRight}>
                <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- {truc.amount} €</Text>
            </View>
            
        </View>)}
            </View>)}
            </ScrollView>
        </View>
    )

}

export default AccountScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0A0A0A'
    },
    containerSolde: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 15
    },
    boxTransac: {
        flex: 2.20,
        marginHorizontal: 15,
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
        flex: 0.17,
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
        fontSize: 22,
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