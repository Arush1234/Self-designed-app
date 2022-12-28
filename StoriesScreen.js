import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import StoryCard from './StoryCard'
import {FlatList} from 'react-native-gesture-handler'
let stories=require('../stories.json')


export default class StoriesScreen extends Component{
  renderItem=({item:story})=>{
    return <StoryCard story={story} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>index.toString()
  render(){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor: '#3C1874',}}>
       <View style={{ flex: 0.15, flexDirection: 'row', marginTop: '-30'}}>
            <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
             <Image
                source={require('../assets/FunToon.png')}
                style={{ width: 75, height: 75,borderRadius:100}}
                
                
              />
            </TouchableOpacity>
             
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
                Stories
              </Text>
            </View>
          </View>
        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={stories}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}