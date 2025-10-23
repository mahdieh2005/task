import React from "react";
import {LinearGradient} from'expo-linear-gradient';
import{StyleSheet,I18nManager, Platform} from 'react-native'
import WalletScreen from '@/src/screens/WalletScreen';

// matn az  rast be chab beshe
if (Platform.OS !== "web") {
  if (!I18nManager.isRTL) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  }
}

const App = ()=>{
  return(
    
<LinearGradient
colors={['#1a9d4fff','#0b0e0bff']}
start={{x:0.2,y:0}}
end={{x:0.5,y:0.3}}
style={styles.container}
>
  <WalletScreen/>
</LinearGradient>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
   direction: Platform.OS === "web" ? "ltr" : "rtl",
  }

})
export default App;