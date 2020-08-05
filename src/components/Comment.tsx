import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Rate from './Rate';
import {Fonts} from '../utils';

interface CommentModel {
  time: string;
  rate: number;
  comment: string;
}

const Comment: React.FC<{comment: CommentModel}> = ({
  comment: {time, rate, comment},
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{opacity: 0.5, fontSize: 16}}>{time}</Text>
        <Rate rate={rate} />
      </View>
      <Text
        style={{
          lineHeight: 22,
          fontSize: 15,
          marginTop: 10,
          fontFamily: Fonts.MontserratRegular,
          opacity: 0.8,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 15,
        }}>
        {comment}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});

export default Comment;
