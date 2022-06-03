import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import React from 'react'

const AjoutRevenus = () => {
  return (
    <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
  )
}

export default AjoutRevenus

const styles = StyleSheet.create({
    container:{
        
    }
})




