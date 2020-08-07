import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Rate from './Rate';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Colors} from '../utils';

const FavoriteItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={{uri: 'http://placehold.it/150x150'}}
          style={{height: 60, width: 60, marginRight: 15}}
        />
        <View style={styles.details}>
          <View>
            <Text>Wabi Sabi restaurant</Text>
            <Text
              style={{
                color: '#999',
                fontSize: 12,
              }}>
              New York, NY, USA -
              <Text style={{color: Colors.Orange}}> 3km away</Text>
            </Text>
          </View>
          <Rate rate={4} />
        </View>
      </View>
      <View style={[styles.subContainer, {opacity: 0.4}]}>
        <EntypoIcon name="heart" size={16} style={{marginRight: 5}} />
        <Text style={{fontSize: 12}}>234</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default FavoriteItem;
