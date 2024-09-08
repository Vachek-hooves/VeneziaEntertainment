import {StyleSheet, Text, View} from 'react-native';
import {ImageOnBg} from '../components/layout';
import {Calendar} from 'react-native-calendars';
import {COLOR} from '../contstants/colors';
import {useState} from 'react';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');
  return (
    <ImageOnBg>
      <Text style={styles.header}>CALENDAR</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendarStyle}
          theme={{
            ...styles.calendarTheme,
            textMonthFontSize: 22,
            monthTextColor: COLOR.gold,
            textDayFontSize: 20, // Шрифт для днів
            dayTextColor: COLOR.white,
            todayTextColor: COLOR.gold, // Підсвічує поточний день
            weekVerticalMargin: 25,
            todayBackgroundColor: COLOR.white + 50,
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
    </ImageOnBg>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: 100,
    padding: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  calendarStyle: {
    borderRadius: 20,
    paddingBottom: 10,
    height: 500, // Фіксована висота для календаря
    width: '100%',
  },
  calendarTheme: {
    calendarBackground: COLOR.black + 90,
    arrowColor: COLOR.gold, // Стрілки змінюють місяць
    todayTextColor: COLOR.gold, // Підсвічує сьогоднішню дату
    textSectionTitleColor: COLOR.white, // Колір днів тижня
    selectedDayBackgroundColor: COLOR.blue, // Підсвічення вибраного дня
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold', // Товстий шрифт для місяця
  },
  header: {
    fontWeight: '800',
    fontSize: 32,
    textAlign: 'center',
    color: COLOR.gold,
    letterSpacing: 5,
  },
});
