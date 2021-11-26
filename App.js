import React, { useReducer } from 'react';
import { View, Text, StyleSheet,TextInput,Button,TouchableOpacity,Image } from 'react-native';
import Auth from '../JetCardsWeb/components/Auth'

const titleText = "JET CARDS Service - Sign in";

const reducer = (state, action) => {
    return {...state , login: action.login, password: action.password};
};

const LoginScreen = () => {
  const [state, dispatch] = useReducer(reducer, { login: '', password: '' });
  const { login, password } = state;

  console.log(login);
  console.log(password);

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
          />

        </View>
        <View style={styles.contentelement}>
          <Auth
              onLogin={() => dispatch({ login: 'llll', password: 'ppppp' })}
              color="lightgrey"
          />
        </View>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{"Forgot your Login or Password?"}</Text>
        </TouchableOpacity>
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
  },
  appButtonContainer: {
    // elevation: 8,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    // paddingVertical: 10,
    // paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 12,
    color: "#de2768",
    // fontWeight: "bold",
    alignSelf: "center",
    // textTransform: "uppercase"
  }
});

export default LoginScreen;