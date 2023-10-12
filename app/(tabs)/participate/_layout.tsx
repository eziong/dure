import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const ParticipateLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name='index'   />
    </Stack>
  )
}

export default ParticipateLayout

const styles = StyleSheet.create({})