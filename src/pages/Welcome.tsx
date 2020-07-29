import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

import {Fonts} from '../utils/fonts';

const logo = require('../../assets/images/logo.png');

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <LinearTextGradient
        style={styles.logo}
        locations={[0, 1]}
        colors={['#fb3d3c', '#ff8400']}>
        <Text>CUK CUK</Text>
      </LinearTextGradient>
      <Text style={styles.recommendText}>
        Curated foof recommendation for Runway members.
      </Text>
      <View style={{height: '100%'}} />
      <Text style={styles.link}>Need help?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
  },
  logo: {
    fontFamily: Fonts.Frankfrt,
    fontSize: 50,
    marginTop: 40,
    marginBottom: 40,
  },
  recommendText: {
    width: 220,
    color: '#939393',
    textAlign: 'center',
    fontFamily: Fonts.MontserratRegular,
  },
  link: {
    color: '#00baff',
    marginTop: 'auto',
    fontFamily: Fonts.MontserratRegular,
  },
});

export default Welcome;
