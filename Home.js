import { ScrollView, SafeAreaView, View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { HOST_WITH_PORT } from "./Environment";

export function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Climb on!!</Text>
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      <Button
        title="View Areas"
        onPress={() => {
          navigation.navigate("Areas");
        }}
      />
    </SafeAreaView>
  );
}
