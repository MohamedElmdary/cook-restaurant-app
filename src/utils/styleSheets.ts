import {StyleSheet} from 'react-native';
import {Fonts} from './fonts';
import {Colors} from './colors';

export const SharedStyles = StyleSheet.create({
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
  subHeader: {
    backgroundColor: 'white',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  subHeaderText: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 16,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontFamily: Fonts.MontserratRegular,
  },
  formLabel: {
    fontFamily: Fonts.MontserratRegular,
    color: Colors.Orange,
  },
  btn: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: Colors.Orange,
    borderRadius: 5,
    marginBottom: 50,
  },
  formContainer: {
    width: '100%',
    marginBottom: 100,
  },
  btnText: {
    fontFamily: Fonts.MontserratSemiBold,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
