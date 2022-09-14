import { Component} from 'react';
import { ScrollView ,TextInput, Text, View, Button } from 'react-native';
 
export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  _handlePress() {
     console.log(this.state.username);
     console.log(this.state.password);
  }

  render() {
    return (
    <ScrollView >
      <View >
        <Text>
          Create Account
        </Text>

        <Text >
          Votre nom
        </Text>

        <TextInput
          
          placeholder=""
          onChangeText={(text) => this.setState({username:text})}
        />
        <Text >
          Votre password
        </Text>

        <TextInput
          placeholder=""
          onChangeText={(text) => this.setState({password:text})}
        />

        <Button onPress={() => this._handlePress()} color='red' title="Connexion">
        </Button>
        </View>
      </ScrollView>
    );
  }
}