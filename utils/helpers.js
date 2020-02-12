import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Notifications} from 'expo'
import * as Permissions from 'expo-permissions';


import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { white, pink, red, orange, blue, lightPurp } from './colors';

const NOTIFICATIONS_KEY = 'flashcards:notifications'

export function clearLocalNotifications () {
  return AsyncStorage.removeItem(NOTIFICATIONS_KEY)
  .then(Notifications.chancelAllScheduledNotificationsAsync())
}

export function createlNotifications () {
  return {
    title: `Make a quiz today!`,
    body: `Don't forget to lern today!`
  }
}

export function setLocalNotifications() {
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
