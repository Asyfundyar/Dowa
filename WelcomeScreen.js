import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    View, 
    Image, 
    SafeAreaView, 
    Button, 
    Dimensions,
} from 'react-native';

function WelcomeScreen(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View 
          style = {{
            flex: .5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
          <Image source = {{ 
            width: 200, 
            height: 210, 
            uri: "https://i.pinimg.com/236x/04/c7/15/04c71539d260edce88f420fcfdaeb5c1.jpg", 
          }} />
          <Text style = {{ 
                color: 'lightblue', 
                fontWeight: '800', 
                fontSize: 50, 
                fontStyle: 'italic',
                textShadowColor: 'black',
                textShadowRadius: 10,
              }}> DOWA 
          </Text>
        </View>
        <View
          style = {{
            flex: .4,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style = {{
              backgroundColor: "black",
              width: 200,
              height: 40,
              borderTopEndRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 60,
            }}
          >
            <TouchableHighlight onPress = {() => console.log("Pic Clicked!")}>
              <Button
                title = "Log in" 
                onPress = {() => console.log("Button Clicked.")}
                color = "white"
                touchSoundDisabled = "true"
              />
            </TouchableHighlight>
          </View>
          <View
            style = {{
              backgroundColor: "lightblue",
              width: 200,
              height: 60,
              borderBottomEndRadius: 40,
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 20,
            }}
          >
            <TouchableHighlight onPress = {() => console.log("Pic Clicked!")}>
              <Button
                title = "Create a DOWA account" 
                onPress = {() => console.log("Button Clicked.")}
                color = "black"
              />
            </TouchableHighlight>
          </View>
        </View> 
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default WelcomeScreen;
