import React, {Component} from 'react';
import{StyleSheet,Text,Image,TouchableHighlight, View} from 'react-native';
export default class NumButton extends Component{
    render(){
        if(this.props.model==="text"){
            return(
                <TouchableHighlight style={[this.props.style, {flexDirection:'row'}]} onPress={()=>{this.props.controller.click(this.props.title);}}>
                    <Text style={{textAlign:'center',flex:1, alignSelf:'center', color:'white', fontSize:22}}>
                    {this.props.title}
                    </Text>
                </TouchableHighlight>
            );
        }else{
        return(
            <TouchableHighlight style={[this.props.style, {flexDirection:'row'}]} onPress={()=>{this.props.controller.click(this.props.title);}}>
                <View style={{alignSelf:'center', flex:1}}>
                    <Image style={{alignSelf:'center', width:200, height:200}} source={require('./del.png')}/>
                </View>
            </TouchableHighlight>
        );
        }
    }
}