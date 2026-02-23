import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function LoginPage() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.screenLoginContainerFull}>
            <StatusBar
                style="light"
                backgroundColor="#FF941A"
                translucent={false}
            />
            <View >
                <View>
                    <Image
                        source={require('../assets/login/womanbackground.png')}
                        style={styles.imageWomanBackgoundLogin}
                    />
                    <LinearGradient
                        colors={[
                            "rgba(255,255,255,0)",  
                            "rgba(255,255,255,0.4)",
                            "rgba(255,255,255,0.8)",
                            "#FFFFFF"               
                        ]}
                        locations={[0, 0.1, 0.35, 0.8]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.gradientOverlay}
                    />
                </View>
                <View>
                    <Image source={require('../assets/login/lefticon.png')}
                        style={styles.imageLefttIconeBackgoundLogin} />
                </View>
                <View>
                    <Image source={require('../assets/login/goldbackground.png')}
                        style={styles.imageBackgoundLogin} />
                </View>
                <View>
                    <Image source={require('../assets/login/righticon.png')}
                        style={styles.imageRightIconeBackgoundLogin} />
                </View>
            </View>
            <View style={styles.textFooterScreenLoginQr}>
                <View style={styles.imageBarcodeIconeBackgoundLogin}>
                    <Image source={require('../assets/login/barcode.png')}
                    />
                </View>
                <View style={styles.containertextFooterScreenTEXT}>
                    <Text style={styles.textFooterScreenLogin}>Organize seus</Text>
                    <Text style={styles.textFooterScreenLogin}>boletos em um</Text>
                    <Text style={styles.textFooterScreenLogin}>só lugar</Text>
                </View>
                <View style={styles.googleLoginScreenLogin}>
                    <TouchableOpacity style={styles.googleLoginScreenLoginStyle}
                        onPress={() => navigation.replace('Tabs')} >
                        <View style={styles.googleLoginScreenIconStyle}>
                            <View style={styles.googleLoginScreenIconGoogle}>
                                <Image source={require('../assets/login/google-icon.png')}
                                />
                            </View>
                            <Text style={styles.googleLoginScreenTextStyle}>Entrar com Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    screenLoginContainerFull: {
        flex: 1,
        backgroundColor: '#FFFFFFCC'
    },
    imageBackgoundLogin: {
        width: 'auto',
        height: 270,
        position: 'relative',
    },
    imageWomanBackgoundLogin: {
        position: 'absolute',
        zIndex: 1,
        height: 362,
        width: 202,
        left: 87,
        top: 26,
    },
    imageRightIconeBackgoundLogin: {
        height: 48,
        width: 48,
        position: 'absolute',
        zIndex: 1,
        bottom: 70,
        left: 269,
    },
    imageLefttIconeBackgoundLogin: {
        height: 48,
        width: 48,
        position: 'absolute',
        zIndex: 1,
        right: 268,
        top: 238,
    },
    imageBarcodeIconeBackgoundLogin: {
        height: 44,
        width: 72,
    },
    gradientOverlay: {
        zIndex: 2,
        position: 'absolute',
        top: 299,
        width: '100%',
        height: 89,
    },
    textFooterScreenLoginQr: {
        position: 'absolute',
        alignItems: 'center',
        zIndex: 1,
        gap: 24,
        left: 40,
        top: 464,
    },
    containertextFooterScreenTEXT: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 236,
    },
    textFooterScreenLogin: {
        fontSize: 32,
        fontWeight: 600,
        color: '#585666',
        lineHeight: 40,
    },
    googleLoginScreenLogin: {
        height: 56,
        width: 295,
        paddingTop: 40,
    },
    googleLoginScreenLoginStyle: {
        backgroundColor: '#FFFFFFCC',
        height: 56,
        width: 295,
        borderWidth: 1,
        borderColor: '#E3E3E5'
    },
    googleLoginScreenIconGoogle: {
        height: '100%',
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E3E3E5'
    },
    googleLoginScreenTextStyle: {
        paddingLeft: 49,
        fontSize: 15,
        fontWeight: 400,
        color: '#666666'
    },
    googleLoginScreenIconStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
    },
})
