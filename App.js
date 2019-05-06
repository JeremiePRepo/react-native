import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Movie from './components/Movie';

export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Open up App.js to start working on your app!</Text>
                <Movie
                    titre="Super titre"
                    description="Super titre"
                />
                <Movie
                    titre="Super titre II"
                    description="Super titre"
                />
                <Movie
                    titre="Super titre Le retours"
                    description="Super titre"
                />
                <Movie
                    titre="Super titre Le retours"
                    description="Super titre"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
