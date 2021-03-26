import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import Task from './task'

const App = () => {

  const [value, setvalue] = useState('')
  const [todos, settodos] = useState([])

  const handleAddTodo = () => {
    if (value.length > 0) {
      settodos([...todos, { text: value, key: Date.now(), checked: false }])
      setvalue('')
    }

  }

  return (
    <View>
      <TextInput
        style={styles.textInput}
        multiline={true}
        onChangeText={(value) => setvalue(value)}
        placeholder={'Do it now!'}
        placeholderTextColor="white"
        value={value}
      />
      <TouchableOpacity
        onPress={() => handleAddTodo()}
        style={styles.button}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <ScrollView style={{ width: '100%' }}>
        {todos.map((task) => (
          <Task
            text={task.text}
            key={task.key}
          />
        ))
        }
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 25,
    color: '#08cf3d',
    backgroundColor: '#4545ff'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})

export default App