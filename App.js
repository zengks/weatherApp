import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import { ActivityIndicator } from 'react-native'
import ErrorItem from './src/components/ErrorItem'

// import OurButton from './src/demostration/OurButton'

const App = () => {
  const [loading, errorMsg, weather] = useGetWeather()
  console.log(loading, errorMsg, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {/* <OurButton /> */}
      {errorMsg ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
