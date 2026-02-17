import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./TabRoutesNavigation";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}