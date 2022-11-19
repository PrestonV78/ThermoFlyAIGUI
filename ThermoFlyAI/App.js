import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, Platform, TextInput } from "react-native";
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Archivo: require('./assets/fonts/Archivo-Regular.ttf'),
    SemiBold: require('./assets/fonts/Archivo-SemiBold.ttf'),
    ContrailOne: require('./assets/fonts/ContrailOne-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  //Changing Variables
  let currentTemp = 69;
  let desiredTemp = 70;
  let externalTemp = 85;
  let image =  currentTemp < desiredTemp ? require("./assets/Heating.png") : (currentTemp > desiredTemp ? require("./assets/Cooling.png") : require("./assets/Holding.png"));
  let process =  currentTemp < desiredTemp ? ("Heating to") : (currentTemp > desiredTemp ? ("Cooling to") : ("Holding"));
  let externalColor = externalTemp >= 95 ? ("#FF4B4B") : (externalTemp >= 85 ? ("#E82323") : (externalTemp >= 70 ? ("#CC23E8") : (externalTemp >= 55 ? ("#7923E8") : (externalTemp >= 40 ? ("#2336E8") : ("#23D0E8")))));

  const decrement = () => {
    console.log("Pressed Decrement " + desiredTemp);
    desiredTemp = desiredTemp - 1;
    console.log("Processed Decrement " + desiredTemp);
  }
  const increment = () => {
    console.log("Pressed Increment " + desiredTemp);
    desiredTemp = desiredTemp + 1;
    console.log("Processed Increment " + desiredTemp);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={(image)} resizeMode="cover" style={styles.background}>
        <View style={styles.branding}>
          <View style={{width: "5%"}}/>
          <Image source={require("./assets/Logo.png")} style={{height: "60%", width: "15%", resizeMethod: "scale", resizeMode: "contain",}} />
          <View style={{width: "12%"}}/>
          <TextInput style={{fontFamily: "SemiBold", fontSize: 50, textAlign: "center", color: "white", opacity: 1}} value={"Home"} />
          <View style={{width: "12%"}}/>
          <Image source={require("./assets/Profile.png")}  style={{height: "60%", width: "15%", resizeMethod: "scale", resizeMode: "contain",}} />
        </View>
        <View style={{backgroundColor: externalColor,height: "8%",flexDirection: "row", alignItems: "center",}}>
          <View style={{width: "5%"}}/>
          <Image source={require("./assets/Sunny.png")} style={styles.weather} />
          <TextInput style={{fontFamily: "Archivo", fontSize: 40, color: "white"}} value={externalTemp.toString() + "°F Outside"} />
        </View>
        <View style={{height: "20%"}}/>
          <TextInput style={{fontFamily: "ContrailOne", fontSize: 60, textAlign: "center", color: "black"}} value={"Currently:"} />
          <TextInput style={{fontFamily: "ContrailOne", fontSize: 42, textAlign: "center", color: "black"}} value={currentTemp.toString() + "°F"} />
          <TextInput style={{fontFamily: "ContrailOne", fontSize: 42, textAlign: "center", color: "black"}} value={process} />
          <TextInput style={{fontFamily: "ContrailOne", fontSize: 42, textAlign: "center", color: "black"}} value={desiredTemp.toString() + "°F"} />
        <View style={{height: "22%"}}/>
        <View style={{    backgroundColor: "white", height: "12%",flexDirection: "row", alignItems: "center", opacity: 0.75}}>
          <View style={{width: "10%"}}/>
          <Image source={require("./assets/Up.png")} style={styles.arrows} onPress={() => increment}/>
          <View style={{width: "10%"}}/>
          <TextInput style={{fontFamily: "Archivo", fontSize: 42, color: "black", opacity: 1}} value={desiredTemp.toString() + "°F"} />
          <View style={{width: "10%"}}/>
          <Image source={require("./assets/Down.png")} style={styles.arrows} onPress={() => decrement}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    height: 100,
    width: 100,
    resizeMethod: "scale",
    resizeMode: "contain",
  },
  weather: {
    height: "90%", 
    width: "20%", 
    resizeMethod: "scale", 
    resizeMode: "contain",
  },
  arrows: {
    height: "60%", 
    width: "20%", 
    resizeMethod: "scale", 
    resizeMode: "contain",
  },
  branding: {
    backgroundColor: "#444444",
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
  },
  middleText: {
    color: "black",
    fontSize: 32,
    textAlign: "center",
  }
});
