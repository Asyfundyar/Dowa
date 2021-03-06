import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    View, 
    Image, 
    SafeAreaView, 
    Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const LandingScreen = ({ navigation }) => {
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
        <View>
            <Button
                title = "Home"
                onPress = {() => navigation.navigate('Home')}
                color = "black"
            />
            <TouchableHighlight onPress = {() => console.log("Pic Clicked!")}>
                <Button
                title = "Log in" 
                onPress = {() => console.log("Button Clicked.")}
                color = "lightblue"
                touchSoundDisabled = "true"
                />
            </TouchableHighlight>
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
};
 
export default LandingScreen;
