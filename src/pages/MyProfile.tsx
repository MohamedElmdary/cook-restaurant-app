import React from 'react';
import {View, ImageBackground, Text, Image} from 'react-native';
import {Fonts} from '../utils';

const data: [string, string][] = [
  ['Address', 'So 168 Ngyen Xien, Thanh Xuan, Ha Noi'],
  ['Phone number', '+84 98 5234 812'],
  ['Email', 'huuluong.arc@gmail.com'],
];

const Line: React.FC<{line: [string, string]}> = ({line: [s1, s2]}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 20,
      }}>
      <Text style={{opacity: 0.5, fontSize: 15}}>{s1}</Text>
      <Text style={{opacity: 0.7, fontSize: 15}}>{s2}</Text>
    </View>
  );
};

const MyProfile: React.FC = () => {
  return (
    <View>
      <ImageBackground
        source={{uri: 'http://placehold.it/1000x700'}}
        style={{height: 200}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontFamily: Fonts.MontserratSemiBold,
              fontSize: 16,
              marginTop: 10,
            }}>
            My Profile
          </Text>
        </View>
      </ImageBackground>
      <View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            transform: [{translateY: -70}],
          }}>
          <View
            style={{
              height: 106,
              width: 106,
              backgroundColor: 'white',
              paddingTop: 3,
              paddingLeft: 3,
            }}>
            <Image
              source={{uri: 'http://placehold.it/100x100'}}
              style={{height: 100, width: 100}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          transform: [{translateY: -30}],
        }}>
        {data.map((i, idx) => (
          <Line line={i} key={idx} />
        ))}
      </View>
    </View>
  );
};

export default MyProfile;
