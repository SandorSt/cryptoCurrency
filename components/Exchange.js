import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Exchange(props) {
  const { result } = props;

  if (Object.keys(result).length === 0) return null;
  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Highest price today: <Text style={styles.span}>{result.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Lowest price today: <Text style={styles.span}>{result.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Last 24 hours variation:{" "}
        <Text style={styles.span}>{result.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.text}>
        Last update: <Text style={styles.span}>{result.LASTUPDATE}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    backgroundColor: "#5e49e2",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    marginBottom: 10,
  },
  price: { fontSize: 38 },
  span: {
    fontFamily: "Montserrat_400Regular",
  },
});
