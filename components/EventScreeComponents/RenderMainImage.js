import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {IconBack} from '../Icon';

const RenderMainImage = ({image}) => {

  return (
    <View style={{padding: 1}}>
      <ImageBackground
        source={{uri: image}}
        style={{
          width: '100%',
          height: 300,
          //   justifyContent: 'center',
          borderRadius: 12,
          overflow: 'hidden',
          marginBottom:10
        }}>
        <IconBack />
      </ImageBackground>
    </View>
  );
};

export default RenderMainImage;

const styles = StyleSheet.create({});
