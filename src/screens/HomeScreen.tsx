import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ModalPayment } from "../componentes/ModalPayment";

export const dataExtracts = [
    {
        id: '1',
        title: 'Tia Maria',
        dueDate: "16/03/21",
        value: '2.131,33'
    },
    {
        id: '2',
        title: 'Monitor Dell',
        dueDate: "02/05/21",
        value: '1.764,90'
    },
    {
        id: '3',
        title: 'League of Legends',
        dueDate: "09/08/21",
        value: '64,00'
    },
    {
        id: '4',
        title: 'Aluguel de Julho',
        dueDate: "09/08/21",
        value: '5.531,00'
    },
    {
        id: '5',
        title: 'Boteco da Vó',
        dueDate: "16/03/21",
        value: '14,00'
    },
    {
        id: '6',
        title: 'Boteco da Vó',
        dueDate: "16/03/21",
        value: '14,00'
    },
    {
        id: '7',
        title: 'Boteco da Vó',
        dueDate: "16/03/21",
        value: '14,00'
    },
    {
        id: '8',
        title: 'Boteco da Vó',
        dueDate: "16/03/21",
        value: '14,00'
    },
    {
        id: '9',
        title: 'Boteco da Vó',
        dueDate: "16/03/21",
        value: '14,00'
    },
]

function HomePage() {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedBill, setSelectedBill] = useState<any>(null);

    const handleOpenModal = (item: any) => {
        setSelectedBill(item);
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.fullScreenHomePage} edges={["top"]}>
            <StatusBar
                style="light"
                backgroundColor="#FF941A"
                translucent={false}
            />
            <View style={styles.headerContentScreenHomePage}>
                <View style={styles.ContainerContentScreenHomePage}>
                    <View style={styles.textContainerContentScreenHomePage}>
                        <Text style={styles.firstTextHeadContentScreenHomePage}>Olá, <Text style={styles.secondTextHeadContentScreenHomePage}>Tiago</Text>
                        </Text>
                        <Text style={styles.thirdTextHeadContentScreenHomePage}>Mantenha suas contas em dia</Text>
                    </View>
                    <Image source={require('../assets/home/tiago.png')} />
                </View>
                <View style={styles.relativeContainerContentScreenHomePage}>
                    <View style={styles.relativeContainerContentScreenHomePageImage}>
                        <Image source={require('../assets/home/qrcode.png')} />
                    </View>
                    <View style={styles.relativeContainerContentScreenHomePageImageLine}>
                        <Image source={require('../assets/home/line.png')} />
                    </View>
                    <View style={styles.relativeContainerContentScreenHomePageText}>
                        <Text style={styles.relativeContainerContentScreenHomePageFirstText}>Você tem<Text style={styles.relativeContainerContentScreenHomePageSecondText}>14 boletos</Text></Text>
                        <Text style={styles.relativeContainerContentScreenHomePageFirstText}>cadastrados para pagar</Text>
                    </View>
                </View>
                <View style={styles.relativeContainerContentScreenHomePageMiddletText} >
                    <Text style={styles.styleContentScreenHomePageMiddletText}>Meus boletos</Text>
                </View>
            </View>
            <View style={styles.relativeContainerContentScreenHomePageFooterText}>
                <FlatList
                    data={dataExtracts}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 32, flex: 1 }} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleOpenModal(item)}
                            style={styles.relativeContainerContentScreenHomePageFooterTextFlatlist}
                        >
                            <View>
                                <Text style={styles.relativeContainerContentScreenHomePageNameFooterTextFlatlist}>
                                    {item.title}
                                </Text>
                                <Text style={styles.relativeContainerContentScreenHomePageDateFooterDateOnetFlatlist}>
                                    Vence em{" "}
                                    <Text style={styles.relativeContainerContentScreenHomePageDateFooterDateTwotFlatlist}>
                                        {item.dueDate}
                                    </Text>
                                </Text>
                            </View>
                            <Text style={styles.relativeContainerContentScreenHomePageDateFooterCifraotFlatlist}>
                                R$
                                <Text style={styles.relativeContainerContentScreenHomePageDateFooterPrecotFlatlist}>
                                    {" "}{item.value}
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <ModalPayment
                ModalVisible={modalVisible}
                setModalVisible={setModalVisible}
                selectedBill={selectedBill}
            />
        </SafeAreaView>

    )
}

export { HomePage };

const styles = StyleSheet.create({
    fullScreenHomePage: {
        flex: 1,
        alignItems: 'center',
    },
    headerContentScreenHomePage: {
        justifyContent: 'flex-start',
        padding: 18,
        alignItems: 'center',
        height: 138,
        width: '100%',
        backgroundColor: "#FF941A",
        position: 'relative'
    },
    ContainerContentScreenHomePage: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        height: 48,
        width: 327,
        justifyContent: 'space-between',
    },
    textContainerContentScreenHomePage: {
        display: 'flex',
        flexDirection: 'column'
    },
    firstTextHeadContentScreenHomePage: {
        fontSize: 20,
        fontWeight: 400,
        color: '#FFFFFF',
    },
    secondTextHeadContentScreenHomePage: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFFFFF'
    },
    thirdTextHeadContentScreenHomePage: {
        fontSize: 13,
        fontWeight: 400,
        color: '#FAFAFC'
    },
    relativeContainerContentScreenHomePage: {
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        width: 327,
        backgroundColor: '#585666',
        borderRadius: 5,
        alignItems: 'center',
        position: 'absolute',
        top: 98,
        zIndex: 1
    },
    relativeContainerContentScreenHomePageImage: {
        paddingLeft: 20
    },
    relativeContainerContentScreenHomePageImageLine: {
        paddingLeft: 24
    },
    relativeContainerContentScreenHomePageText: {
        height: 40,
        width: 'auto',
        justifyContent: 'flex-start',
        paddingLeft: 24
    },
    relativeContainerContentScreenHomePageFirstText: {
        fontSize: 13,
        fontWeight: 400,
        color: '#FFFF'
    },
    relativeContainerContentScreenHomePageSecondText: {
        fontSize: 13,
        fontWeight: 700,
        color: '#FFFF'
    },

    relativeContainerContentScreenHomePageMiddletText: {
        height: 25,
        width: 'auto',
        position: 'absolute',
        zIndex: 1,
        top: 256,
        left: 24,
    },
    styleContentScreenHomePageMiddletText: {
        fontSize: 20,
        fontWeight: 600,
        color: '#585666'
    },
    relativeContainerContentScreenHomePageFooterText: {
        flex: 1,
        width: 327,
        zIndex: 1,
        marginTop: 153,
        paddingTop: 32,
        borderTopWidth: 1,
        borderTopColor: '#E3E3E5'
    },
    relativeContainerContentScreenHomePageFooterTextFlatlist: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    relativeContainerContentScreenHomePageNameFooterTextFlatlist: {
        fontSize: 17,
        fontWeight: 600,
        color: '#585666'
    },
    relativeContainerContentScreenHomePageDateFooterDateOnetFlatlist: {
        fontSize: 13,
        fontWeight: 400,
        color: '#585666'
    },
    relativeContainerContentScreenHomePageDateFooterDateTwotFlatlist: {
        fontSize: 17,
        fontWeight: 500,
        color: '#585666'
    },
    relativeContainerContentScreenHomePageDateFooterCifraotFlatlist: {
        fontSize: 16,
        fontWeight: 400,
        color: '#585666'
    },
    relativeContainerContentScreenHomePageDateFooterPrecotFlatlist: {
        fontSize: 16,
        fontWeight: 600,
        color: '#585666'
    }
})