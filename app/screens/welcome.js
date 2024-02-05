import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {Colors} from "../../components/styles";
import { View, Image, Button, Text, StyleSheet} from 'react-native';

const Welcome = () => {
    return (
        <LinearGradient
            colors={[Colors.color_green, Colors.color_purple1, Colors.color_purple]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{flex: 1, justifyContent: 'flex-end'}}>{
                <View style={styles.titleContainer} >
                        <Text style={styles.title}>
                            {"Purfect Pal "}
                            <Image 
                            style={{width: 30, height: 30}}
                            source= {require('../assets/dog.png')}    
                        />
                        </Text> 
                        <View></View>
                </View>
            }
        </LinearGradient>
    )
}
export default Welcome;

const styles = StyleSheet.create({
    titleContainer: {

        flex : 1,
        alignContent: "center",
        justifyContent:"center",


    }, 
    title: {
        textAlign: "center",
        fontSize: 30,
        color: "white"
    }
    
})
