import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const Task = (props) => {

    return (
        <View>
            <TouchableOpacity onPress={() => props.setChecked()}>
                <Icon
                    name={props.checked ? "check" : "square"}
                    size={30}
                    color="#900"
                    style={{ marginLeft: 15 }}
                />
            </TouchableOpacity>
            <Text>
                {props.text}
            </Text>
            <Icon
                name="trash-2"
                size={30}
                color="#900"
                style={{ marginLeft: 'auto' }}
                onPress={props.delete}
            />
        </View>
    )
}

export default Task