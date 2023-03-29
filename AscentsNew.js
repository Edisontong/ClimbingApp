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

export function AscentsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateAscent(params, () => event.target.reset());
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>New Ascent</Text>
      <KeyboardAvoidingView onSubmit={handleSubmit}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <TextInput placeholder="name" name="route_id" type="integer" />
            <TextInput placeholder="discipline" name="discipline" type="text" />
            <TextInput placeholder="grade" name="grade" type="text" />
            <TextInput placeholder="date" name="date" type="text" />
            <TextInput placeholder="attempts" name="attempts" type="integer" />
            <TextInput placeholder="beta" name="beta" type="text" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
