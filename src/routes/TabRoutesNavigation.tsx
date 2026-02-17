import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomePage } from "../screens/HomeScreen";
import ExtractPage from "../screens/ExtractScreen";
import RegisterPage from "../screens/RegisterScreen";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
      />
      <Tab.Screen
        name="Cadastrar"
        component={RegisterPage}
      />
        <Tab.Screen
          name="Extratos"
          component={ExtractPage}
        />
    </Tab.Navigator>
  )
}