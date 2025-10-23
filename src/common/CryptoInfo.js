import React from "react";
import { View,Text,StyleSheet, Platform   } from "react-native";
import COLORS from '../constants/colors';


const CryptoInfo = ({cryptoName , symbol})=>{
    return(
        <View style={styles.cryptoInfo}>
            <Text style={styles.cryptoName}>{cryptoName}</Text>
   <Text style={styles.cryptoSymbol}>{symbol}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cryptoInfo:{flexDirection: Platform.OS === "web" ? "row" : "row-reverse",alignItems:'center'},
     cryptoName: { fontSize: 18, color: COLORS.white, marginRight: 8, textAlign: Platform.OS === "web" ? "left" : "right", writingDirection: Platform.OS === "web" ? "ltr" : "rtl",},
 cryptoSymbol: { fontSize: 16, color: COLORS.gray, textAlign: Platform.OS === "web" ? "left" : "right",  writingDirection: Platform.OS === "web" ? "ltr" : "rtl", },
});




export default CryptoInfo;