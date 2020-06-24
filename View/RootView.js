import React, {Component} from 'react';
import{AppRegistry,StyleSheet,View,Text,Dimensions,Image,TouchableHighlight} from 'react-native';
import NumButton from './NumButton';
export default class RootView extends Component{
    isDollarToNTD=true;
        exchange(isDollar){
            if(!isDollar){
                this.setState({topText:"NTD", bottomText:"US dollars",});
            }else{
                this.setState({topText:"US dollars", bottomText:"NTD",});
            }
            this.isDollarToNTD = !this.isDollarToNTD;
        }
    inputNum(num){
        let str= this.state.dollar.slice(0,-1);
        if(this.isDollarToNTD){
            this.setState({dollar:Number(str+num) +' $'});
        }else{
            this.setState({dollar:Number(str+num) + "NTD"});
        }
    }
    clear(){
        if(this.isDollarToNTD){
            this.setState({dollar:'0$', NTD:'0 NTD'});
        }else{
            this.setState({dollar:'0 NTD', NTD:'0$'});
        }
    }
    delete(){
        let str = this.state.dollar.slice(0.-1);
        if(str.length === 1){
            if(this.isDollarToNTD){
                this.setState({dollar:'0 $'});
            }else{
                this.setState({dollar:'0 NTD'});
            }
        }else{
            if(this.isDollarToNTD){
                this.setState({dollar:str.substring(0,str.length-1) + '$'});
            }else{
                this.setState({dollar:str.substring(0,str.length-1) + 'NTD'});
            }
        }
    }
    add(){
        let str = this.state.dollar.slice(0.-1);
        if(this.isDollarToNTD){
            this.setState({dollar:Number(str)+1+'$'});
        }else{
            this.setState({dollar:Number(str)+1+'NTD'});
        }
    }
    cal(){
        let str = this.state.dollar.slice(0.-1);
        if(this.isDollarToNTD){
            this.setState({NTD:(Number(str)*30).toFixed(2)+'NTD'});
        }else{
            this.setState({NTD:(Number(str)/30).toFixed(2)+'NTD'});
        }
    }
    sub(){
        let str = this.state.dollar.slice(0.-1);
        if(str==='0'){
            return;
        }
        if(this.isDollarToNTD){
            this.setState({dollar:Number(str)-1+'$'});
        }else{
            this.setState({dollar:Number(str)-1+'NTD'});
        }
    }
    inputDot(){
         let str = this.state.dollar.slice(0.-1);
         if(str.indexOf('.')!==-1){
            return;
         }
         if(this.isDollarToNTD){
            this.setState({dollar:str+".$"});
         }else{
            this.setState({dollar:str+'.NTD'})
         }

    }


    constructor(props){
        super(props);
        this.state={
            topText:"US dollars",
            bottomText:"NTD",
            dollar:"123$",
            NTD:"3690NTD",
            screenStyle:rootStyle,
        };
        let _this = this;
        var array = new Array();
        var titles = ['1','2','3','delete','4','5','6','0','7','8','9','.','C','-','+','=']
        for(var i=0;i<16;i++){
            let element;
            if(i==3){
                element = (<NumButton key={i} style={{flex:1, alignSelf:'stretch'}} source='./del.png' model='image' title={titles[i]}/>);
            }else if(i==12 || i==15){
                element = (<NumButton key={i} style={{flex:1, alignSelf:'stretch', backgroundColor:'rgb(234,86,37)'}} title={titles[i]} model="text" />);
            }else{
                element = (<NumButton key={i} style={{flex:1, alignSelf:'stretch'}} title={titles[i]} model="text" />);
            }
            array.push(element);
        }
        this.numButton = array;
    if(i==3){
        element=(<NumButton controller={this.props.controller} key={i} style={{flex:1, alignSelf:'stretch'}} title={titles[i]}source="./list.png" model="text"/>);
        element=(<NumButton controller={this.props.controller} key={i} style={{flex:1, alignSelf:'stretch', backgroundColor:'rgb(234,86,37)'}} title={titles[i]}source="./list.png" model="text"/>);
    }else{
        (<NumButton controller={this.props.controller} key={i} style={{flex:1, alignSelf:'stretch'}} title={titles[i]}source="./list.png" model="text"/>);
    }
    }


