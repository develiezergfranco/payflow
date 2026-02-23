import { Text, View, StyleSheet,KeyboardAvoidingView, TouchableOpacity, Platform } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar";
import { BoletoFormInput } from "../componentes/MaskInputsPaymentsDetails";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export default function InputsRegisterPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaViewInputScreen}>
      <StatusBar
        style="light"
        backgroundColor="#FFFFFF"
        translucent={false}
      />
      <View style={styles.principalContainerFullScreenInputScreen}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.select({ ios: "padding", android: "height" })}
          keyboardVerticalOffset={75}
        >
        <View style={styles.fullScreenInputScreen}>
          <View style={styles.iconInputScreen}>
            <TouchableOpacity
              onPress={() => navigation.goBack()} >
              <AntDesign name="arrow-left" size={24} color="#B1B0B8" />
            </TouchableOpacity>
          </View>
          <View style={styles.TextoHeaderInputScreen}>
            <View>
              <Text style={styles.TextoOneHeaderInputScreen}>Preencha os dados</Text>
              <Text style={styles.TextoOneHeaderInputScreen}>do boleto</Text>
            </View>
          </View>
          <View style={styles.containerDetailsPaymentInputScreen}>
            <BoletoFormInput
              type="name"
              placeholder="Nome do boleto"
              style={styles.inputPlaceholderRegisterScreen}
            />
            <BoletoFormInput
              type="date"
              placeholder="Vencimento"
              keyboardType="numeric"
              style={styles.inputPlaceholderRegisterScreen}
            />
            <BoletoFormInput
              type="currency"
              placeholder="Valor"
              keyboardType="numeric"
              style={styles.inputPlaceholderRegisterScreen}
            />
            <BoletoFormInput
              type="barcode"
              placeholder="Código"
              keyboardType="number-pad"
              style={styles.inputPlaceholderRegisterScreen}
            />
          </View>
          <View style={styles.iconNameInputRegisterScreen}>
            <FontAwesome5 name="file-alt" size={24} color="#FF941A" />
          </View>
          <View style={styles.iconDateInputRegisterScreen}>
            <FontAwesome5 name="times-circle" size={24} color="#FF941A" />
          </View>
          <View style={styles.iconValueInputRegisterScreen}>
            <Ionicons name="wallet-outline" size={24} color="#FF941A" />
          </View>
          <View style={styles.iconBarcodeInputRegisterScreen}>
            <FontAwesome5 name="barcode" size={24} color="#FF941A" />
          </View>
        </View>
        <View>
          <View style={styles.containerBorderFooterInputScreen} />
          <View style={styles.containerFooterInputScreen}>
            <TouchableOpacity style={styles.buttonLeft}
              onPress={() => navigation.goBack()} >
              <View >
                <Text style={styles.textoOneFooterInputScreen}>
                  Cancelar
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRight}
              onPress={() => navigation.goBack()} >
              <View >
                <Text style={styles.textoTwoFooterInputScreen}>
                  Cadastrar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewInputScreen: {
    flex: 1
  },
  fullScreenInputScreen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24
  },
  principalContainerFullScreenInputScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  iconInputScreen: {
    paddingTop: 18,
    width: '100%',
    justifyContent: 'flex-start',
    paddingBottom: 24
  },
  TextoHeaderInputScreen: {
    height: 50,
    paddingBottom: 24,
  },
  TextoOneHeaderInputScreen: {
    fontSize: 20,
    fontWeight: 600,
    color: '#585666',
    textAlign: 'center',
  },
  containerDetailsPaymentInputScreen: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 24,
    width: '100%',
  },
  inputPlaceholderRegisterScreen: {
    position: 'relative',
    fontSize: 15,
    fontWeight: 400,
    color: '#B1B0B8',
    paddingLeft: 96,
    borderBottomWidth: 1,
    borderColor: '#B1B0B8'
  },
  iconNameInputRegisterScreen: {
    position: 'absolute',
    zIndex: 0,
    top: 149,
    left: 43,
    borderRightWidth: 1,
    borderRightColor: '#B1B0B8',
    paddingRight: 13
  },
  iconDateInputRegisterScreen: {
    position: 'absolute',
    zIndex: 0,
    top: 189,
    left: 40,
    borderRightWidth: 1,
    borderRightColor: '#B1B0B8',
    paddingRight: 10

  },
  iconValueInputRegisterScreen: {
    position: 'absolute',
    zIndex: 0,
    top: 229,
    left: 40,
    borderRightWidth: 1,
    borderRightColor: '#B1B0B8',
    paddingRight: 9
  },
  iconBarcodeInputRegisterScreen: {
    position: 'absolute',
    zIndex: 0,
    top: 267,
    left: 40,
    borderRightWidth: 1,
    borderRightColor: '#B1B0B8',
    paddingRight: 10
  },
  containerBorderFooterInputScreen: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E5',
  },
  containerFooterInputScreen: {
    height: 56,
    flexDirection: 'row',
    width: '100%',
  },
  buttonLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E3E3E5',
  },
  buttonRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoOneFooterInputScreen: {
    fontSize: 15,
    fontWeight: '400',
    color: '#706E7A',
  },
  textoTwoFooterInputScreen: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FF941A',
  },
})