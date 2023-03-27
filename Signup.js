import axios from "axios";
import { useState } from "react";
import { Text, TextInput, Button, View, ScrollView, FlatList, SectionList, Alert } from "react-native";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Contnet-Type": "application/json" },
      body: JSON.stringify({ postName: "React updates " }),
    };
    const postSignup = async () => {
      try {
        await fetch("http://localhost:3000/users.json", requestOptions).then((response) => {
          response.json().then((data) => {
            Alert.alert("Post created at : ", data.createdAt);
          });
        });
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <ScrollView id="signup">
        <Text>Signup</Text>
        <FlatList>
          {errors.map((error) => (
            <SectionList key={error}>{error}</SectionList>
          ))}
        </FlatList>
        <View onSubmit={handleSubmit}>
          <Text>
            Name: <TextInput name="name" type="text" />
          </Text>
          <Text>
            Email: <TextInput name="email" type="email" />
          </Text>
          <Text>
            Password: <TextInput name="password" type="password" />
          </Text>
          <Text>
            Password confirmation: <TextInput name="password_confirmation" type="password" />
          </Text>
          <Button type="submit">Signup</Button>
        </View>
      </ScrollView>
    );
  };

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

  // return (
  //   <ScrollView id="signup">
  //     <Text>Signup</Text>
  //     <FlatList>
  //       {errors.map((error) => (
  //         <SectionList key={error}>{error}</SectionList>
  //       ))}
  //     </FlatList>
  //     <View onSubmit={handleSubmit}>
  //       <Text>
  //         Name: <TextInput name="name" type="text" />
  //       </Text>
  //       <Text>
  //         Email: <TextInput name="email" type="email" />
  //       </Text>
  //       <Text>
  //         Password: <TextInput name="password" type="password" />
  //       </Text>
  //       <Text>
  //         Password confirmation: <TextInput name="password_confirmation" type="password" />
  //       </Text>
  //       <Button type="submit">Signup</Button>
  //     </View>
  //   </ScrollView>
  // );
}
