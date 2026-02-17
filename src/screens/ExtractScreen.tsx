import { View, StyleSheet, Text, Image, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar";

export default function ExtractPage() {

    const data = [
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
            title: 'League of Legends',
            dueDate: "09/08/21",
            value: '64,00'
        },
        {
            id: '5',
            title: 'League of Legends',
            dueDate: "09/08/21",
            value: '64,00'
        },
        {
            id: '6',
            title: 'League of Legends',
            dueDate: "09/08/21",
            value: '64,00'
        },
        {
            id: '7',
            title: 'League of Legends',
            dueDate: "09/08/21",
            value: '64,00'
        },
        {
            id: '8',
            title: 'League of Legends',
            dueDate: "09/08/21",
            value: '64,00'
        },
        {
            id: '9',
            title: 'League of Legends',
            dueDate: "09/08/21",
            value: '64,00'
        },
        {
            id: '10',
            title: 'League of Legends',
            dueDate: "09/08/21",
            value: '64,00'
        },
    ]

    return (
        <SafeAreaView style={styles.fullScreenExtractPage} edges={["top"]}>
            <StatusBar
                style="light"
                backgroundColor="#FF941A"
                translucent={false}
            />
            <View style={styles.headerContentExtractHomePage}>
                <View>
                    <Text style={styles.headerContentExtractHomePageTextOneContainer}>Olá,
                        <Text style={styles.headerContentExtractHomePageTextTwoContainer}>Tiago</Text>
                    </Text>
                    <Text style={styles.headerContentExtractHomePageTextThreeContainer}>Mantenha suas contas em dia</Text>
                </View>
                <Image source={require('../assets/home/tiago.png')} />
            </View>
            <View style={styles.headerContentExtractHomePageTextExtractsContainer}>
                <Text style={styles.headerContentExtractHomePageTextOneExtractsContainerTwo}>Meus extratos</Text>
                <Text style={styles.headerContentExtractHomePageTextTwoExtractsContainerTwo}>3 pagos</Text>
            </View>
            <View style={styles.relativeContainerContentScreenExtractPageFooterText}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 31, flex: 1 }} />}
                    renderItem={({ item }) => (
                        <View style={styles.relativeContainerContentScreenExtractPageFooterTextFlatlist}>
                            <View>
                                <Text style={styles.relativeContainerContentScreenExtractPageNameFooterTextFlatlist}>{item.title}</Text>
                                <Text style={styles.relativeContainerContentScreenExtractPageDateFooterDateOnetFlatlist}>
                                    Vence em <Text style={styles.relativeContainerContentScreenExtractPageDateFooterDateTwotFlatlist}>{item.dueDate}</Text>
                                </Text>
                            </View ><Text style={styles.relativeContainerContentScreenExtractPageDateFooterCifraotFlatlist}>R$
                                <Text style={styles.relativeContainerContentScreenExtractPageDateFooterPrecotFlatlist}> {item.value}</Text></Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    fullScreenExtractPage: {
        flex: 1,
        alignItems: 'center',
    },
    headerContentExtractHomePage: {
        padding: 24,
        display: 'flex',
        flexDirection: 'row',
        height: 152,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FF941A'
    },
    headerContentExtractHomePageTextOneContainer: {
        fontSize: 20,
        fontWeight: 400,
        color: '#FFFFFF'
    },
    headerContentExtractHomePageTextTwoContainer: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFFFFF'
    },
    headerContentExtractHomePageTextThreeContainer: {
        fontSize: 13,
        fontWeight: 400,
        color: '#FAFAFC'
    },
    headerContentExtractHomePageTextExtractsContainer: {
        height: 81,
        width: 327,
        paddingBottom: 24,
        paddingTop: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E3E3E5',
        borderBottomWidth: 1
    },
    headerContentExtractHomePageTextOneExtractsContainerTwo: {
        fontSize: 20,
        fontWeight: 600,
        color: '#585666'
    },
    headerContentExtractHomePageTextTwoExtractsContainerTwo: {
        fontSize: 13,
        fontWeight: 400,
        color: '#706E7A'
    },
    relativeContainerContentScreenExtractPageFooterText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 327,
        paddingTop: 32
    },
    relativeContainerContentScreenExtractPageFooterTextFlatlist: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    relativeContainerContentScreenExtractPageNameFooterTextFlatlist: {
        fontSize: 17,
        fontWeight: 600,
        color: '#585666'
    },
    relativeContainerContentScreenExtractPageDateFooterDateOnetFlatlist: {
        fontSize: 13,
        fontWeight: 400,
        color: '#585666'
    },
    relativeContainerContentScreenExtractPageDateFooterDateTwotFlatlist: {
        fontSize: 17,
        fontWeight: 500,
        color: '#585666'
    },
    relativeContainerContentScreenExtractPageDateFooterCifraotFlatlist: {
        fontSize: 16,
        fontWeight: 400,
        color: '#585666'
    },
    relativeContainerContentScreenExtractPageDateFooterPrecotFlatlist: {
        fontSize: 16,
        fontWeight: 600,
        color: '#585666'
    },
})