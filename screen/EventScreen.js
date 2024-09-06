import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageOnBg} from '../components/layout';
import {RenderMainImage} from '../components/EventScreeComponents';

const EventScreen = ({route}) => {
  const {item} = route.params;
  console.log(item);

  return (
    <ImageOnBg>
      <RenderMainImage image={item.coverImage} />
      <ScrollView></ScrollView>
    </ImageOnBg>
  );
};

export default EventScreen;

const styles = StyleSheet.create({});
