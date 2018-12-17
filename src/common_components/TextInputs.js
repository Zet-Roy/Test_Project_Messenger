import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

export const InputContainerBorder = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder={props.placeholder}
            value={props.username}
            onChangeText={props.onChange}
        />
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 2,
        marginBottom: 10
    },
    textInput: {
        fontSize: 20,
        width: 250
    }
});