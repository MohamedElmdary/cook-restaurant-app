import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Rate: React.FC<{rate: number}> = ({rate}) => {
  return (
    <View style={styles.rate}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <AntDesignIcon
              key={i}
              name="star"
              size={16}
              color={i - rate + 1 <= 0 ? '#ffa800' : '#d8d8d8'}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Rate;
