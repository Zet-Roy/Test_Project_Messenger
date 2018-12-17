import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

export const ButtonTemplate = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={props.style}
    >
        <Text style={props.styleText}>
            {props.text ? props.text: ''}
        </Text>
    </TouchableOpacity>
)