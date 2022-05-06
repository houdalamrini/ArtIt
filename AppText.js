import React from 'react';
import { Text ,Platform} from 'react-native'

function AppText(props) {
    return (
        <Text style={{
            justifyContent:'center',
            width:115,
            textShadowColor:'black',
            elevation:20,
            TextShadowOpacity:1,
            textShadowRadius:10,
            fontSize:19,
            fontWeight:'bold',
            position:'absolute',
            fontFamily: Platform.OS==="android" ? "serif" : "cambria",
            color:'black'
        }}>{props.children} 
        </Text>
    );
}

export default AppText;