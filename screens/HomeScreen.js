import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
	return (
		<SafeAreaView style={[tw`bg-white h-full`]}>
			<View style={tw`p-5 `}>
				<Image
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
