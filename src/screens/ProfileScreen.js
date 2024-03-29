import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Platform,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Entypo as Icon} from '@expo/vector-icons';
import {Colors, Fonts} from '../constants';

const chartIcon = require('../../assets/images/pages/chart.png');
const calendarIcon = require('../../assets/images/pages/calendar.png');
const chatIcon = require('../../assets/images/pages/chat.png');
const galleryIcon = require('../../assets/images/pages/gallery.png');
const profileIcon = require('../../assets/images/pages/profile.png');

export default function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: Colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: Colors.primary,
    fontFamily: Fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});
