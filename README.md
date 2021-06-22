# Dowa


![WelcomeScreen](WelcomeScreen.jpg)

source for the bird picture: https://i.pinimg.com/236x/04/c7/15/04c71539d260edce88f420fcfdaeb5c1.jpg

<Text style = {{ 
      color: 'white', 
      fontWeight: '500', 
      fontSize: 45, 
      fontStyle: 'italic', 
      textShadowColor: 'mediumpurple',
      textShadowRadius: 10,
      }}> DOWA 
</Text>

source = # for getting an image locally (does not work for me)
      {
            require("./assets/[insert_name_here].png")
      } 

source = # for getting an image from the web
      {{
          width: 200,
          height: 300,
          uri: "[insert_link_here]",
      }}
      
<Button
      title = "Create a DOWA account" 
      onPress = {() => console.log("Button Clicked.")}
      color = "blue"
/>

console.log(Dimensions.get("screen")); # this will output the below for iphone 7
Running application on iPhone.
Object {
  "fontScale": 1,
  "height": 667,
  "scale": 2,
  "width": 375,
}

backgroundColor: '#fff', for background color
alignItems: 'center', # is for left, middle or right alignment (primary axis)
justifyContent: 'center', # is for up, middle, or down alignment (cross axis)

To make sure the app content stays within the visible screen use SafeAreaView by first importing it and then replacing View section with it.

To support landscape orientation for your app, change orientation to default in app.json. 

-----------------------------------------------------------------------------------------
REACT.JS TIPS AND TRICKS

i is short for install
-g is short for global
      
npx create-react-app [non-capital-letter-app-name]

npm view react-native-gesture-handler versions # To view all versions of a package                                                                                             
npm install react-native-gesture-handler@1.8.0 # To install a specific version of a package                                                                                   
npm i -s react-native-gesture-handler # What's '-s'                                                                                                                   
npm start -- --reset-cache

use CTRL D for multi-cursor editing (select all instances of the same name)
rsf is a shortcut to make a functions component

in settings.json
{
    "editor.formatOnSave": true
}
