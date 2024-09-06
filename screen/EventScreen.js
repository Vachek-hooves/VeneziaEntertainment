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
  //   console.log(item);

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
  const renderCarnivalEvent = ({item: event}) => (
    <View key={event.id} style={styles.eventContainer}>
      <Text style={styles.eventTitle}>Carnival Events</Text>
  
      {/* Перевірка для основних подій */}
      {event.schedule && (
        <View>
          <Text style={styles.sectionTitle}>Schedule:</Text>
          {event.schedule.map((eventItem, index) => (
            <View key={index} style={styles.eventDetailContainer}>
              {eventItem.image && (
                <Image
                  source={{uri: eventItem.image}}
                  style={styles.eventImage}
                />
              )}
              <Text style={styles.eventTitle}>{eventItem.name}</Text>
              <Text style={styles.eventDescription}>
                {eventItem.description}
              </Text>
              <Text style={styles.eventDuration}>
                Schedule: {eventItem.schedule}
              </Text>
              <Text style={styles.eventLocation}>
                Location: {eventItem.location}
              </Text>
            </View>
          ))}
        </View>
      )}
  
      {/* Перевірка для основних подій, якщо є */}
      {event.mainEvents && (
        <View>
          <Text style={styles.sectionTitle}>Featured Events:</Text>
          {event.mainEvents.map((featuredEvent, index) => (
            <View key={index} style={styles.eventDetailContainer}>
              <Text style={styles.eventTitle}>{featuredEvent.name}</Text>
              <Text style={styles.eventDescription}>
                {featuredEvent.description}
              </Text>
              <Text style={styles.eventCost}>Cost: {featuredEvent.cost}</Text>
              {featuredEvent.main_features && (
                <View>
                  <Text style={styles.sectionTitle}>Main Features:</Text>
                  {featuredEvent.main_features.map((feature, index) => (
                    <View key={index} style={styles.featureContainer}>
                      <Text style={styles.featureName}>{feature.feature}</Text>
                      <Text style={styles.featureDescription}>
                        {feature.description}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
              {featuredEvent.photo && (
                <Image
                  source={{uri: featuredEvent.photo}}
                  style={styles.featureImage}
                />
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );

  const renderEventItem = ({item: event}) => {
    switch (item.type) {
      case 'Theatre':
        return renderTheatreEvent({item: event});
      case 'Attraction':
        return renderAttractionEvent({item: event});
      case 'Carnival':
        return renderCarnivalEvent({item: event});
      default:
        return null;
    }
  };
  return (
    <ImageOnBg>
      <RenderMainImage image={item.coverImage} />
      <FlatList
        data={item.events}
        keyExtractor={(image, index) => index.toString()}
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
