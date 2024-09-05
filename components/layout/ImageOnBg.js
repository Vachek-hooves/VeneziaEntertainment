import {ImageBackground} from 'react-native';

const ImageOnBg = ({children, style}) => {
  return (
    <ImageBackground
      style={[style, {flex: 1}]}
      source={require('../../assets/img/bg/granit.png')}>
      {children}
    </ImageBackground>
  );
};

export default ImageOnBg;
