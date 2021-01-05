import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  ICHome,
  ICHomeOff,
  ICBookmark,
  ICBookmarkOff,
  ICLocation,
  ICLocationOff,
  ICProfile,
  ICProfileOff,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <ICHome /> : <ICHomeOff />;
    case 'Maps':
      return focus ? <ICLocation /> : <ICLocationOff />;
    case 'Bookmark':
      return focus ? <ICBookmark /> : <ICBookmarkOff />;
    case 'Profile':
      return focus ? <ICProfile /> : <ICProfileOff />;
    default:
      break;
  }
  return <ICHome />;
};

const ButtomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
