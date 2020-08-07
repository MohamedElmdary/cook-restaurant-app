import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../utils';
import FavoriteItem from '../components/FavoriteItem';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Favorites: React.FC = () => {
  // prettier-ignore
  const [data, setData] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
      <View style={styles.container}>
        <SwipeListView
          data={data}
          renderItem={(data) => (
            <FavoriteItem key={data.item} txt={data.item} />
          )}
          keyExtractor={(data) => data.toString()}
          leftOpenValue={100}
          renderHiddenItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                const copyOfData = [...data];
                const idx = copyOfData.findIndex((x) => x === item);
                copyOfData.splice(idx, 1);
                setData(copyOfData);
              }}
              style={{
                backgroundColor: '#fb3d3c',
                height: 90,
                width: 90,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesignIcon name="delete" color="white" size={25} />
              <Text style={{color: 'white'}}>Delete</Text>
            </TouchableOpacity>
          )}
        />
      </View>
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
