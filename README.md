# Dowa

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

backgroundColor: '#fff', for background color
alignItems: 'center', # is for left, middle or right alignment
justifyContent: 'center', # is for up, middle, or down alignment

To make sure the app content stays within the visible screen use SafeAreaView by first importing it and then replacing View section with it.

------------------------------------------------------------------------------------

use CTRL D for multi-cursor editing (select all instances of the same name)
