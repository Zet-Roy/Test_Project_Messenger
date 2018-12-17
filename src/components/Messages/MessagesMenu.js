import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import Modal from "react-native-modal";
import { ButtonTemplate } from '../../common_components/Buttons';

class MessagesMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                isVisible={this.props.isModalVisible}
                onBackdropPress={this.props.onPress}
                animationIn={"slideInLeft"}
                animationOut={"slideOutLeft"}
                style={{ margin: 0 }}
            >
                <View style={styles.menuContainer}>
                    <ButtonTemplate text={"Профиль"} style={[{ marginBottom: 20 }, styles.styleButton]} styleText={styles.styleText} onPress={() => {
                        this.props.onPress()
                        this.props.navigation.navigate('Profile');
                    }} />
                    <ButtonTemplate text={"Настройки"} style={[{ marginBottom: 20 }, styles.styleButton]} styleText={styles.styleText} onPress={() => {
                        this.props.onPress()
                        this.props.navigation.navigate('Settings');
                    }} />
                    <ButtonTemplate text={"Выход"} style={styles.styleButton} styleText={styles.styleText} onPress={() => {
                        this.props.onPress()
                        this.props.navigation.navigate('Auth');
                    }} />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#BDB76B',
        width: '50%',
        padding: 20
    },
    styleButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius:10,
        backgroundColor: '#FFA07A',
    },
    styleText: {
        fontSize: 18,
        color: 'black'
    }
});

export default MessagesMenu