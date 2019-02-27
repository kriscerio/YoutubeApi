import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.containerStyle}>
      {/* <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg'}} 
        style={styles.imageContainerStyle} /> */}
      <Text> textInComponent </Text>
    </View>
  )
}

const styles = {
  containerStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  imageContainerStyle: {
    height: 30,
    width: 50
  }
}

export default Header
