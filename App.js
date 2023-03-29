import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { HOST_WITH_PORT } from "./Environment";

import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { AreasIndex } from "./AreasIndex";
import { RoutesIndex } from "./RoutesIndex";
import { AscentsNew } from "./AscentsNew";

function App() {
  const [areas, setAreas] = useState([]);
  const [routes, setRoutes] = useState([]);

  const handleIndexAreas = () => {
    fetch(`${HOST_WITH_PORT}/areas.json`)
      .then((response) => response.json())
      .then((json) => {
        setAreas(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleIndexRoutes = () => {
    console.log("ROUTES");
    fetch(`${HOST_WITH_PORT}/routes.json`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log("all routes");
        setRoutes(json);
        console.log(routes);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(handleIndexRoutes, []);
  useEffect(handleIndexAreas, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Areas" component={AreasIndex} initialParams={{ data: areas }} />
        <Stack.Screen name="Routes" component={RoutesIndex} initialParams={{ data: routes }} />
        <Stack.Screen name="NewAscent" component={AscentsNew} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
