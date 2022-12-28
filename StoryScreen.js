import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import * as Speech from 'expo-speech';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class StoryCard extends Component {
  constructor() {
    super();
    this.state = {
      speakerColor: 'red',
      speakerIcon: 'volume-high-outline',
    };
  }
  async storySpeech(title, author, story) {
    const currentColor = this.state.speakerColor;
    this.setState({
      speakerColor: currentColor === 'orange' ? '#ee8249' : 'orange',
    });
    if (currentColor === 'orange') {
      Speech.speak(`${title} by ${author} story${story}`);
  //    Speech.maxSpeechInputLength
   //   Speech.speak(story);
    } else {
      Speech.stop();
    }
  }
  render() {
    return (
      <View>
        <View style={styles.button}>
          <View style={{ flex: 0.15, flexDirection: 'row', marginTop: '-30' }}>
            <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
              <Image
                source={require('../assets/FunToon.png')}
                style={{ width: 75, height: 75 }}
              />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.titletext}>Stories</Text>
            </View>
          </View>
          <View style={styles.storyContainer}>
            <ScrollView>
              <Image
                source={{uri: this.props.route.params.story.img}}
                style={styles.img}
              />
              <View style={styles.titleContainer}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {this.props.route.params.story.title}
                </Text>
                <Text style={{ textAlign: 'center' }}>
                  {this.props.route.params.story.author}
                </Text>
                <View style={styles.iconContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.storySpeech(
                        this.props.route.params.story.title,
                        this.props.route.params.story.author,
                        this.props.route.params.story.story
                      )
                    }>
                    <Ionicons
                      name={this.state.speakerIcon}
                      size={RFValue(70)}
                      color={this.state.speakerColor}
                      style={{ margin: RFValue(15) }}
                      alignSelf="center"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={{ textAlign: 'center' }}>
                  {this.props.route.params.story.story}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titletext: {
    color: 'black',
    fontSize: 70,
    marginLeft: 10,
    fontFamily: 'Mistral',
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'teal',
    alignItems: 'center',
    borderColor: '#283747',
    borderWidth: 5,
  },
  img: {
    width: '90%',
    height: 200,
    borderRadius:'100%',
    alignSelf:"center"
  },
  storyContainer:{
    flex:1
  },
  titleContainer:{
    flexDirection:'column',
    padding:RFValue(20),
  },
  iconContainer:{
    flex:0.2
  }
});