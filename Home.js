import { ScrollView, SafeAreaView, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Climb on!!</Text>
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </SafeAreaView>
  );
}
