import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import HobbiesCard from './HobbiesCard'
import {FlatList} from 'react-native-gesture-handler'
let hobbies=require('../hobbies.json')


export default class HobbiesScreen extends Component{
  renderItem=({item:hobby})=>{
    return <HobbiesCard hobby={hobby} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>index.toString()
  render(){
    return(
      <View style={{flex:5,backgroundColor: '#3C1874',}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
        <Image source={require('../assets/home.png')}
          style={{width:50,height:50,marginLeft:10,justifyContent:"left",marginTop:20}}
        />

        </TouchableOpacity>

        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={hobbies}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}