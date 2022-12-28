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
              <Text style={styles.titletext}>Funtoon</Text>
            </View>
          </View>
          <View style={styles.storyContainer}>
            <ScrollView>
              <Image
                source={{uri: this.props.route.params.hobby.img}}
                style={styles.img}
              />
              <View style={styles.titleContainer}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {this.props.route.params.hobby.name}
                </Text>
                
              </View>
              <View>
                <Text style={{ textAlign: 'center' }}>
                  {this.props.route.params.hobby.description}
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
    color: '#F3F3F3',
    fontSize: 70,
    marginLeft: 10,
    fontFamily: 'Mistral',
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#932432',
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
