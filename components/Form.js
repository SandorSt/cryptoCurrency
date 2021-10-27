import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

export default function Form(props) {
  const { currency, crypto, setCurrency, setCrypto, setAskAPI } = props;

  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await axios.get(url);
      setCryptos(result.data.Data);
    };
    callAPI();
  }, []);

  const getCurrency = (currency) => {
    setCurrency(currency);
  };
  const getCrypto = (crypto) => {
    setCrypto(crypto);
  };
  const getRate = () => {
    if (currency.trim() === "" || crypto.trim() === "") {
      showAlert();
      return;
    }
    setAskAPI(true);
  };

  const showAlert = () => {
    Alert.alert("Error...", "Both fields are required", [{ text: "Ok" }]);
  };
  return (
    <>
      <View>
        <Text style={styles.label}>Currency</Text>
        <Picker
          selectedValue={currency}
          onValueChange={(currency) => getCurrency(currency)}
          itemStyle={{ height: 50 }}
        >
          <Picker.Item label="-Select Currency-" value="" />
          <Picker.Item label="US Dolar" value="USD" />
          <Picker.Item label="Argentine Peso" value="ARS" />
          <Picker.Item label="Mexican Peso" value="MXN" />
          <Picker.Item label="Euro" value="EUR" />
        </Picker>
        <Text style={styles.label}>Crypto</Text>
        <Picker
          selectedValue={crypto}
          onValueChange={(crypto) => getCrypto(crypto)}
          itemStyle={{ height: 50 }}
        >
          <Picker.Item label="-Select Currency-" value="" />
          {cryptos.map((crypto) => (
            <Picker.Item
              key={crypto.CoinInfo.Id}
              label={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Name}
            />
          ))}
        </Picker>
        <TouchableHighlight style={styles.rateBtn} onPress={() => getRate()}>
          <Text style={styles.rateText}>Get Rate</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 22,
    marginVertical: 20,
    textTransform: "uppercase",
  },
  rateBtn: {
    backgroundColor: "#5e49e2",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  rateText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
