import { useSearchParams, Link } from "react-router-dom";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  SectionList,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
  Keyboard,
} from "react-native";

export function RoutesIndex({ route, navigation }) {
  const { data } = route.params;
  const routes = Object.values(data);
  console.log(routes);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const areaID = parseInt(searchParams.get("area_id"));

  // let unfiltered = props.routes;
  // let areaRoutes = [];
  // let i = 0;

  // while (i < unfiltered.length) {
  //   if (unfiltered[i].area_id === areaID) {
  //     areaRoutes.push(unfiltered[i]);
  //   }
  //   i++;
  // }

  return (
    <ScrollView>
      <Text>Routes</Text>

      {routes.map((route) => (
        <View style={{ flexDirection: "column", gap: 10 }} key={route.id}>
          <Text>{route.name}</Text>
          {/* <Image src={route.image_url} /> */}
          <Text>Grade: {route.grade}</Text>
          <Text>Beta: {route.beta}</Text>
          <Text>Protection: {route.protection}</Text>
          <Text>Location: {route.location}</Text>
          <Text>Discipline: {route.discipline}</Text>
          <Button
            title="Add ascent"
            onPress={() => {
              navigation.navigate("NewAscent");
            }}
          />
          <View />
          <View />
          <View />
          <View />
          <View />
          <View />
        </View>
      ))}
    </ScrollView>
  );
}
