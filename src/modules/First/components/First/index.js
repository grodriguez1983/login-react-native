import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import styles from './styles';

export default class TabNavigationExample extends Component {
  static route = {
    navigationBar: {
      title: 'Tab Navigation'
    }
  };
  render () {
    const {
    first: {
      value
    },
    plusOne
  } = this.props;
    return (
    <View style={styles.container}>
      <Text>{value}</Text>

      <Button title="PLUS ONE" onPress={plusOne} />
      <Button title="GO TO SECOND PAGE" onPress={() => {
        this.props.navigation.navigate('Home');
      }}
      />
    </View>
    );
  }
}
