import React from 'react';
import { ImageBackground,StyleSheet,View ,Text,Image} from 'react-native';
import colors from '../config/colors';
import AppButtons from './component/AppButtons';
import AppText from './component/AppText';
function welcomeScreen(props) {  
    return (
        <ImageBackground blurRadius={6} style={styles.background} source={require('../background.jpeg')}>
            <View style={styles.logocontainer}>
            <Image style={styles.logo}  source={require('../1.png')}/>
            <AppText style={styles.tagline}>Just ART it</AppText>
            </View>
            <View style={styles.buttonsContainer}>
        <AppButtons title="Login" />
        <AppButtons title="Register" color="secondary" />
         </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        alignContent:'center'
      },
   
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
      borderWidth:1,
      borderColor:'black',
      marginTop:30,
      borderRadius:50,
    width: 100,
    height: 100,
  },
  logocontainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
    
})

export default welcomeScreen;