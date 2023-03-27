import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
