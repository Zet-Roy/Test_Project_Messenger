import React from 'react';
import { FlatList, Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

class MessagesContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { id: 1, name: "Вася" },
                { id: 2, name: "Петя" },
                { id: 3, name: "Оля" },
                { id: 4, name: "Катя" }
            ]
        }
    }

    _getComponentProgram({ item }) {
        return (
            <TouchableOpacity style={{}} onPress={() => { this.props.navigation.navigate('Dialogue') }}>
                <View style={styles.wrapper}>
                    <View>
                        <Image
                            resizeMode='contain'
                            style={styles.avatar}
                            source={require('../../images/smile.png')} />
                    </View>
                    <View style={styles.wrapName}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _renderSeparator = () => (
        <View style={styles.separatorItems}>
        </View>
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <ScrollView style={styles.content}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._renderSeparator}
                    renderItem={this._getComponentProgram.bind(this)}
                    containerStyle={{}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        width: '100%'
    },
    separatorItems: {
        height: 2,
        backgroundColor: 'black',
    },
    wrapper: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#87CEEB',
    },
    avatar: {
        width: 40,
        height: 40
    },
    wrapName: {
        width: '100%',
        paddingLeft: 100,
    },
    name: {
        fontSize: 17,
        color: 'black'
    }
});

export default MessagesContent