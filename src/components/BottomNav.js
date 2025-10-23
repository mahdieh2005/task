import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const navItems = [
  { text: 'خانه' },
  {  text: 'کیف' },
  { text: 'پروفایل' },
];

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      {navItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItem}>
          <Text style={styles.navText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    paddingVertical: 8,
 margin: 0,
  },
  navItem: { alignItems: 'center' },
  navIcon: { width: 24, height: 24, marginBottom: 4 },
  navText: { color: COLORS.white, fontSize: 12 },
});

export default BottomNav;