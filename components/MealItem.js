import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import SansText from './SansText';

const MealItem = ({onSelectMeal, item}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground
              resizeMode="cover"
              source={{uri: item.imageUrl}}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <SansText>{item.duration}m</SansText>
            <SansText>{item.complexity.toUpperCase()}</SansText>
            <SansText>{item.affordability.toUpperCase()}</SansText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#dfdfdf',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealHeader: {
    height: '85%',
  },
  mealRow: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
