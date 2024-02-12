import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	TextInput,
	Modal,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import * as ImagePicker from "expo-image-picker";
  import { Colors } from "./../components/styles.js";
  import { MaterialIcons } from "@expo/vector-icons";
  import { imagesDataURL } from "./../components/data.js";
  import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
  

  const Profile = ({ navigation }) => {
	const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
	const [name, setName] = useState("Eren Yeager");
	const [email, setEmail] = useState("erenyeager@gmail.com");
	const [password, setPassword] = useState("test1234");
  
	const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
	const today = new Date();
	const startDate = getFormatedDate(
	  today.setDate(today.getDate() + 1),
	  "YYYY/MM/DD"
	);
	const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
	const [startedDate, setStartedDate] = useState("12/12/2023");
  
	const handleChangeStartDate = (propDate) => {
	  setStartedDate(propDate);
	};
  
	const handleOnPressStartDate = () => {
	  setOpenStartDatePicker(!openStartDatePicker);
	};
  
	const handleImageSelection = async () => {
	  let result = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.All,
		allowsEditing: true,
		aspect: [4, 4],
		quality: 1,
	  });
  
	  console.log(result);
  
	  if (!result.canceled) {
		setSelectedImage(result.assets[0].uri);
	  }
	};
  
	function renderDatePicker() {
	  return (
		<Modal
		  animationType="slide"
		  transparent={true}
		  visible={openStartDatePicker}
		>
		  <View
			style={{
			  flex: 1,
			  alignItems: "center",
			  justifyContent: "center",
			}}
		  >
			<View
			  style={{
				margin: 20,
				backgroundColor: '#1f2661',
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 20,
				padding: 35,
				width: "90%",
				shadowColor: "#000",
				shadowOffset: {
				  width: 0,
				  height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 4,
				elevation: 5,
			  }}
			>
			  <DatePicker
				mode="calendar"
				minimumDate={startedDate}
				selected={startedDate}
				onDateChanged={handleChangeStartDate}
				onSelectedChange={(date) => setSelectedStartDate(date)}
				options={{
				  backgroundColor: '#090c29',
				  textHeaderColor: "#469ab6",
				  textDefaultColor: 'white',
				  selectedTextColor: 'white',
				  mainColor: "#469ab6",
				  textSecondaryColor: 'white',
				  borderColor: "rgba(122,146,165,0.1)",
				}}
			  />
  
			  <TouchableOpacity onPress={handleOnPressStartDate}>
				<Text style={{ color: 'white' }}>Close</Text>
			  </TouchableOpacity>
			</View>
		  </View>
		</Modal>
	  );
	}
  
	return (
	  <SafeAreaView
		style={{
		  flex: 1,
		  backgroundColor: 'white',
		  paddingHorizontal: 22,
		}}
	  >
		<View
		  style={{
			marginHorizontal: 12,
			flexDirection: "row",
			justifyContent: "center",
		  }}
		>
		  <Text>Edit Profile</Text>
		</View>
  
		<ScrollView>
		  <View
			style={{
			  alignItems: "center",
			  marginVertical: 22,
			}}
		  >
			<TouchableOpacity onPress={handleImageSelection}>
			  <Image
				source={{ uri: selectedImage }}
				style={{
				  height: 170,
				  width: 170,
				  borderRadius: 85,
				  borderWidth: 2,
				  borderColor: '#6D28D9',
				}}
			  />
  
			  <View
				style={{
				  position: "absolute",
				  bottom: 0,
				  right: 10,
				  zIndex: 9999,
				}}
			  >
				<MaterialIcons
				  name="photo-camera"
				  size={32}
				  color= '#6D28D9'
				/>
			  </View>
			</TouchableOpacity>
		  </View>
  
		  <View>
			<View
			  style={{
				flexDirection: "column",
				marginBottom: 6,
			  }}
			>
			  <Text style={{ fontWeight: 700 }} >Name</Text>
			  <View
				style={{
				  height: 44,
				  width: "100%",
				  borderColor: 'grey',
				  borderWidth: 1,
				  borderRadius: 4,
				  marginVertical: 6,
				  justifyContent: "center",
				  paddingLeft: 8,
				}}
			  >
				<TextInput
				  value={name}
				  onChangeText={(value) => setName(value)}
				  editable={true}
				/>
			  </View>
			</View>
  
			<View
			  style={{
				flexDirection: "column",
				marginBottom: 6,
			  }}
			>
			  <Text style={{ fontWeight: 700 }}>Email</Text>
			  <View
				style={{
				  height: 44,
				  width: "100%",
				  borderColor: 'grey',
				  borderWidth: 1,
				  borderRadius: 4,
				  marginVertical: 6,
				  justifyContent: "center",
				  paddingLeft: 8,
				}}
			  >
				<TextInput
				  value={email}
				  onChangeText={(value) => setEmail(value)}
				  editable={true}
				/>
			  </View>
			</View>
  
			<View
			  style={{
				flexDirection: "column",
				marginBottom: 6,
			  }}
			>
			  <Text style={{ fontWeight: 700 }}>Password</Text>
			  <View
				style={{
				  height: 44,
				  width: "100%",
				  borderColor: 'grey',
				  borderWidth: 1,
				  borderRadius: 4,
				  marginVertical: 6,
				  justifyContent: "center",
				  paddingLeft: 8,
				}}
			  >
				<TextInput
				  value={password}
				  onChangeText={(value) => setPassword(value)}
				  editable={true}
				  secureTextEntry
				/>
			  </View>
			</View>
  
			<View
			  style={{
				flexDirection: "column",
				marginBottom: 6,
			  }}
			>
			  <Text style={{ fontWeight: 700 }}>Date or Birth</Text>
			  <TouchableOpacity
				onPress={handleOnPressStartDate}
				style={{
				  height: 44,
				  width: "100%",
				  borderColor: 'grey',
				  borderWidth: 1,
				  borderRadius: 4,
				  marginVertical: 6,
				  justifyContent: "center",
				  paddingLeft: 8,
				}}
			  >
				<Text>{selectedStartDate}</Text>
			  </TouchableOpacity>
			</View>
		  </View>

  
		  <TouchableOpacity
			style={{
			  backgroundColor: '#6D28D9',
			  height: 44,
			  borderRadius: 6,
			  alignItems: "center",
			  justifyContent: "center",
			}}
		  >
			<Text
			  style={{
				color: 'white'}
			  }
			>
			  Save Change
			</Text>
		  </TouchableOpacity>
  
		  {renderDatePicker()}
		</ScrollView>
	  </SafeAreaView>
	);
  };
  
  export default Profile;