import React from 'react';
import { View, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native'
import Authorization from '../components/Auth/Authorization';
import Registration from '../components/Auth/Registration';
import { ButtonTemplate } from '../common_components/Buttons';

class AuthScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
      paddingTopValue: 150
    }
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShowSub.bind(this));
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHideSub.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  keyboardDidShowSub = () => {
    this.setState({
      paddingTopValue: 10
    });
  };

  keyboardDidHideSub = () => {
    this.setState({
      paddingTopValue: 150
    });
  };

  returnContent() {
    if (this.state.toggle) {
      return (<Registration navigation={this.props.navigation} />)
    } else {
      return (<Authorization navigation={this.props.navigation} />)
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={[{ paddingTop: this.state.paddingTopValue }, styles.container]}>
        <View style={styles.wrap}>
          <View style={styles.wrapButton}>
            <ButtonTemplate text={"Регистрация".toLocaleUpperCase() } style={[{ marginRight: 10 }, styles.styleButton]} onPress={() => this.setState({ toggle: true })} />
            <ButtonTemplate text={"Войти".toLocaleUpperCase() } style={[{ marginLeft: 10 }, styles.styleButton]} onPress={() => this.setState({ toggle: false })} />
          </View>
          <View>
            {this.returnContent()}
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFDEAD'
  },
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapButton: {
    flexDirection: 'row',
    margin: 10
  },
  styleButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default AuthScreen