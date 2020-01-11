import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#000",
    },
    displayValue: {
        flex: 1,
        fontSize: 60,
        color: '#FFF',
    },
    valorOperacao: {
        fontSize: 10,
        color: '#FFF',
        flex: 2
    }

});



export default props => {
    return (
        <View style={ styles.display } >
            <Text style={ styles.displayValue } numberOfLines={1}>
                { props.value }
            </Text>
            <Text style={ styles.valorOperacao }>
                {props.operacao}
            </Text>
        </View>
    )
}