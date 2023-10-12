import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const NearLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name='index'   />
    </Stack>
  )
}

export default NearLayout

const styles = StyleSheet.create({})