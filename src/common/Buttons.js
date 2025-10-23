import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import COLORS from '../constants/colors';

const Button = ({ text, onPress, style, fullWidth = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, fullWidth && styles.fullButton, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    borderColor:COLORS.buttonText,
    backgroundColor: COLORS.buttonBg,
    borderRadius: 8,
    padding: 7,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  fullButton: { marginHorizontal: 4, marginTop: 16 , alignSelf:'stretch'},
  buttonText: { color: COLORS.buttonText, fontSize: 16,  textAlign: "center", },
});

export default Button;