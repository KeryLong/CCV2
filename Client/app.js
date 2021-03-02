import React from "react";
import { StyleSheet } from "react-natve";
import { provider as PaperProvider } from "react-native-paper";

export default function App() {
    return(
        <PaperProvider>
            <TopBar />

            <MainScreen />
        </PaperProvider>
    );
}