    render(){
        return(
            <View style={this.state.screenStyle.rootView} onLayout={this._onlayout}>
                <View style={this.state.screenStyle.screenView}>
                    <Text style={this.state.screenStyle.titleText}> {this.state.topText} </Text>
                    <Text style={this.state.screenStyle.numText}> {this.state.dollar} </Text>
                    <View style={this.state.screenStyle.changeView}>
                        <TouchableHighlight underlayColor="rgb(234,86,37)" onPress={()=>{this.props.controller.change()}}>
                            <Image style={this.state.screenStyle.touchView} source={require("./list.png")}/>
                        </TouchableHighlight>
                        <View style={this.state.screenStyle.lineView}/>
                    </View>

                    <Text style={this.state.screenStyle.titleText}> {this.state.bottomText} </Text>
                    <Text style={this.state.screenStyle.numText}> {this.state.NTD} </Text>
                </View>
                <View style={this.state.screenStyle.keyboardView}>
                    <View style={this.state.screenStyle.rowView}>
                        {this.numButton.slice(0,4)}</View>
                    <View style={this.state.screenStyle.rowView}>{this.numButton.slice(4,8)}</View>
                    <View style={this.state.screenStyle.rowView}>{this.numButton.slice(12,16)}</View>
                </View>
            </View>
        );
    }
    _onlayout=()=>{
        let {width,height} = Dimensions.get('window');
        if (width>height){
            this.setState({
                screenStyle:rootStyle2,
            });
        } else{
            this.setState({
                screenStyle:rootStyle,
            });
        }
    }
    change=()=>{
              if (this.refs.rootView.isDollarToNTD){
                  this.refs.rootView.exchange(false);
                     }else{
                         this.refs.rootView.exchange(true);
                     }
                   }
            click=(title)=>{
              if(title==='0' || title ==='1' || title==='2' || title==='3' || title==='4' || title==='5' || title==='6'|| title==='7'|| title==='8'|| title==='9'){
                         this.refs.rootView.inputNum(title);
                     }else if(title==='.'){
                         this.refs.rootView.inputDot();
                     }else if(title==='delete'){
                         this.refs.rootView.delete();
                     }else if(title==="C"){
                         this.refs.rootView.clear();
                     }else if(title==='+'){
                         this.refs.rootView.add();
                     }else if(title==='-'){
                         this.refs.rootView.sub();
                     }else if(title==='='){
                         this.refs.rootView.cal();
                     }

                   }

}

 var rootStyle = StyleSheet.create({
    rootView:{flex:1},
    screenView:{
        backgroundColor:'rgb(234,86,37)',
        flex:1,
        paddingTop:22
    },
    keyboardView:{
        backgroundColor:'rgb(38,41,42)',
        flex:2
    },
    titleText:{
        textAlign:'right',
        fontSize:27,
        color:'white',
        marginRight:20
    },
    numText:{
        textAlign:'right',
        fontSize:27,
        color:'white',
        marginRight:20,
        marginTop:10
    },
    touchView:{width:18,height:18,marginTop:1,marginLeft:70},
    changeView:{flexDirection:'row'},
    lineView:{backgroundColor:'white',height:1, flex:1,marginTop:9,marginLeft:20},
    rowView:{flexDirection:'row',flex:1},
    numberButtonStyle:{flex:1},

});

let rootStyle2 = StyleSheet.create({
    rootView:{flex:1},
    screenView:{backgroundColor:"rgb(234,86,37)", flex:1, paddingTop:10},
    keyboardView:{backgroundColor:'rgb(38,41,42)', flex:2},
    titleText:{textAlign:'right', fontSize:14, color:'white', marginRight:20, marginTop:2},
    changeView:{flexDirection:'row'},
    numText:{textAlign:'right', fontSize:22, color:'white', marginRight:20, marginTop:2},
    touchView:{width:18, height:18, marginTop:1, marginLeft:300},
    lineView:{backgroundColor:'white', height:1, flex:1, marginTop:9, marginLeft:20}
});