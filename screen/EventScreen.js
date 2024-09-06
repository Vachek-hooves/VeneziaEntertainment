import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {ImageOnBg} from '../components/layout';
import {RenderMainImage} from '../components/EventScreeComponents';
import {COLOR} from '../contstants/colors';

const EventScreen = ({route}) => {
  const {item} = route.params;
  console.log(item);

  const renderGalleryItem = ({item}) => (
    <Image source={{uri: item}} style={styles.galleryImage} />
  );
  const renderEventItem = ({item: event}) => (
    <View key={event.id} style={styles.eventContainer}>
      <Text style={styles.eventTitle}>{event.name}</Text>
      <Text style={styles.eventDescription}>{event.description}</Text>
      <Text style={styles.eventDuration}>Duration: {event.duration}</Text>

      {/* Основні атракції */}
      <Text style={styles.sectionTitle}>Main Attractions:</Text>
      <FlatList
        data={event.mainAttractions}
        keyExtractor={(attraction, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.attractionContainer}>
            <Text
              style={[
                styles.attractionText,
                {textAlign: 'center', marginVertical: 10},
              ]}>
              {' '}
              {item.name}
            </Text>
            <Text style={styles.attractionText}>History: {item.history}</Text>

            {/* Якщо interestingFacts.fact є масивом */}
            <View>
              <Text style={styles.attractionText}>Interesting Facts:</Text>
              {Array.isArray(item.interestingFacts.fact) ? (
                item.interestingFacts.fact.map((factItem, index) => (
                  <Text key={index} style={styles.factText}>
                    {factItem}
                  </Text>
                ))
              ) : (
                <Text>{item.interestingFacts.fact}</Text> // Якщо це не масив, просто рендеримо як текст
              )}
            </View>
          </View>
        )}
      />

      {/* Галерея */}
      <Text style={styles.sectionTitle}>Gallery:</Text>
      <FlatList
        data={event.gallery}
        renderItem={renderGalleryItem}
        keyExtractor={(image, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.galleryContainer}
      />
    </View>
  );
  return (
    <ImageOnBg>
      <RenderMainImage image={item.coverImage} />
      <FlatList
        data={item.events}
        keyExtractor={event => event.id}
        renderItem={renderEventItem}
        contentContainerStyle={styles.contentContainer}
      />
    </ImageOnBg>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLOR.gold,
    textAlign: 'center',
    marginBottom: 20,
  },
  eventContainer: {
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR.black,
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 16,
    color: COLOR.black,
    marginBottom: 10,
  },
  eventDuration: {
    fontSize: 16,
    color: COLOR.gray,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLOR.gold,
    marginBottom: 5,
    marginTop: 10,
  },
  attractionText: {
    fontSize: 16,
    color: COLOR.black,
    marginLeft: 10,
  },
  galleryContainer: {
    marginTop: 10,
  },
  galleryImage: {
    width: Dimensions.get('window').width / 3,
    height: 120,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 8,
  },
});
