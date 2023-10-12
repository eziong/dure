import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

type Props = {}

const FirstScreen = (props: Props) => {
  return (
    <Redirect href='(tabs)/home' />
  )
}

export default FirstScreen

const styles = StyleSheet.create({})