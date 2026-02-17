import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/LoginScreen";
import TabRoutes from "./TabRoutesNavigation";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={LoginPage}
      />
      <Stack.Screen
        name="Tabs"
        component={TabRoutes}
      />
    </Stack.Navigator>
  );
}