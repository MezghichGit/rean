import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
 
const App = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [value, setValue] = useState("first");
  const [checkedReact, setCheckedReact] = useState(false);
  const [checkedReactNative, setCheckedReactNative] = useState(false);
 
  return (
<ScrollView style={{padding: "1em"}}>
<Image 
        style={styles.logo}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
        }}/>
<Text>Subscription form:</Text>
<View style={{marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
<Text style={styles.label}>Nom: </Text>
<TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
        />
</View>
<View style={{marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
<Text style={styles.label}>Email: </Text>
<TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
</View>
<View style={{marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
<Text style={styles.label}>Password: </Text>
<TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="numeric"
          textContentType={password}
          secureTextEntry={true}
        />
</View>
<RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
<View style={styles.radio}>
<RadioButton value="first" />
<Text>Pro</Text>
</View>
<View style={styles.radio}>
<RadioButton value="second" />
<Text>Student</Text>
</View>
</RadioButton.Group>
<Text>You like:</Text>
<View style={styles.checkbox}>
<Checkbox
          status={checkedReact ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReact(!checkedReact);
          }}
        />
<Text>React</Text>
</View>
<View style={styles.checkbox}>
<Checkbox
          status={checkedReactNative ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReactNative(!checkedReactNative);
          }}
        />
<Text>React Native</Text>
</View>
<View style={styles.button}>
<Button title="Register" />
</View>
</ScrollView>
  );
};
 
const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    margin: 'auto'
  },
  label: {
    flex: 0.1
  },
  input: {
    flex: 0.9,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 20
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center"
  },
  radio: {
    flexDirection: "row",
    alignItems: "center"
  }
});
 
export default App;