import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image
} from 'react-native';

import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.UpperContainer} >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
                        <Text style={styles.titleText1}>LOOK AT ME</Text><Text style={styles.titleText2}>APP</Text>
                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.subheading1}>Try Out</Text><Text style={styles.subheading2}> Cool Frames</Text>
                    </View>
                </View>

                <View style={styles.MiddleContainer}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={styles.contentText}>Experience the virtual experience of trying out different frames from our wide collection on your mobile phone before making any purchase, just how you would in an offline store!</Text>
                    </View>

                    <View style={{ flexDirection: "row", flex: 0.25 }} >                       
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/crown-pic1')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/crown-pic2')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/crown-pic3')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/flower-pic1')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/flower-pic2')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/flower-pic3')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/hair-pic1')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/hair-pic2')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/hair-pic3')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/other-pic1')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/other-pic2')} style={{ height: 64, width: 160 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require('./Fliter_Assets/otehr-pic3')} style={{ height: 64, width: 160 }} />
                        </View>

                    </View>
                </View>
                <View style={styles.LowerContainer} >
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate("Main")}
                    >
                        <View style={styles.button} >
                            <Text style={styles.buttonText}> Try Now! </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    UpperContainer: AppName,
    MiddleContainer: TextDescription,
    LowerContainer: button
});