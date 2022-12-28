import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import FactsCard from './FactsCard'
import {FlatList} from 'react-native-gesture-handler'
let facts=require('../facts.json')


export default class RiddlesScreen extends Component{
  renderItem=({item:fact})=>{
    return <FactsCard fact={fact} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>index.toString()
  render(){
    return(
      <View style={{flex:5,backgroundColor: '#dcae96',}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
        <Image source={require('../assets/home.png')}
          style={{width:50,height:50,marginLeft:10,justifyContent:"left",marginTop:20}}
        />

        </TouchableOpacity>

        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={facts}
            renderItem={this.renderItem}
   //         horizontal={true}
          />
        </View>
      </View>
    )
  }
}
 