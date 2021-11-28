import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, StyleSheet } from 'react-native';

const Auth = ({isVisible, rez, color, onLogin}) => {
    let output_successfull = <View><Button onPress={() => onLogin()} title={`SIGN IN ${rez} ${isVisible}`} color={color} /><Text style={styles.authSucced}>Logged in successfull</Text></View>
    let output_error = <View><Button onPress={() => onLogin()} title={`SIGN IN ${rez} ${isVisible}`} color={color} /><Text style={styles.onFall}>Wrong login/password</Text></View>
    let only_button = <View><Button onPress={() => onLogin()} title={`SIGN IN ${rez} ${isVisible}`} color={color} /></View>

    if (isVisible) {
        if(rez) return output_successfull;
        else return output_error;
    } else {
        return only_button;
    }
}

const styles = StyleSheet.create({
    authSucced : {
        color: "green"
    },
    onFall: {
        color: "black"
    }
});

export default Auth;