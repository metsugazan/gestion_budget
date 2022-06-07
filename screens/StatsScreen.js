import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { VictoryPie, VictoryChart, VictoryTheme } from 'victory-native';

const StatsScreen = () => {

    const data = [
        { x: "Transports", y: 35 },
        { x: "Logement", y: 40 },
        { x: "Divertissement", y: 55 }
      ];
    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
      </View>
      <VictoryPie width={350} theme={VictoryTheme.material} data={data}/>
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