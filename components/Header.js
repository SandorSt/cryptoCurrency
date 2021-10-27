import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function Header() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });
  return (
    <>
      <Text style={styles.header}>CriptoCurrency</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "ios" ? 50 : 10,
    fontFamily: "Montserrat_400Regular",
    backgroundColor: "#5E49E2",
    paddingBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    color: "#fff",
    marginBottom: 30,
  },
});
