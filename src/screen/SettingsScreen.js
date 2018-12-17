import React from 'react';
import { Button, View, Text } from 'react-native'

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Настройки</Text>
      </View>
    );
  }
}


export default SettingsScreen