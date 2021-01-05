import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';

const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  refPass,
  onSubmitEditing,
  icon,
  onPressIcon,
  bottom = 0,
}) => {
  return (
    <View style={styles.container(bottom)}>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        secureTextEntry={secureTextEntry}
        ref={refPass}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        icon={icon}
      />
      <TouchableOpacity style={styles.icon} onPres={onPressIcon}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: (bottom) => ({
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: bottom,
  }),
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    marginBottom: 6,
  },
  input: {
    fontFamily: 'Poppins-Light',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#8D92A3',
    padding: 10,
  },
  icon: {
    paddingHorizontal: 5,
    marginLeft: 'auto',
    bottom: 35,
    marginRight: 10,
  },
});
