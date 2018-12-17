import React from 'react';
import { View, Button, StyleSheet } from 'react-native'
import Modal from "react-native-modal";
import MessagesHeader from '../components/Messages/MessagesHeader';
import MessagesContent from '../components/Messages/MessagesContent';
import MessagesMenu from '../components/Messages/MessagesMenu';

class MessagesScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <MessagesHeader toggleModal={this.toggleModal} />
        <MessagesContent navigation={this.props.navigation} />
        <MessagesMenu isModalVisible={this.state.isModalVisible} onPress={() => this.setState({ isModalVisible: false })} navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FA8072',
  },
  header: {
    width: '100%',
    backgroundColor: '#1E90FF',
    padding: 10
  },
  content: {
    width: '100%'
  },
  menuIconImage: {
    width: 40,
    height: 40,
  },
  menuContainer: {
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#DDA0DD',
    width: '50%'
  }
});

export default MessagesScreen