import { StyleSheet,  View, Button,Text } from 'react-native'
import { Formik } from 'formik'
import { useFormik } from 'formik'
import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import React from 'react'

const AjoutRevenus = () => {
  return (
    <Formik
     initialValues={{ nom: '', prénom: '',montant:'',commentaire:'' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={styles.vueprincipale}>
         <TextInput
           placeholder='Entrer le nom du bénéfeciaire'
           onChangeText={handleChange('nom')}
           onBlur={handleBlur('nom')}
           value={values.nom}
         />
           <TextInput
           placeholder='Entrer le prénom du bénéfeciaire'
           onChangeText={handleChange('prénom')}
           onBlur={handleBlur('prénom')}
           value={values.prénom}
         />
          <TextInput
           placeholder='Entrer le montant'
           onChangeText={handleChange('montant')}
           onBlur={handleBlur('montant')}
           value={values.montant}
           keyboardType='numeric'
         />
          <TextInput
           placeholder='Entrer un commentaire'
           onChangeText={handleChange('commentaire')}
           onBlur={handleBlur('commentaire')}
           value={values.commentaire}
         />

         <Button onPress={handleSubmit} title="Submit" />
         <Text> nom:{values.nom} </Text>
         <Text> prenom:{values.prénom}</Text>
         <Text> montant:{values.montant}</Text>
         <Text> categorie:{values.commentaire}</Text>



       </View>
     )}
   </Formik>
  )
}

export default AjoutRevenus

const styles = StyleSheet.create({
    vueprincipale:{
        flex:1,
        justifyContent:'center',
    },
})