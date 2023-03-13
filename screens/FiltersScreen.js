import {Button, StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SansTextBold from '../components/SansTextBold';
import SansText from '../components/SansText';
import Colors from '../constants/colors';
import {useDispatch} from 'react-redux';
import {setFilters} from '../redux/slices/mealsSlice';

const FilterSwitch = ({title, value, onSwitch}) =>
  <View style={styles.filterContainer}>
    <SansText size={16}>{title}</SansText>
    <Switch
      value={value}
      onValueChange={onSwitch}
      thumbColor={'#fff'}
      trackColor={{true: Colors.primaryColor}}
    />
  </View>;
;

const FiltersScreen = ({navigation}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = (newValue) => ({
    isGlutenFree: isGlutenFree,
    isLactoseFree: isLactoseFree,
    isVegan: isVegan,
    isVegetarian: isVegetarian,
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <SansTextBold size={22}>Available Filters / Restrictions</SansTextBold>
      <View style={styles.filtersBlock}>
        <FilterSwitch
          title={'Gluten-free'}
          value={isGlutenFree}
          onSwitch={(newValue) => {
            setIsGlutenFree(newValue);
            dispatch(setFilters(saveFilters()));
          }}
        />
        <FilterSwitch
          title={'Lactose-free'}
          value={isLactoseFree}
          onSwitch={(newValue) => {
            setIsLactoseFree(newValue);
            dispatch(setFilters(saveFilters()));
          }}
        />
        <FilterSwitch
          title={'Vegan'}
          value={isVegan}
          onSwitch={(newValue) => {
            setIsVegan(newValue);
            dispatch(setFilters(saveFilters()));
          }}
        />
        <FilterSwitch
          title={'Vegetarian'}
          value={isVegetarian}
          onSwitch={(newValue) => {
            setIsVegetarian(newValue);
            dispatch(setFilters(saveFilters()));
          }}
        />
      </View>
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  filtersBlock: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  saveButton: {
    width: 100,
    height: 40,
    marginTop: 20,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});
