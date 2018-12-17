import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native'
import { InputContainerBorder } from '../../common_components/TextInputs';

class Registration extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Логин</Text>
        <InputContainerBorder placeholder={"ЛОГИН"} value={this.state.username} onChange={(text) => this.setState({ username: text })} />
        <Text>Emeil</Text>
        <InputContainerBorder placeholder={"EMAIL"} value={this.state.email} onChange={(text) => this.setState({ email: text })} />
        <Text>Пароль</Text>
        <InputContainerBorder placeholder={"ПАРОЛЬ"} value={this.state.password} onChange={(text) => this.setState({ password: text })} />
        <Button
          onPress={() => { this.props.navigation.navigate('Messages'); }}
          title="Зарегестрироватся"
          color="#4169E1"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});

export default Registration