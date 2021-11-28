<script src="http://localhost:8097"></script>

import React, { useReducer, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import Auth from '../JetCardsWeb/components/Auth'
import { useAsync } from 'react-async'

const titleText = "JET CARDS Service - Sign in";
let isValid = 0;


const reducer = (state, action) => {
  // console.log(action.login);
  // console.log(action.password);

  fetch(`https://www.jetcs.co/api/GetAPIKey/${action.login}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: action.password
    })
    .then((response) => response.json())
    .then((json) => {
      console.log('Logged in successfull');
      // console.log(json.APIKey)
      // alert('Logged in successfull');
      isValid = 1;
    })
    .catch((error) => {
      console.log('Wrong login/password');
      // console.error(error);
      // alert('Wrong login/password');
      isValid = 0;
    });
  return isValid
    ? { ...state, login: action.login, password: action.password, rez: 1, isVisible: 1 }
    : { ...state, login: action.login, password: action.password, rez: 0, isVisible: 1 };
};



const LoginScreen = () => {
  const [state, dispatch] = useReducer(reducer, { login: '', password: '', rez: 0, isVisible: 0 });



  const { login, password, rez, isVisible } = state;

  const [textlogin, setLogin] = useState('');
  const [textPassword, setPassword] = useState('');

  console.log(login);
  console.log(password);
  console.log(isValid);

  return <View style={styles.container}>
    <View style={styles.middle}>
      <View style={styles.header}>
        <Text style={styles.titleText}>
          {titleText}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentelement}>
          <Image
            style={styles.image}
            source={require("./img/smile.png")}
          />

          <TextInput
            style={styles.input}
            placeholder="Login"
            onChangeText={text => setLogin(text)}
          />

        </View>
        <View style={styles.contentelement}>
          <Image
            style={styles.image}
            source={require("./img/lock.png")}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

        </View>
        <View style={styles.contentelement}>
          <Auth
            onLogin={ () => { 
              dispatch({ login: textlogin, password: textPassword }) 
              dispatch({ login: textlogin, password: textPassword }) 
            } }
            color="lightgrey"
            rez={rez}
            isVisible={isVisible}
          />
        </View>

      </View>
    </View>
    <View>

    </View>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  middle: {
    flex: 0.5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    alignItems: "center",

  },
  header: {
    flex: 0.25,
    backgroundColor: "#de2768",
    borderRadius: 5,
    position: "relative",
    width: "75%",
    justifyContent: 'center',
    marginTop: -40
  },
  content: {
    flex: 0.75,
    // backgroundColor: "green",
    justifyContent: "space-around",
    width: "90%"
    // alignItems: "center"
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
  contentelement: {
    borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10
  },
  input: {
    height: 35,
    width: 60,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    padding: 10,
    flex: 0.75,
  },
  image: {
    resizeMode: "cover",
    height: 25,
    width: 25,
    marginRight: 25,
    // borderWidth: 1,
    // borderColor: 'brown',
    alignSelf: "center"
  }
});

export default LoginScreen;