import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

type Props = {}

const TabsLayout = (props: Props) => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="near" />
      <Tabs.Screen name="participate" />
      <Tabs.Screen name="friends" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})