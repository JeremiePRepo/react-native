import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Movie extends React.Component {

    informationsPress = () => {
        const { titre, description } = this.props;
        Alert.alert(
            "titre : " + titre,
            description
        )
    }

    render() {
        const { titre, description } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{titre}</Text>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg' }}
                />
                <Text>{description}</Text>
                <Text>Année</Text>
                <Text>Réalisateur</Text>
                <Button
                    title="Information"
                    onPress={this.informationsPress}
                />
                <TouchableHighlight
                    onPress={this.informationsPress}
                >
                    <Text>Information</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Movie;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#f0f',
        margin: 20,
        padding: 20,
    },
    title: {
        fontSize: 40,
    },
})