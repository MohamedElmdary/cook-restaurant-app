import React from 'react';
import {View, Text} from 'react-native';
import {SharedStyles, Colors, Fonts} from '../utils';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const pages = ['Notification', 'My Profile', 'Setting', 'Support'];

const PageTab: React.FC<{page: string}> = ({page}) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        opacity: 0.7,
      }}>
      <Text>{page}</Text>
      <MaterialIcon name="keyboard-arrow-right" size={25} color="#ccc" />
    </View>
  );
};

const Profile: React.FC = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={SharedStyles.subHeader}>
        <Text style={SharedStyles.subHeaderText}>My Profile</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Colors.Orange, marginRight: 15}}>Hi! NHLuong</Text>
        <AntDesignIcon name="smileo" size={25} color={Colors.Orange} />
      </View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          marginTop: 15,
          paddingBottom: 30,
        }}>
        {pages.map((p) => (
          <PageTab page={p} key={p} />
        ))}
        <View
          style={{marginTop: 'auto', display: 'flex', alignItems: 'center'}}>
          <TouchableNativeFeedback
            onPress={() => {}}
            style={{
              backgroundColor: Colors.Orange,
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{color: 'white', fontFamily: Fonts.MontserratSemiBold}}>
              RESTAURANT REGISTER
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

export default Profile;
