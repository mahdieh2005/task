// CryptoCard.js
import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import COLORS from '../constants/colors';
import Button from '../common/Buttons';
import CryptoInfo from '../common/CryptoInfo';

const CryptoCard = ({ amount, cryptoName, symbol, usdValue, buttons = [], centerContent = false }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.row, centerContent && { justifyContent: 'center' }]}>
        <Text style={[styles.amount, centerContent && { textAlign: 'center' }]}>{amount}</Text>
        {!centerContent && cryptoName && <CryptoInfo cryptoName={cryptoName} />}
      </View>

      <View style={[styles.row, centerContent && { justifyContent: 'center' }]}>
        <Text style={[styles.usdValue, centerContent && { textAlign: 'center' }]}>{usdValue}</Text>
        {!centerContent && symbol && <CryptoInfo symbol={symbol} />}
      </View>

      {buttons.length > 0 && (
        <View style={buttons.length > 1 ? styles.buttonRow : null}>
          {buttons.map((btn, index) => (
            <Button
              key={index}
              text={btn.text}
              onPress={btn.onPress}
              fullWidth={btn.fullWidth}
              style={buttons.length > 1 && index !== buttons.length - 1 ? { marginRight: 4 } : {}}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg || '#1C1C1E',
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    // برای iOS
    shadowColor: '#fcfcfcdc',
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // برای Android
    elevation: 5,
    // برای وب
    ...Platform.select({
      web: {
        boxShadow: '0px 0px 4px rgba(253, 245, 245, 0.59)',
        transition: 'box-shadow 0.3s ease-in-out',
      },
    }),
  },
  row: { flexDirection: Platform.OS === "web" ? "row" : "row-reverse", alignItems: 'center', justifyContent: 'space-between' },
  amount: { fontSize: 20, color: COLORS.white, fontWeight: 'bold', textAlign: Platform.OS === "web" ? "left" : "right", writingDirection: Platform.OS === "web" ? "ltr" : "rtl" },
  usdValue: { fontSize: 16, color: COLORS.gray, textAlign: Platform.OS === "web" ? "left" : "right", marginTop: 4, writingDirection: Platform.OS === "web" ? "ltr" : "rtl" },
  buttonRow: { flexDirection: Platform.OS === "web" ? "row" : "row-reverse", justifyContent: 'space-between', marginTop: 16 },
});

export default CryptoCard;