import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#3C1874' }}>
          <View style={{ flex: 0.15, flexDirection: 'row' }}>
            <View>
              <Image
                source={require('../assets/FunToon.png')}
                style={{ width: 75, height: 75 }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: '#F3F3F3',
                  fontSize: 70,
                  marginLeft: 10,
                  fontFamily: 'Mistral',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                🌎 🌎
              </Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Stories')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'ink free',
                }}>
                Stories
              </Text>
              <Image
                source={require('../assets/S1.jpg')}
                style={{
                  width: 140,
                  height: 85,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Facts')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'ink free',
                }}>
                Facts
              </Text>
              <Image
                source={require('../assets/facts.jpg')}
                style={{
                  width: 140,
                  height: 85,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Riddles')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'ink free',
                }}>
                Riddles
              </Text>
              <Image
                source={require('../assets/r1.jpg')}
                style={{
                  width: 140,
                  height: 85,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Hobbies')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'ink free',
                }}>
                What it says?
              </Text>
              <Image
                source={require('../assets/h1.jpg')}
                style={{
                  width: 140,
                  height: 85,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 30,
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 0.3,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#cd7f32',
    alignItems: 'center',
    borderColor: 'rgba(52, 52, 52, 0.8)',
    borderWidth: 5,
  },
});
