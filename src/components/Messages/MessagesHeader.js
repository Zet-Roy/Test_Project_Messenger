import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'

class MessagesHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.toggleModal}
                    style={{}}>
                    <Image
                        resizeMode='contain'
                        style={styles.menuIconImage}
                        source={require('../../images/menu.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1E90FF',
        padding: 10
    },
});

export default MessagesHeader