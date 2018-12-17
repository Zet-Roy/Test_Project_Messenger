import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
      super(props);
      this._bootstrapAsync();
    }
  
    _bootstrapAsync = async () => {
      //const userToken = await AsyncStorage.getItem('userToken');
      let userToken = "123456";
      userToken = null;

      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}

export default AuthLoadingScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});