import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import RiddlesCard from './RiddlesCard'
import {FlatList} from 'react-native-gesture-handler'
let riddles=require('../riddle.json')


export default class RiddlesScreen extends Component{
  renderItem=({item:riddle})=>{
    return <RiddlesCard riddle={riddle} navigation={this.props.navigation}/>
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
            data={riddles}
            renderItem={this.renderItem}
      //      horizontal={true}
          />
        </View>
      </View>
    )
  }
}