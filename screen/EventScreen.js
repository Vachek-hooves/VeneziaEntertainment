import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageOnBg} from '../components/layout';

const EventScreen = ({route}) => {
  const {itemId, name} = route.params;

  return (
    <ImageOnBg>
      <Text>Event screen</Text>
    </ImageOnBg>
  );
};

export default EventScreen;

const styles = StyleSheet.create({});
