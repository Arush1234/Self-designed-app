import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
export default class HobbiesCard extends Component {
  
  render() {
    return (
      <View style={styles.bg}>
      <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('HobbyScreen', {
              hobby: this.props.hobby,
            })
          }
          style={styles.button}>
        <View>

          <Image
            source={{ uri: this.props.hobby.img }}
            style={{
              width: 250,
              height: 200,
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 40,
            }}
          />

          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              fontFamily: 'Impact',
            }}>
            {this.props.hobby.name}
          </Text>
        </View>
      </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  button: {
    // flex: 0.3,
    //  marginLeft: 50,
    //  marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: 'green',
    //  alignItems: 'center',
    borderColor: '#283747',
    borderWidth: 5,
    marginBottom: 20,
    //  height: 550,
    //       width: 300,
  },
});
