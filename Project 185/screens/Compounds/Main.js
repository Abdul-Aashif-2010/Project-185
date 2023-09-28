import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';
import {StatusBar} from 'expo-status-bar'
import * as FaceDetector from 'expo-face-detector';

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasCameraPermission: null,
			faces: [],
			current_filter: "crown-pic1",
			current_filter: "crown-pic2",
			current_filter: "crown-pic3",
			selected:"Crown",
			current_filter: "flower-pic1",
			current_filter: "flower-pic2",
			current_filter: "flower-pic3",
			selected:"Flower",
			current_filter: "hair-pic1",
			current_filter: "hair-pic2",
			current_filter: "hair-pic3",
			selected:"Hair",
			current_filter: "other-pic1",
			current_filter: "other-pic2",
			current_filter: "other-pic3",
			selected:"Other"
		};
		this.onFacesDetected = this.onFacesDetected.bind(this);
	}

	async componentDidMount(){
		const { status } = await Camera.requestPermissionsAsync();
		thisx.setState({ hasCameraPermission: status === "granted" });
	}

	render() {
			const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		}
		if (hasCameraPermission === false) {
			return (
				<View style={styles.container}>
					<Text>No access to camera</Text>
				</View>
			);
		}
		console.log(this.state.faces);
		return (
			<View style={styles.UpperContainer}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.headingContainer}>
					<Text style={styles.titleText}>LOOK ME</Text>
				</View>
				
				<View style={styles.MiddleContainer}>
					<Camera
						style={{ flex: 1 }}
						type={Camera.Constants.Type.front}
						faceDetectorSettings={{
							mode: FaceDetector.FaceDetectorMode.fast,
							detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
							runClassifications: FaceDetector.FaceDetectorClassifications.all,
						}}
						onFacesDetected={this.onFacesDetected}
						onFacesDetectionError={this.onFacesDetectionError}
					/>

					{this.state.faces.map(face=>{
						if(this.state.current_filter === "crown-pic1") {
							return <Filter1 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "crown-pic2") {
							return <Filter2 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "crown-pic3") {
							return <Filter3 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "flower-pic1") {
							return <Filter4	 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "flower-pic2") {
							return <Filter5 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "flower-pic3") {
							return <Filter6 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "hair-pic1") {
							return <Filter7 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "hair-pic2") {
							return <Filter8 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "hair-pic3") {
							return <Filter9 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "other-pic1") {
							return <Filter10 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "other-pic2") {
							return <Filter11 key={face.faceID} face={face} />;
						} else if(this.state.current_filter === "other-pic3") {
							return <Filter12 key={face.faceID} face={face} />;
						}
					})}

					<View style={styles.LowerContainer}>
						<View style={styles.LowerTopContainer}></View>
							<ScrollView
								contentContainerStyle={styles.filters}
								showsHorizontalScrollIndicator={false}
							>
								{Object.keys(data).map(Category => {
										<TouchableOpacity
											key={`filter-button-${filter_data.id}`}
											style={[
												styles.category,
												{
													backgroundColor:
														this.state.selected === Category
														?"#FFA384"
														:"#E7F2F8"
												}
											]}
											onPress={()=> 
												this.setState({
													selected: Category,
													current_filter: data[Category][0].id
												})
											}
										>
											<Image
												source={filter_data.src}
												style={styles.filterImage}
											></Image>
											<Text>{category}</Text>
										</TouchableOpacity>
								})}
							</ScrollView>
					</View>
				</View>
			</View>
		);
	}
}
	
styles = StyleSheet.create({
	container: {
		UpperContainer : Appname,
		LowerContainer : CameraSection,
		MiddleContainer : ActionSection,
	},
});

const filter={
	"crown-pic1":{
		src:require("../Filter_Assets/crown-pic1.png"),
		width: 3.5,
		height: 0.7,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"crown-pic2":{
		src:require("../Filter_Assets/crown-pic2.png"),
		width: 3.5,
		height: 1.2,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"crown-pic3":{
		src:require("../Filter_Assets/crown-pic3.png"),
		width: 2,
		height: 0.6,
		left: 0.36,
		right:0.15,
		top:1.5
	},
	"flower-pic1":{
		src:require("../Filter_Assets/flower-pic1.png"),
		width: 3.5,
		height: 0.7,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"flower-pic2":{
		src:require("../Filter_Assets/flower-pic2.png"),
		width: 3.5,
		height: 1.2,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"flower-pic3":{
		src:require("../Filter_Assets/flower-pic3.png"),
		width: 2,
		height: 0.6,
		left: 0.36,
		right:0.15,
		top:1.5
	},
	"hair-pic1":{
		src:require("../Filter_Assets/hair-pic1.png"),
		width: 3.5,
		height: 0.7,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"hair-pic2":{
		src:require("../Filter_Assets/hair-pic2.png"),
		width: 3.5,
		height: 1.2,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"hair-pic3":{
		src:require("../Filter_Assets/hair-pic3.png"),
		width: 2,
		height: 0.6,
		left: 0.36,
		right:0.15,
		top:1.5
	},
	"other-pic1":{
		src:require("../Filter_Assets/other-pic1.png"),
		width: 3.5,
		height: 0.7,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"other-pic2":{
		src:require("../Filter_Assets/other-pic2.png"),
		width: 3.5,
		height: 1.2,
		left: 0.46,
		right:0.15,
		top:1.5
	},
	"other-pic3":{
		src:require("../Filter_Assets/other-pic3.png"),
		width: 2,
		height: 0.6,
		left: 0.36,
		right:0.15,
		top:1.5
	}
};

const data = {
	Crown: [
		{id:"crown-pic1", src:require("../Filter_Assets/crown-pic1.png") },
		{id:"crown-pic2", src:require("../Filter_Assets/crown-pic2.png") },
		{id:"crown-pic3", src:require("../Filter_Assets/crown-pic3.png") }
	],
	Flower: [
		{id:"flower-pic1", src:require("../Filter_Assets/flower-pic1.png") },
		{id:"flower-pic2", src:require("../Filter_Assets/flower-pic2.png") },
		{id:"flower-pic3", src:require("../Filter_Assets/flower-pic3.png") }
	],
	Hairs: [
		{id:"hair-pic1", src:require("../Filter_Assets/hair-pic1.png") },
		{id:"hair-pic2", src:require("../Filter_Assets/hair-pic2.png") },
		{id:"hair-pic3", src:require("../Filter_Assets/hair-pic3.png") }
	],
	Other: [
		{id:"other-pic1", src:require("../Filter_Assets/other-pic1.png") },
		{id:"other-pic2", src:require("../Filter_Assets/other-pic2.png") },
		{id:"other-pic3", src:require("../Filter_Assets/other-pic3.png") }
	]	
};