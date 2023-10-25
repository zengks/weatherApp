import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <View>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={'red'}
        title="Increase the count"
        onPress={() => {
          setCount(count + 1)
          console.log(count)
        }}
      />
      <Button
        color={'green'}
        title="Decrease the count"
        onPress={() => setCount(count - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 20
  }
})
export default Counter
