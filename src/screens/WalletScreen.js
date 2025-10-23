import React from "react";
import { ScrollView,View } from 'react-native';
import Wallet from '../components/Wallet';
import CryptoCard from '../components/CryptoCard';
import STRINGS from '../constants/strings';
import BottomNav from '../components/BottomNav'
const WalletScreen = () => {
  return (
    <View style={{ flex: 1,position: 'relative',margin: 0,padding: 0, }}>
    <ScrollView
      style={{ flex: 1, padding: 16 }}
      contentContainerStyle={{ paddingBottom: 70 }}
      showsVerticalScrollIndicator={false}
    >
      <Wallet title={STRINGS.walletBalance} />
      <CryptoCard
        amount="2.25043350"
        cryptoName="Wrapped Bitcoin"
        symbol="WBTC"
        usdValue="$2.25"
        buttons={[
          { text: STRINGS.convertTransfer, onPress: () => console.log('Convert') },
          { text: STRINGS.changeWallet, onPress: () => console.log('Change') },
        ]}
      />

      <Wallet title={STRINGS.deposit}/>
      <CryptoCard
        amount="0.74939435"
        cryptoName="Wrapped Bitcoin"
        symbol="WBTC"
        usdValue="$0.75"
        buttons={[{ text: STRINGS.withdraw, onPress: () => console.log('withdraw'), fullWidth: true }]}
      />

      <Wallet title={STRINGS.loans}/>
      <CryptoCard
        amount="2.500000"
        cryptoName="Tether USD"
        symbol="USDT"
        usdValue="$2.50"
        buttons={[
          { text: STRINGS.getLoan, onPress: () => console.log('Repay') },
          { text: STRINGS.withdraw, onPress: () => console.log('Get') },
        ]}
      />

      <Wallet title={STRINGS.noLoanInfo}/>
      <CryptoCard
        amount="وام فعالی وجود ندارد"
        usdValue="برای ایجاد وام جدید نیاز به وثیقه دارید"
        buttons={[]} 
        centerContent={true}
      />
    </ScrollView>
      < BottomNav/>
      </View>
    
  );
};

export default WalletScreen;
