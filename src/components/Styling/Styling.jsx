import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from './style';
const Styling = () => {
  return (
    <View>
      <Text>Styling (react native mein units nahi hotay)</Text>
      <Text style={{fontSize: 30, backgroundColor: 'red', color: 'white'}}>
        Inline styling
      </Text>
      <Text style={style.firstContainer}>Internal Styling</Text>
      <Text style={styles.firstContainer}>External style</Text>
      <Text
        style={[
          styles.firstContainer,
          style.firstContainer,
          {fontSize: 30, backgroundColor: 'red', color: 'white'},
        ]}>
        Multiple style (inline precedence is the most)
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  firstContainer: {
    color: 'white',
    backgroundColor: 'green',
    fontSize: 40,
  },
});

export default Styling;
