import {ImageBackground, SafeAreaView} from 'react-native';

const ImageOnBg = ({children, style}) => {
  return (
    <ImageBackground
      style={[style, {flex: 1}]}
      source={require('../../assets/img/bg/granit.png')}>
      <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default ImageOnBg;
