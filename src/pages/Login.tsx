import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Fonts, Colors, SharedStyles} from '../utils';
import PhoneInput from '../components/PhoneInput';

const Login: React.FC = () => {
  return (
    <ScrollView>
      <View style={SharedStyles.container}>
        <Text style={SharedStyles.header}>
          {/* \n */}
          Sign in with mobile number
        </Text>
        <View style={SharedStyles.formContainer}>
          <Text style={SharedStyles.formLabel}>YOUR PHONE</Text>
          <PhoneInput />
          <Text style={SharedStyles.formLabel}>PASSWORD</Text>
          <View>
            <TextInput
              style={SharedStyles.input}
              secureTextEntry
              placeholder="*********************"
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {}}
          style={SharedStyles.btn}>
          <Text style={SharedStyles.btnText}>SIGN IN</Text>
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
  newUser: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
