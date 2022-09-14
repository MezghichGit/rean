import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,ActivityIndicator } from 'react-native';
import React, { useState } from "react";

function traitement(){
  console.log("Récuperattion de Data...");
}




export default function App() {

  const [titleText, setTitleText] = useState("React Native");

  const onPressTitle = () => {
    setTitleText("Mise à jour du text");
  };
  
  return (
    <View style={styles.container}>
      
      
          <Text style={styles.textStyle} onPress={onPressTitle}>{titleText}</Text>
    

      <Button
        title="Press me"
        onPress={traitement}
        color ='blue'
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'col',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  child1: {
    flex: 0.3,
    backgroundColor: '#68F74F',
    alignItems: 'center',
    justifyContent: 'center',
  }
,
child2: {
  flex: 0.4,
  backgroundColor: '#F7F44F',
  alignItems: 'center',
  justifyContent: 'center',
},
textStyle: {
  fontSize:20
}
});
