import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import {Fonts} from '../utils';
import Rate from './Rate';

export interface SearchResultModel {
  id: number | string;
  image: string;
  name: string;
  place: string;
  rate: 1 | 2 | 3 | 4 | 5;
}

const SearchResult: React.FC<{result: SearchResultModel}> = ({
  result: {id, image, name, place, rate},
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        console.log('id', id);
      }}>
      <View style={styles.imageContianer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View>
        <Text style={{fontFamily: Fonts.MontserratSemiBold, fontSize: 15}}>
          {name}
        </Text>
        <Text style={{marginBottom: 10, opacity: 0.4}}>{place}</Text>
        <Rate rate={rate} />
      </View>
      <View style={{marginLeft: 'auto'}}>
        <SimpleLineIcon name="arrow-right" size={16} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  imageContianer: {
    marginRight: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 3,
  },
});

export default SearchResult;
