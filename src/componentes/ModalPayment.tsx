import {
    Modal,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Svg, { Line } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native';

type ModalPaymentProps = {
    ModalVisible: boolean,
    setModalVisible: (value: boolean) => void,
    selectedBill: any   
}

export function ModalPayment({
    ModalVisible,
    setModalVisible,
    selectedBill
}: ModalPaymentProps) {
    const navigation = useNavigation();

    if (!selectedBill) return null;

    const handleCloseAndGoHome = () => {
        setModalVisible(false);
    };

    return (
        <Modal
    animationType="slide"
    transparent
    visible={ModalVisible}
    statusBarTranslucent
    onRequestClose={() => setModalVisible(false)}
>
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modalContainer}
                    onPress={() => { }}
                >
                    <View style={styles.modalContainerPaymentTexts}>
                        <Text style={styles.modalContainerRegularText}>O boleto
                            <Text style={styles.modalContainerBoldText}> {selectedBill.title}</Text></Text>
                        <Text style={styles.modalContainerRegularText}> no valor de R$
                            <Text style={styles.modalContainerBoldText}> {selectedBill.value}</Text></Text>
                        <Text style={styles.modalContainerRegularText}>foi pago ?</Text>
                    </View>
                    <View style={styles.modalContainerButtons}>
                        <TouchableOpacity
                            style={styles.modalContainerNotButton}
                            onPress={handleCloseAndGoHome}
                        >
                            <Text style={styles.modalContainerNotTextButton}>Ainda não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalContainerYesButton}
                            onPress={handleCloseAndGoHome}
                        >
                            <Text style={styles.modalContainerYesTextButton}>Sim</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalContainerMarginButton}>
                        <Svg height={1} width={'100%'} >
                            <Line
                                x1="0%"
                                y1="100%"
                                x2="100%"
                                y2="100%"
                                stroke="#E3E3E5"
                                strokeWidth="1"
                            />
                        </Svg>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainerButtonsDelete}>
                            <FontAwesome5 name="trash-alt" size={20} color="#E83F5B" />
                            <View>
                                <Text style={styles.modalContainerButtonsDeleteText}>Deletar boleto</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
    },
    modalContainer: {
        backgroundColor: "#FFF",
        width: "100%",
        paddingTop: 38,
        alignItems: 'center',
    },
    modalContainerRegularText: {
        fontSize: 20,
        fontWeight: 400,
        color: '#585666'
    },
    modalContainerBoldText: {
        fontSize: 20,
        fontWeight: 600,
        color: '#585666'
    },
    modalContainerPaymentTexts: {
        alignItems: 'center',
        paddingBottom: 24,
    },
    modalContainerButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16
    },
    modalContainerNotButton: {
        backgroundColor: '#FAFAFC',
        height: 55,
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E3E3E5',
        borderRadius: 5,
    },
    modalContainerNotTextButton: {
        fontSize: 15,
        fontWeight: 400,
        color: '#666666'
    },
    modalContainerYesButton: {
        backgroundColor: '#FF941A',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        width: 155,
        borderRadius: 5
    },
    modalContainerYesTextButton: {
        fontSize: 15,
        fontWeight: 400,
        color: '#FFFFFF'
    },
    modalContainerButtonsDelete: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        alignItems: 'center',
        paddingBottom: 41,
        gap: 16
    },
    modalContainerButtonsDeleteText: {
        fontSize: 15,
        fontWeight: 400,
        color: '#E83F5B'
    },
    modalContainerMarginButton: {
        paddingTop: 25,
        height: 1,
        width: '100%'
    }
});