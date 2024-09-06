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
  const renderTheatreEvent = ({item: event}) => {
    // Перетворення об'єкта key_performers в масив пар
    const keyPerformersArray = Object.entries(event.key_performers || {}).map(
      ([name, role]) => ({name, role}),
    );

    return (
      <View key={event.id} style={styles.eventContainer}>
        {event.image && (
          <Image source={{uri: event.image}} style={styles.eventImage} />
        )}
        <Text style={styles.eventTitle}>{event.name}</Text>
        <Text style={styles.eventComposer}>Composer: {event.composer}</Text>
        <Text style={styles.eventDescription}>{event.description}</Text>
        <Text style={styles.eventPlot}>Plot: {event.plot}</Text>

        {/* Основні деталі театру */}
        {event.details && (
          <View style={styles.detailsContainer}>
            <Text style={styles.sectionTitle}>Details:</Text>
            <Text style={styles.detailText}>
              Premiere Date: {event.details.premiere_date}
            </Text>
            <Text style={styles.detailText}>
              Duration: {event.details.duration}
            </Text>
            <Text style={styles.detailText}>
              Director: {event.details.director}
            </Text>
            <Text style={styles.detailText}>
              Conductor: {event.details.conductor}
            </Text>
          </View>
        )}

        {/* Якщо є ключові виконавці */}
        {keyPerformersArray.length > 0 && (
          <View style={styles.performersContainer}>
            <Text style={styles.sectionTitle}>Key Performers:</Text>
            {keyPerformersArray.map((performer, index) => (
              <Text key={index} style={styles.performerText}>
                {performer.name} - {performer.role}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  };
  // Рендеринг події типу Attractions (стандартний варіант)
  const renderAttractionEvent = ({item: event}) => (
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
            <Text style={styles.attractionText}>Name: {item.name}</Text>
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
                <Text>{item.interestingFacts.fact}</Text>
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
  const renderEventItem = ({item: event}) => {
    if (item.type === 'Theatre') {
      return renderTheatreEvent({item: event});
    } else {
      return renderAttractionEvent({item: event});
    }
  };
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
    backgroundColor: COLOR.white + 90,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR.gold,
    marginBottom: 5,
    marginTop: 10,
  },
  attractionText: {
    fontSize: 18,
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
  eventImage: {
    width: Dimensions.get('window').width - 70, // Зменшити ширину, якщо потрібно
    height: 150, // Зменшити висоту, якщо потрібно
    marginBottom: 10,
    borderRadius: 10,
  },
  eventPlot: {
    fontSize: 16,
    color: COLOR.black,
    marginBottom: 10,
  },
});
