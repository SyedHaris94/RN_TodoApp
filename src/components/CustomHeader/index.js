import React from "react";

import { StatusBar, View } from "react-native";
import { Header } from 'react-native-elements'

const CustomHeader = (props) => {

  const { centerComponent, leftComponent, backgroundColor } = props
  return (
    <View>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle="light-content"
        translucent
      />
      <Header
        backgroundColor={backgroundColor}
        centerComponent={centerComponent}
      />
    </View>
  );
}

export default CustomHeader;
