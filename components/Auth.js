import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';

const Auth = ({color, onLogin}) => {
    return <Button onPress={() => onLogin()} title={`SIGN IN`} color={color} />  
}

export default Auth;