import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
export default class FactsCard extends Component{
  render(){
    return(
       <TouchableOpacity onPress={()=>{
       //    this.riddleAnswer()
            
           }}>
        
      <View style={styles.bg}>
      
      
      
        <View style={styles.button}>
          
     
   
           
          <Image
                source={{ uri: this.props.fact.img }}
                style={{ width: 200, height: 200,justifyContent: 'center',
                  alignSelf: 'center',borderRadius:40 }}
              />
          <Text style={{fontSize: 20,textAlign:"center",justifyContent:"center",alignItems:"center",alignSelf:"center" ,                fontFamily:"Impact",}}>{this.props.fact.fact}</Text>
     
            
        </View>

        

      
      </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  bg:{
    
    flex:1
  },
  button: {
    marginTop: 30,
    backgroundColor: '#932432',
    borderColor: '#283747',
    borderWidth: 5,
    marginBottom:20
  },
});
