import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Rate from '../components/Rate';
import {Fonts} from '../utils';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import Comment from '../components/Comment';

const data = {
  rate: 4,
  reviews: 122,
  rateStar: [65, 30, 20, 5, 2],
  comments: [
    {
      time: '80:30 12.06.2017 - NHLuong',
      rate: 5,
      comment:
        'How does Maison Lameloise compare to top Paris 3 star places like Le Cinq, Ledoyen, Epicure, Guy Savoy, etc? Really excited to try out this wonderful restaurant ...',
    },
    {
      time: '80:30 12.06.2017 - NHLuong',
      rate: 4,
      comment:
        'Bonjour, Avez vous possibilité de proposer un menu végétalien ? Cordialement',
    },
  ],
};

const RestaurantReview = () => {
  const rateBars = [];

  for (let i = 5; i > 0; i--) {
    rateBars.push(
      <View style={styles.rateBar} key={i}>
        <Text style={{marginRight: 25, fontSize: 16}}>{i} star</Text>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={data.rateStar[5 - i] / data.reviews}
          color="#ffa800"
          style={{flex: 1}}
        />
      </View>,
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.reviews}>
          <View style={styles.reviewsRate}>
            <Text style={styles.reviewText}>{data.rate},0</Text>
            <Rate rate={data.rate} />
          </View>
          <Text style={{fontSize: 16, opacity: 0.6}}>
            {data.reviews} Review
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingBottom: 15,
          }}>
          {rateBars}
        </View>
        <View>
          {data.comments.map((c, i) => (
            <Comment key={i} comment={c} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 15,
    paddingRight: 15,
  },
  reviews: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewsRate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewText: {
    marginRight: 15,
    fontSize: 20,
    fontFamily: Fonts.MontserratSemiBold,
  },
  rateBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    borderBottomColor: 'red',
  },
});

export default RestaurantReview;
