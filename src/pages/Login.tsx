import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Fonts, Colors} from '../utils';

const Login: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>
          {/* \n */}
          Sign in with mobile number
        </Text>
        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>YOUR PHONE</Text>
          <View style={styles.phoneContainer}>
            <TextInput
              keyboardType="number-pad"
              placeholder="+84"
              style={[styles.formControl, styles.phoneControl1]}
            />
            <TextInput
              keyboardType="number-pad"
              placeholder="985234812"
              style={[styles.formControl, styles.phoneControl2]}
            />
          </View>
          <Text style={styles.formLabel}>PASSWORD</Text>
          <View>
            <TextInput
              style={styles.formControl}
              secureTextEntry
              placeholder="*********************"
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {}}
          style={styles.btn}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.newUser}>
          <Text style={styles.newUserText1}>Don’t have an account? </Text>
          <Text style={styles.newUserText2}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 50,
    paddingTop: 70,
    alignItems: 'center',
  },
  header: {
    fontFamily: Fonts.MontserratBold,
    fontSize: 20,
    width: 250,
    textAlign: 'center',
    marginBottom: 100,
  },
  formContainer: {
    width: '100%',
    marginBottom: 100,
  },
  formLabel: {
    fontFamily: Fonts.MontserratRegular,
    color: Colors.Orange,
  },
  formControl: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontFamily: Fonts.MontserratRegular,
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  phoneControl1: {
    width: 100,
    marginRight: 15,
  },
  phoneControl2: {
    flexGrow: 1,
  },
  btn: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: Colors.Orange,
    borderRadius: 5,
    marginBottom: 50,
  },
  btnText: {
    fontFamily: Fonts.MontserratSemiBold,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  newUser: {
    display: 'flex',
    flexDirection: 'row',
  },
  newUserText1: {
    fontFamily: Fonts.MontserratRegular,
  },
  newUserText2: {
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.Blue,
  },
});

export default Login;
