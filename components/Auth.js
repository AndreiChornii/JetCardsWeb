import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button, StyleSheet } from 'react-native';

const Auth = ({rez, color, onLogin}) => {
    return rez 
            ? <View><Button onPress={() => onLogin()} title={`SIGN IN ${rez}`} color={color} /><Text style={styles.outhSucced}>Logged in successfull</Text></View>
            : <View><Button onPress={() => onLogin()} title={`SIGN IN ${rez}`} color={color} /><Text style={styles.onFall}>Wrong login/password</Text></View>
}

const styles = StyleSheet.create({
    outhSucced : {
        color: "green"
    },
    onFall: {
        color: "black"
    }
});

export default Auth;