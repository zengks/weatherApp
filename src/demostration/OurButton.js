import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const OurButton = () => {
  const handlePress = () => {
    console.log('Pressed')
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.buttonText}>Hello</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    padding: 5
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center'
  }
})
export default OurButton
