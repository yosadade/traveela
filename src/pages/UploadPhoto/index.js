import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        back
        title="Upload Photo"
        subTitle="Upload your photo"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <TouchableOpacity activeOpacity={0.7} style={styles.photoWrapper}>
            <View style={styles.borderPhoto}>
              <Text style={styles.titlePhoto}>Add Photo</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Yosada Dede</Text>
        <Text style={styles.job}>qodr.yosadade@gmail.com</Text>
        <Button
          title="Upload and Continue"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={20} />
        <Link
          title="Skip for this"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 36,
  },
  photo: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoWrapper: {
    marginTop: 50,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  borderPhoto: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePhoto: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    marginTop: 24,
    color: '#020202',
    textAlign: 'center',
  },
  job: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    marginTop: 4,
    marginBottom: 88,
    color: '#8D92A3',
    textAlign: 'center',
  },
});
