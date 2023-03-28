import { ScrollView, View, Text, Button } from "react-native";
import { Routes, Route } from "react-router-dom";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./Home";
import { Signup } from "./Signup";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return <Button title="Go to Jane's profile" onPress={() => navigation.navigate("Profile", { name: "Jane" })} />;
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export function Content() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome" }} />
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
