import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Pressable, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ToggleSwitch from 'toggle-switch-react-native'

const { width, height } = Dimensions.get('screen');
const image = require("../assets/images/mobile-ui-design.png");
const yoga = require("../assets/images/yoga-position.png");
const moon = require("../assets/images/moon.png");

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [isOn, setIsOn] = useState(false)
  const [selected, setSelected] = useState(false);

  return (
    
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.titleTop}>Good Night</Text>
          <Text style={styles.date}>28 february 2020</Text>
          <ToggleSwitch
            isOn={isOn}
            onColor="green"
            offColor="green"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="large"
            onToggle={isOn => console.log("changed to : ", setIsOn(true))}
            style={{marginTop:40, paddingBottom:20}}
          />
          <View style={styles.subTitle}>
            <Text style={{color:"white", fontSize:23,marginBottom:10}}>Programmation</Text>
            <Pressable style={{ 
                  backgroundColor: selected ? "#354969" : "#026dbb",
                  
                  justifyContent: 'space-between',
                  paddingVertical: 15,
                  paddingLeft:15,
                  borderBottomLeftRadius: 15,
                  borderTopLeftRadius: 15,
                  elevation: 3,
                  width:85,
                  position:"absolute",
                  top:280,
                  left:300,
                  zIndex:9}} 
                  onPress={() => setSelected(!selected)}>
              <Text style={styles.text}>+</Text>
            </Pressable>
          </View>
          <View style={styles.meditation}>
            <View style={{backgroundColor:"transparent", width:300, flexDirection:"row"}}>
              <View style={styles.icon}>
                <ImageBackground source={yoga} resizeMode="cover" style={styles.mediIcon}></ImageBackground>
                <View style={{borderRadius:100, width:13,height:13,left:35,top:0,backgroundColor:"#60b967",position:"absolute"}}><Text></Text></View>
              </View>
              <View style={{backgroundColor:"transparent"}}>
                <Text style={{color:"white", fontSize:17}}>Meditation zen</Text>
                <Text style={{color:"white", fontSize:13}}>In progress</Text>
              </View>
            </View>
            <Text style={{color:"white", alignSelf:"flex-end", fontSize:13}}>10:00 pm</Text>
          </View>

          <View style={styles.bedtime}>
            <View style={{backgroundColor:"transparent", width:300, flexDirection:"row"}}>
              <View style={styles.icon}>
                <ImageBackground source={moon} resizeMode="cover" style={styles.bedIcon}></ImageBackground>
              </View>
              <View style={{backgroundColor:"transparent"}}>
                <Text style={{color:"white", fontSize:17}}>Bedtime</Text>
                <Text style={{color:"white", fontSize:13}}>To Do</Text>
              </View>
            </View>
            <Text style={{color:"white", alignSelf:"flex-end", fontSize:13}}>11:00 pm</Text>
          </View>
          
          

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    margin:0,
    borderRadius:100,

  },
  content: {
    flex:1,
    backgroundColor:"transparent",
    width:width,
    paddingHorizontal:40
  },
  titleTop:{
    backgroundColor:"transparent", 
    color:"white", 
    fontSize:33,
    marginBottom:16,
    marginTop:50
  },
  date:{
    fontSize:17,
    color:"white",
    
  },
  subTitle:{
    backgroundColor:"transparent",
    paddingTop:270,
    fontSize:30,
    position:"relative"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    marginBottom:"auto",
    marginTop:"auto",
    marginLeft:"auto",
    marginRight:10,
    marginVertical:30,
    width:"100%",
    height:800
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  meditation:{
    backgroundColor:"transparent",
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  bedtime:{
    backgroundColor:"transparent",
    marginTop:35,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  bedIcon:{
    width:"75%",
    height:"75%",
    marginBottom:"auto",
    marginTop:10,
    marginLeft:12,
    marginRight:"auto"
  },
  mediIcon:{
    width:"75%",
    height:"75%",
    marginBottom:"auto",
    marginTop:"auto",
    marginLeft:10,
    marginRight:"auto"
  },
  icon:{
    width:50,
    height:50,
    borderRadius:100,
    marginRight:20,
    position:"relative",
    backgroundColor:"#0560a6",
    justifyContent:"center",
    alignItems:"center"
  }
});
