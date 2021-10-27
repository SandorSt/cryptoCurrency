import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import Header from "./components/Header";
import Form from "./components/Form";
import Exchange from "./components/Exchange";

export default function App() {
  const [currency, setCurrency] = useState("");
  const [crypto, setCrypto] = useState("");
  const [askAPI, setAskAPI] = useState(false);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const rateCrypto = async () => {
      if (askAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
        const result = await axios.get(url);
        setLoading(true);

        setTimeout(() => {
          setResult(result.data.DISPLAY[crypto][currency]);
          setAskAPI(false);
          setLoading(false);
        }, 2000);
      }
    };
    rateCrypto();
  }, [askAPI]);

  const component = loading ? (
    <ActivityIndicator size="large" color="#5e49e2" />
  ) : (
    <Exchange result={result} />
  );

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          source={require("./assets/img/cryptomonedas.png")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Form
            currency={currency}
            crypto={crypto}
            setCurrency={setCurrency}
            setCrypto={setCrypto}
            setAskAPI={setAskAPI}
          />
        </View>
        <View style={{ marginTop: 20 }}>{component}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
  content: {
    marginHorizontal: "2.5%",
  },
});
