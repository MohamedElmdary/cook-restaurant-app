import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SharedStyles, Colors} from '../utils';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import HistoryItem from '../components/HistoryItem';

const History: React.FC = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={SharedStyles.subHeader}>
        <Text style={SharedStyles.subHeaderText}>My History</Text>
      </View>
      <View style={{padding: 15, backgroundColor: 'white'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderColor: Colors.Orange,
            borderWidth: 1,
            borderRadius: 5,
          }}>
          <View
            style={[styles.btn, {backgroundColor: Colors.Orange, flexGrow: 1}]}>
            <Text style={{color: 'white'}}>Upcoming (3)</Text>
          </View>
          <View style={styles.btn}>
            <Text style={{color: Colors.Orange}}>History (12)</Text>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          style={styles.container}
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
          renderItem={({item}) => <HistoryItem key={item} />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  btn: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default History;
