import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { VictoryPie, VictoryTheme } from 'victory-native';
import GlobalContext from '../components/GlobalContext';
import data from '../assets/src/data.json'

const StatsScreen = () => {
const result = (data) => data.user
console.log(result)
const contextValue = useContext(GlobalContext)
const [user, setUser] = useState(contextValue.user);
const [userData, setUserData] = useState(data[contextValue.index])

    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
            <Text style={styles.txtSolde}>Statistiques</Text>
      </View>
      <Text style={styles.txtSolde}>Dépenses par utilisateur</Text>
      <View style={styles.boxPie}>
      <VictoryPie width={400}
       colorScale={["tomato", "orange", "#adabab", "cyan", "navy","#2B6747", "gold", "#222222", "#d62828", "#bb3e03"]}
       style={{labels: {fontSize: 16, fontWeight: 'bold', fill:'white'}}} x={result} y={(data) => data.user} data={data}/>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 25, marginVertical: 10 }}>
                    <View style={{ flex: 1, backgroundColor:'tomato', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', textAlign:'center'}}>Mayer Franklin</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor:'orange', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', height: 25, textAlign:'center'}}>Ross Hess</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor:'#adabab', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', height: 25, textAlign:'center'}}>Ingram Witt</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 25, marginVertical: 10 }}>
                    <View style={{ flex: 1, backgroundColor:'cyan', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'black', fontSize:16, fontWeight:'bold',  height: 40, textAlign:'center'}}>Mccormick Harrison</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor:'navy', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', height: 25, textAlign:'center'}}>Garcia Brown</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor:'#2B6747', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', height: 25, textAlign:'center'}}>Ramsey Le</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 25, marginVertical: 10 }}>
                    <View style={{ flex: 1, backgroundColor:'gold', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'black', fontSize:16, fontWeight:'bold', height: 25, textAlign:'center'}}>Witt Tyler</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor:'#222222', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', height: 25, textAlign:'center'}}>Diana Leon</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor:'#d62828', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', height: 42, textAlign:'center'}}>Millie Mcknight</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 25,width:'43%', marginVertical: 10 }}>
                    <View style={{ flex: 1, backgroundColor:'#bb3e03', borderRadius: 5,width:'50%', marginHorizontal: 5 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'bold', height: 25, textAlign:'center'}}>Daugherty Middleton</Text>
                    </View>
                </View>
      </View>
      </View>
    )

}

export default StatsScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0A0A0A',
    },
    containerSolde: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 15
    },
    boxPie: {
        flex: 2.00,
        alignItems: 'center',
        justifyContent:'center'
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