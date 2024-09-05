import {
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ImageOnBg} from '../components/layout';
import {VENICE_GOUP} from '../data/data';
import {COLOR} from '../contstants/colors';

const MainScreen = () => {
  return (
    <ImageOnBg>
      <FlatList
        data={VENICE_GOUP}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.gridId}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </ImageOnBg>
  );
};

export default MainScreen;

const Card = ({item}) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.6}>
    <ImageBackground
      source={{uri: item.image}}
      style={styles.image}></ImageBackground>
    <Text style={styles.text}>{item.keyName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    elevation: 2, // Тінь для Android
    shadowColor: COLOR.white, // Тінь для iOS
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20, // Ширина картки
    height: 180,
    resizeMode: 'cover',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR.gold,
    fontWeight: '800',
    fontSize: 22,
  },
  grid: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
