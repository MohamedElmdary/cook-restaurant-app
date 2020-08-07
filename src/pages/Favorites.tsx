import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../utils';
import FavoriteItem from '../components/FavoriteItem';
import {ScrollView} from 'react-native-gesture-handler';

const Favorites: React.FC = () => {
  return (
    <View style={{display: 'flex', height: '100%'}}>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: Fonts.MontserratSemiBold,
            fontSize: 16,
          }}>
          My Favorites
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <FavoriteItem key={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    margin: 15,
  },
});

export default Favorites;
