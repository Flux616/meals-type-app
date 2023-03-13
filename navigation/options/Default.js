import Colors from '../../constants/colors';

const DefaultNavigationOptions = () => {
  return {
    headerShown: true,
    headerTitleStyle: {
      backgroundColor: '#ffffff',
      fontFamily: 'open-sans-bold',
    },
    headerTintColor: Colors.primaryColor,
  };
};

export default DefaultNavigationOptions;
