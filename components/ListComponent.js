
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ListComponent = (props) => {
    const { data } = props
    //const contextValue = useContext(GlobalContext)
    //const [data, setData] = useState('');

    return data.map((item, index) => {
        return (
            <View style={styles.line} key={index}>
            <View style={styles.lineLeft}>
                <Text style={styles.titleLine} >Casque VR</Text>
                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10, fontWeight: 'bold' }} >Loisir</Text>
                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >{item.user} </Text>
            </View>
            <View style={styles.lineRight}>
                <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- 350 €</Text>
            </View>
        </View>
        )
    })
}

export default ListComponent

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
        flex: 2,
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
        flex: 0.17,
        marginBottom: 10
    },
    lineLeft: {
        flex: 1,
        borderBottomWidth: 1, 
        borderBottomColor: '#adabab'
    },
    lineRight: {
        flex: 1,
        borderBottomWidth: 1, 
        borderBottomColor: '#adabab', 
        alignItems: 'flex-end', 
        justifyContent: 'center'
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