import { StyleSheet, View, ScrollView, Button, Text, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import * as yup from 'yup'

const ajoutRevenusSchema = yup.object().shape({
  nom: yup
    .string()
    .required('Veuillez saisir un Nom'),
  prenom: yup
    .string()
    .required('Veuillez saisir un Prénom'),
  montant: yup
    .string()
    .required('Veuillez saisir un Montant')
    .matches(/^[1-9]+[0-9]*$/, 'Le montant doit être positif'),
})



const AjoutRevenus = () => {
  const [date, setDate] = useState(new Date())
  const [dateTimeShow, setDateTimeShow] = useState(false)
  const [categorie, setCategorie] = useState('')
  const fdate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
  return (
    <Formik
      validationSchema={ajoutRevenusSchema}
      initialValues={{ nom: '', prénom: '', montant: '', commentaire: '' }}
      onSubmit={values => console.log(values, categorie, fdate)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.boxForm}>
              <View style={{ flex: 1 }}>
                <TextInput
                  label="Nom"
                  style={styles.txtInput}
                  theme={{
                    roundness: 10,
                  }}
                  placeholder='Entrer le nom du bénéficiaire'
                  onChangeText={handleChange('nom')}
                  onBlur={handleBlur('nom')}
                  value={values.nom}
                />
                {errors.nom &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.nom}</Text>
                }
                <TextInput
                  label="Prénom"
                  style={styles.txtInput}
                  theme={{
                    roundness: 10,
                  }}
                  placeholder='Entrer le prénom du bénéficiaire'
                  onChangeText={handleChange('prénom')}
                  onBlur={handleBlur('prénom')}
                  value={values.prénom}
                />
                {errors.prenom &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.prenom}</Text>
                }
                <TextInput
                  label="Date de déclaration"
                  style={styles.txtInput}
                  theme={{
                    roundness: 10,
                  }}
                  value={dayjs(date).format('DD-MM-YYYY')}
                  onChangeText={() => { }}
                  onBlur={() => { }}
                  onFocus={() => {
                    setDateTimeShow(true)
                  }}
                />
                {dateTimeShow && (
                  <DateTimePicker
                    mode="date"
                    value={new Date()}
                    is24Hour={true}
                    onChange={(event, date) => {
                      setDateTimeShow(false)
                      setDate(date)
                    }}
                  />
                )}
                <TextInput
                  label="Montant"
                  style={styles.txtInput}
                  theme={{
                    roundness: 10,
                  }}
                  placeholder='Entrer le montant'
                  onChangeText={handleChange('montant')}
                  onBlur={handleBlur('montant')}
                  value={values.montant}
                  keyboardType='numeric'
                />
                {errors.montant &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.montant}</Text>
                }
                <View style={styles.dropDownStyle}>
                  <Picker
                    selectedValue={categorie}
                    onValueChange={(itemValue, itemIndex) => {
                      setCategorie(itemValue)

                    }}
                  >
                    <Picker.Item label="Catégorie" value="" />
                    <Picker.Item label="Salaire et assimilé" value="Salaire et assimilé" />
                    <Picker.Item label="Revenu financier" value="Revenu financier" />
                    <Picker.Item label="Rente" value=" Rente" />
                    <Picker.Item label="Pension alimentaire" value=" Pension alimentaire" />
                    <Picker.Item label="Allocation chômage" value="Allocation chômage" />
                    <Picker.Item label="Prestations sociales" value="Prestations sociales" />
                    <Picker.Item label="Revenu foncier" value="Revenu foncier" />
                    <Picker.Item label="Revenu exceptionnel" value="Revenu exceptionnel" />
                    <Picker.Item label="Autre revenu" value="Autre revenu" />

                  </Picker>
                </View>

                <TextInput
                  label="Commentaire"
                  multiline={true}
                  numberOfLines={4}
                  style={styles.txtComment}
                  theme={{
                    roundness: 10,
                  }}
                  placeholder='Entrer un commentaire'
                  onChangeText={handleChange('commentaire')}
                  onBlur={handleBlur('commentaire')}
                  value={values.commentaire}
                />


                <TouchableOpacity style={{ backgroundColor: '#9F8236', alignItems: 'center', marginVertical: 10, justifyContent: 'center', height: 50, borderRadius: 30 }} onPress={handleSubmit} title="Submit">
                  <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Ajouter</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'white' }}> nom:{values.nom} </Text>
              <Text style={{ color: 'white' }}> prenom:{values.prénom}</Text>
              <Text style={{ color: 'white' }}> montant:{values.montant}</Text>
              <Text style={{ color: 'white' }}> commentaire:{values.commentaire}</Text>
              <Text style={{ color: 'white' }}> categorie:{categorie}</Text>
              <Text style={{ color: 'white' }}> date:{date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )

}

export default AjoutRevenus

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxForm: {
    flex: 2,
    marginVertical: 20,
    marginHorizontal: 15,
    color: 'white',
    justifyContent: 'center',
  },
  txtInput: {
    borderColor: '#9F8236',
    fontSize: 17,
    height: 50,
    width: 300,
    borderWidth: 2,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#2B6747',
    borderRadius: 10,
    color: '#FFF',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5
  },
  txtComment: {
    borderColor: '#9F8236',
    fontSize: 17,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginTop: 5,
    backgroundColor: '#2B6747',
    borderRadius: 10,
    color: '#838383',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5
  },
  dropDownStyle: {
    borderColor: '#9F8236',
    paddingHorizontal: 5,
    borderWidth: 1,
    backgroundColor: '#2B6747',
    borderRadius: 10,
    color: '#FFF',
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
    marginVertical: 10
  },
})