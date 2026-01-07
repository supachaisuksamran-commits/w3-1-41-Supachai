import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Cal() {

  const router = useRouter()
  const [side, setSide] = useState(0)
  const [area, setArea] = useState(0)

  function CalSquare(){
    var result = side * side
    setArea(result)
  }

  return (
    <SafeAreaView>
      <Text>คำนวณพื้นที่สี่เหลี่ยมจัตุรัส</Text>
      <Text>ด้าน ; {side} , พื้นที่ : {area} </Text>
      <TextInput
         style={{borderWidth :1}}
         placeholder='กรอกขนาดของด้าน'
         value={side.toString()}
         onChangeText={(e) => setSide(Number(e))}
      />
      <Button title='คำนวณ' onPress={() => CalSquare()}/>
       <Button title='กลับหน้าหลัก' onPress={() => router.navigate("/")}/>
    </SafeAreaView>
  )
}