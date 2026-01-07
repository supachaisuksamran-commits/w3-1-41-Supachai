import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function circle() {

  const router = useRouter()
  const [side, setSide] = useState(0)
  const [area, setArea] = useState(0)

  function circleSquare(){
    var result = 3.14156 * (side * side)
    setArea(result)
  }

  return (
    <SafeAreaView>
      <Text>คำนวณพื้นที่วงกลม</Text>
      <Text>ความยาวรัศมี ; {side} , พื้นที่วงกลม : {area} </Text>
      <TextInput
         style={{borderWidth :1}}
         placeholder='กรอกขนาดของด้าน'
         value={side.toString()}
         onChangeText={(e) => setSide(Number(e))}
      />
      <Button title='คำนวณ' onPress={() => circleSquare()}/>
       <Button title='กลับหน้าหลัก' onPress={() => router.navigate("/")}/>
    </SafeAreaView>
  )
}