import { HOST_WITH_PORT } from "./Environment";
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
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

export function AreasIndex({ route, navigation }) {
  const { data } = route.params;
  const areas = Object.values(data);
  console.log(areas);

  const [areaID, setAreaID] = useState([]);

  return (
    <View>
      <Text>All areas</Text>
      {areas.map((area) => (
        <View key={area.id}>
          <Text>Name: {area.name}</Text>
          {/* <Image source={area.image_url} /> */}
          <Text>Location: {area.location}</Text>
          <Text>Routes: {area.route_quantity}</Text>
          <Button
            title="View Routes"
            onPress={() => {
              navigation.navigate("Routes");
            }}
          />
        </View>
      ))}
    </View>
  );
}
