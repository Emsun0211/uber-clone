import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreens from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator>
						<Stack.Screen
							name='HomeScreen'
							component={HomeScreens}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='MapScreen'
							component={MapScreen}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
					{/* <HomeScreens /> */}
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
