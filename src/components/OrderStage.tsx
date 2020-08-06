import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fonts} from '../utils';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  stage?: 1 | 2 | 3 | 4;
}

const OrderStage: React.FC<Props> = ({stage = 1}) => {
  const mapCallback = (str: string, i: number) => {
    let circleText = <Text style={styles.stageText}>{i + 1}</Text>;
    if (stage > i) {
      circleText = <MaterialIcon name="done" size={25} color="white" />;
    }
    return (
      <View
        key={str}
        style={[
          styles.stageContainer,
          i > 0 ? {alignItems: i !== 3 ? 'center' : 'flex-end'} : null,
        ]}>
        <View
          style={[
            styles.stageCircle,
            stage > i ? {backgroundColor: '#8dce6f'} : null,
          ]}>
          {circleText}
        </View>
        <Text style={styles.stageTitle}>{str}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backLine}></View>
      {['Preview', 'Shipping', 'Payment', 'Complete'].map(mapCallback)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'relative',
    paddingBottom: 15,
  },
  backLine: {
    position: 'absolute',
    height: 1,
    width: '100%',
    backgroundColor: '#c4c4c4',
    top: 28,
    left: 15,
  },
  stageContainer: {
    display: 'flex',
  },
  stageCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#c4c4c4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  stageText: {
    fontFamily: Fonts.MontserratBold,
    color: 'white',
    fontSize: 20,
  },
  stageTitle: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 16,
    color: 'black',
    opacity: 0.6,
  },
});

export default OrderStage;
