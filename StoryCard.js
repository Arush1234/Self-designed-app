import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class StoryCard extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('StoryScreen', {
              story: this.props.story,
            })
          }
          style={styles.button}>
          <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              {this.props.story.title}
            </Text>
            <Image
              source={{ uri: this.props.story.img }}
              style={{
                width: 140,
                height: 140,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 40,
              }}
            />
            <Text style={{ textAlign: 'center' }}>
              Author: {this.props.story.author}
            </Text>
            <Text style={{ textAlign: 'center' }}>
              {this.props.story.description}
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
    flex: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 70,
    borderRadius: 30,
    backgroundColor: 'silver',
    alignItems: 'center',
    borderColor: '#283747',
    borderWidth: 4.3,
  },
});
