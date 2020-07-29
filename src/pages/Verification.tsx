import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SharedStyles, Fonts, Colors} from '../utils';

type PinCode = number | null;
type PinModel = [PinCode, PinCode, PinCode, PinCode];

const Verification: React.FC = () => {
  const refs = [
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
  ];
  const [pin, setPin] = useState<PinModel>([null, null, null, null]);
  const pinInputs: Element[] = [];

  for (let i = 0; i < 4; i++) {
    pinInputs.push(
      <TextInput
        key={i}
        ref={refs[i]}
        value={pin[i] ? pin[i]?.toString() : ''}
        style={[SharedStyles.input, styles.pinInput]}
        placeholder="*"
        keyboardType="numeric"
        maxLength={1}
        onKeyPress={({nativeEvent: {key}}) => {
          if (key === 'Backspace' && pin[i] === null && i !== 0) {
            const copyOfPin: PinModel = [...pin];
            copyOfPin[i - 1] = null;
            setPin(copyOfPin);
            refs[i - 1].current?.focus();
          }
        }}
        onTextInput={({nativeEvent: {text}}) => {
          if (text !== '' && pin[i] === null) {
            const copyOfPin: PinModel = [...pin];
            copyOfPin[i] = +text;
            setPin(copyOfPin);
            if (i !== 3) {
              refs[i + 1].current?.focus();
            }
          } else if (text === '' && pin[i] !== null) {
            const copyOfPin: PinModel = [...pin];
            copyOfPin[i] = null;
            setPin(copyOfPin);
          }
        }}
      />,
    );
  }

  return (
    <ScrollView>
      <View style={SharedStyles.container}>
        <Text style={[SharedStyles.header, styles.header]}>
          {/* \n */}
          Verification code
        </Text>
        <Text style={styles.message}>
          SMS verification code has been sent to:
        </Text>
        <Text style={styles.phoneNumber}>
          {/* \n */}
          +84 98 5234 812
        </Text>
        <View style={SharedStyles.formContainer}>
          <Text style={SharedStyles.formLabel}>PIN CODE</Text>
          <View style={styles.pinContainer}>
            {/* \n */}
            {pinInputs}
          </View>
        </View>
        <TouchableOpacity style={[SharedStyles.btn, styles.btn]}>
          <Text style={SharedStyles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  message: {
    width: 250,
    fontFamily: Fonts.MontserratRegular,
    textAlign: 'center',
    marginBottom: 25,
  },
  phoneNumber: {
    fontFamily: Fonts.MontserratSemiBold,
    color: Colors.Orange,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 50,
  },
  pinContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pinInput: {
    width: '20%',
    textAlign: 'center',
    fontFamily: Fonts.MontserratSemiBold,
  },
  btn: {
    borderRadius: 30,
  },
});

export default Verification;
