import React from "react";
import {Text , StyleSheet} from 'react-native';
import COLORS from '../constants/colors';


const Wallet = ({title})=>{
    return <Text style={styles.wallet} >{title}</Text>
  
};

const styles= StyleSheet.create({
wallet:{
    fontSize:20,
    color:COLORS.white,
    marginBottom:5,
    marginTop:15

}
})


export default Wallet;