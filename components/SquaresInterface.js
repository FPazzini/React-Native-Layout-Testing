import React, { Component } from 'react'
import { View, Text, FlatList, Image, ScrollView, TouchableHighlight } from 'react-native'
import { Card, CardSection, Button } from './common'

const numCols = 2

class SquaresInterface extends Component {

    state = {
        cardColor: 'grey'
    }

    cardClicked(item) {
        alert(item.id)
    }

    renderList = ({ item }) => {
        return (
            <View>
                <Card>
                    <TouchableHighlight
                        style={{ width: '100%', height: '100%' }}
                        onPress={() => this.cardClicked(item)}
                        underlayColor='lightgrey'
                    >
                        <View>
                            <View style={styles.innerViewStyle}>
                                <Image style={styles.image} source={item.avatar} />
                            </View>
                            <View style={styles.textViewStyle}>
                                <Text style={styles.descriptionStyle}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </Card>
            </View>

        );
    
    }
    render() {
        return (
            <View style={styles.viewStyle}>
                <FlatList
                data={
                    [
                        {
                            id: '1',
                            avatar: require('../assets/example.jpg'), 
                            description: 'primo'
                        }, 
                        {
                            id: '2',
                            avatar: require('../assets/icebridge.jpg'),
                            description: 'secondo'
                        }, 
                        {
                            id: '3',
                            avatar: require('../assets/squalo-bianco.jpg'),
                            description: 'terzo'
                        }, 
                        {
                            id: '4',
                            avatar: require('../assets/squalo-toro.jpg'),
                            description: 'quarto'
                        }, 
                        {
                            id: '5',
                            avatar: require('../assets/paris.jpg'),
                            description: 'quinto'
                        }, 
                        {
                            id: '6',
                            avatar: require('../assets/paris.jpg'),
                            description: 'sesto'
                        }, 
                        {
                            id: '7',
                            avatar: require('../assets/paris.jpg'),
                            description: 'settimo'
                        }, 
                        {
                            id: '8',
                            avatar: require('../assets/paris.jpg'),
                            description: 'ottavo'
                        }, 
                        {
                            id: '9',
                            avatar: require('../assets/paris.jpg'),
                            description: 'nono'
                        }, 
                        {
                            id: '10',
                            avatar: require('../assets/paris.jpg'),
                            description: 'decimo'
                        }
                    ]
                }
                renderItem={this.renderList}
                numColumns={numCols}
                keyExtractor={item => item.id}
            />

            </View>
        )
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    innerViewStyle: {
        width: '100%',
        height: '80%'
    },
    descriptionStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textViewStyle: {
        alignItems: 'flex-start'
    }
}

export default SquaresInterface