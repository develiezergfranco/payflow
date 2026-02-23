import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage } from "../screens/HomeScreen";
import ExtractPage from "../screens/ExtractScreen";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 115,
          paddingTop: 45,
          paddingHorizontal: 80,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: 'transparent',
        },
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(255,255,255,0.85)',

            }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/login/hometabbaricon.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "#FF8C00" : "#999",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="BarcodeButton"
        component={View}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault()
            navigation.navigate('BarCode')
          },
        })}
        options={{
          tabBarItemStyle: {
            top: -12,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.middleIconContainer,
              ]}
            >
              <Feather
                name="plus-square"
                size={24}
                color={focused ? "#ef8300" : "#FFFFFF"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Extratos"
        component={ExtractPage}
        options={{
          tabBarActiveTintColor: "#FF8C00",
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-text" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  middleIconContainer: {
    width: 56,
    height: 56,
    justifyContent: "center",
    backgroundColor: '#FF941A',
    alignItems: "center",
    borderRadius: 5,
  },
});
