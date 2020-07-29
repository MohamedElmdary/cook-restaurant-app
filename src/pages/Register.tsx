import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SharedStyles, Fonts, Colors} from '../utils';
import PhoneInput from '../components/PhoneInput';

const Register: React.FC = () => {
  return (
    <ScrollView>
      <View style={SharedStyles.container}>
        <Text style={SharedStyles.header}>
          {/* \n */}
          Sign up with mobile number
        </Text>
        <View style={SharedStyles.formContainer}>
          <View>
            <Text style={SharedStyles.formLabel}>YOUR PHONE</Text>
            <PhoneInput />
          </View>
          <View>
            <Text style={SharedStyles.formLabel}>PASSWORD</Text>
            <TextInput
              style={SharedStyles.input}
              secureTextEntry
              placeholder="******************"
            />
          </View>
          <View style={styles.confPassContainer}>
            <Text style={SharedStyles.formLabel}>CONFIRM PASSWORD</Text>
            <TextInput
              style={SharedStyles.input}
              secureTextEntry
              placeholder="******************"
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {}}
          style={SharedStyles.btn}>
          <Text style={SharedStyles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.oldUser}>
          <Text style={styles.oldUserText1}>Have an account? </Text>
          <Text style={styles.oldUserText2}>Sign In</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  confPassContainer: {
    marginTop: 40,
  },
  oldUser: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  oldUserText1: {
    fontFamily: Fonts.MontserratRegular,
  },
  oldUserText2: {
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.Blue,
  },
});

export default Register;
