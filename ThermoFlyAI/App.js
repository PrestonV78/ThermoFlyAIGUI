import * as React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ImageBackground, Platform, TextInput } from "react-native";
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Archivo: require('./assets/fonts/Archivo-Regular.ttf'),
    SemiBold: require('./assets/fonts/Archivo-SemiBold.ttf'),
    ContrailOne: require('./assets/fonts/ContrailOne-Regular.ttf'),
  });


  //Changing Variables
  let currentTemp = 69;
  let desiredTemp = 70;
  let externalTemp = 85;
  let image =  currentTemp < desiredTemp ? ("./assets/Heating.png") : (currentTemp > desiredTemp ? ("./assets/Cooling.png") : ("./assets/Holding.png"));
  let process =  currentTemp < desiredTemp ? ("Heating to") : (currentTemp > desiredTemp ? ("Cooling to") : ("Holding"));
  let externalColor = externalTemp >= 95 ? ("red") : (externalTemp >= 85 ? ("darkred") : (externalTemp >= 70 ? ("purple") : (externalTemp >= 55 ? ("darkorchid") : (externalTemp >= 40 ? ("blue") : ("powderblue")))));

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View style={styles.branding}>
        <Image source={("./assets/Logo.png")} style={styles.image} />
        <TextInput style={{fontFamily: "SemiBold", fontSize: 50, textAlign: "center", color: "white"}} value={"Home"} />
        <Image source={("./assets/Logo.png")} style={styles.image} />
      </View>
      <View style={{    backgroundColor: externalColor,height: "10%",flexDirection: "row",}}>
        <Image source={("./assets/Logo.png")} style={styles.weather} />
        <TextInput style={{fontFamily: "Archivo", fontSize: 42, color: "white"}} value={externalTemp.toString() + "°F Outside"} />
      </View>
      <View style={{height: "20%"}}/>
        <TextInput style={{fontFamily: "ContrailOne", fontSize: 60, textAlign: "center", color: "black"}} value={"Currently:"} />
        <TextInput style={{fontFamily: "ContrailOne", fontSize: 42, textAlign: "center", color: "black"}} value={currentTemp.toString() + "°F"} />
        <TextInput style={{fontFamily: "ContrailOne", fontSize: 42, textAlign: "center", color: "black"}} value={process} />
        <TextInput style={{fontFamily: "ContrailOne", fontSize: 42, textAlign: "center", color: "black"}} value={desiredTemp.toString() + "°F"} />
      <View style={{height: "20%"}}/>
      <View style={{    backgroundColor: "white", height: "10%",flexDirection: "row",}}>
        <Image source={("./assets/Logo.png")} style={styles.arrows} />
        <TextInput style={{fontFamily: "SemiBold", fontSize: 42, color: "black"}} value={desiredTemp.toString() + "°F"} />
        <Image source={("./assets/Logo.png")} style={styles.arrows} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  },
  image: {
    height: 100,
    width: "33%",
  },
  weather: {
    height: 100,
    width: 100,
  },
  arrows: {
    height: 100,
    width: 100,
  },
  branding: {
    backgroundColor: "grey",
    height: "10%",
    flexDirection: "row",
  },
  external: {

  },
  middleText: {
    color: "black",
    fontSize: 32,
    textAlign: "center",
  }
});
