import { useState, useEffect } from "react";
import { HOST_WITH_PORT } from "./Environment";
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

export function Signup({ navigation }) {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [passwordConfirmation, setPasswordConfirmation] = useState([]);

  const navigating = () => {
    navigation.navigate("Home");
  };

  const handleSubmit = () => {
    fetch(`${HOST_WITH_PORT}/users.json`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, passwordConfirmation }),
    });
  };

  const getResponseFromApi = async () => {
    try {
      let response = await fetch("http://localhost:3000/users.json");
      let json = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Signup</Text>
      {/* <FlatList>
        {errors.map((error) => (
          <SectionList key={error}>{error}</SectionList>
        ))}
      </FlatList> */}
      <KeyboardAvoidingView onSubmit={handleSubmit}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <TextInput placeholder="Name" style={styles.input} onChangeText={setName} value={name} />
            <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} value={email} />
            <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} value={password} />
            <TextInput
              placeholder="Password confirmation"
              style={styles.input}
              onChangeText={setPasswordConfirmation}
              value={passwordConfirmation}
            />
            <Button
              style={styles.btnContainer}
              title="Signup"
              color="#007AFF"
              onPress={() => {
                handleSubmit();
                navigating();
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
// const handleSubmit = (event) => {
//   event.preventDefault();
//   setErrors([]);
//   const params = new FormData(event.target);
//   axios
//     .post("http://localhost:3000/users.json", params)
//     .then((response) => {
//       console.log(response.data);
//       event.target.reset();
//       window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
//     })
//     .catch((error) => {
//       console.log(error.response.data.errors);
//       setErrors(error.response.data.errors);
//     });
// };
