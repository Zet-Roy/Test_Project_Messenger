import React from 'react';
import { Button, View, Text } from 'react-native'

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Профиль</Text>
      </View>
    );
  }
}


export default ProfileScreen