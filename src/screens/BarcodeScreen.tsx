import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useWindowDimensions } from "react-native";
import { CameraView } from 'expo-camera';
import React, { useState, useRef } from 'react';

export default function BarCodePage() {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const camRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.safeBarcodeScreenContent}>
            <StatusBar
                style="light"
                backgroundColor="#FF941A"
                translucent={false}
            />
            <View style={styles.container90degBarcodeScreenContent}>
                <View
                    style={{
                        width: height,
                        height: width,
                        position: 'relative',
                        transform: [
                            { rotate: "90deg" },
                            { translateX: (height - width) / 2 },
                            { translateY: (height - width) / -2 },
                        ],
                    }}
                >
                    <View style={styles.fullScreenBarcodeScreenContent}>
                        <View style={styles.headerBarcodeScreenContent}>
                            <View style={styles.goBackBarcodeScreenContent}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <AntDesign name="arrow-left" size={24} color="#B1B0B8" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.textScanBarCodeBarcodeScreenContent}>
                                Escaneie o código de barras do boleto
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('PaymentDetails')}>
                            <View style={styles.containerTextInputBarCodeBarcodeScreenContent}>
                                <Text style={styles.textInputBarCodeBarcodeScreenContent}>
                                    Inserir código do boleto
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <CameraView style={styles.cameraScanScreenBarcode} ref={camRef} />
                    <View style={styles.takePictureBarcodeScreenContent}>
                        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                            <AntDesign name="camera" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                    {isModalVisible && (
                        <View style={styles.overlay}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContainerTextContent}>
                                    <Text style={styles.modalContainerTextContentOne}>Não foi possível identificar um código de barras.</Text>
                                    <Text style={styles.modalContainerTextContentTwo}>Tente escanear novamente ou digite o código do seu boleto.</Text>
                                </View>
                                <View style={styles.modalContainerButtonsContent}>
                                    <TouchableOpacity style={styles.modalContainerButtonsContentRetry} onPress={() => setIsModalVisible(false)}>
                                        <Text style={styles.modalContainerButtonsTextOneContent}>Escanear novamente</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalContainerButtonsContentType} onPress={() => navigation.navigate('PaymentDetails')}>
                                        <Text style={styles.modalContainerButtonsTextTwoContent}>Digitar código</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    safeBarcodeScreenContent: {
        flex: 1,
        paddingTop: 18,
        backgroundColor: '#FF941A',
    },
    container90degBarcodeScreenContent: {
        flex: 1,
        alignItems: "flex-end",
    },
    fullScreenBarcodeScreenContent: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "space-between",
    },
    headerBarcodeScreenContent: {
        paddingTop: 24,
        paddingHorizontal: 17,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    textScanBarCodeBarcodeScreenContent: {
        color: "#FFF",
        fontSize: 15,
    },
    containerTextInputBarCodeBarcodeScreenContent: {
        paddingVertical: 19,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
    },
    textInputBarCodeBarcodeScreenContent: {
        fontSize: 15,
        fontWeight: "400",
        color: "#585666",
        textAlign: "center",
    },
    goBackBarcodeScreenContent: {
        paddingRight: 238
    },
    cameraScanScreenBarcode: {
        height: 136,
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        top: 119,
    },
    takePictureBarcodeScreenContent: {
        position: 'absolute',
        top: 187,
        zIndex: 2,
        right: 50
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "flex-end",
        zIndex: 3,
    },
    modalContainerTextContent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 124,
    },
    modalContainerTextContentOne: {
        fontSize: 15,
        fontWeight: 700,
        color: '#585666'
    },
    modalContainerTextContentTwo: {
        fontSize: 15,
        fontWeight: 400,
        color: '#585666'
    },
    modalContainerButtonsContent: {
        flex: 1,
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E3E3E5'
    },
    modalContainer: {
        backgroundColor: "#FAFAFC",
        height: 180
    },
    modalContainerButtonsTextOneContent: {
        fontSize: 15,
        fontWeight: 400,
        color: '#FF941A'
    },
    modalContainerButtonsTextTwoContent: {
        fontSize: 15,
        fontWeight: 400,
    },
    modalContainerButtonsContentRetry: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#E3E3E5',
        borderRightWidth: 1,
    },
    modalContainerButtonsContentType: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
