import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
	StyledContainer,
	InnerContainer,
	PageLogo,
	PageTitle,
	SubTitle,
	StyledFormArea,
	LeftIcon,
	StyledInputLabel,
	StyledTextInput,
	RightIcon,
	StyledButton,
	ButtonText,
	Colors,
	MsgBox,
	Line,
	ExtraView,
	ExtraText,
	TextLink,
	TextLinkContent
} from './../components/styles.js'; 
import {View, ActivityIndicator} from 'react-native';

const {brand, darkLight, primary} = Colors;

import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

//API Client
import axios from 'axios';

const Login = ({navigation}) => {

	const [hidePassword, setHidePassword] = useState(true);
	// const [message, setMessage] = useState();
	// const [messageType, setMessageType] = useState();

	// const handleLogin = (credentials, setSubmitting) => {
	// 	handleMessage(null);
	// 	const url = 'http://localhost:3000/user/signin'
		
	// 	axios
	// 	.post(url, credentials)
	// 	.then((response) => {
	// 		const result = response.data;
	// 		const {message, status, data} = result;
	// 		if (status !== 'SUCCESS') {
	// 			handleMessage(message, status);
	// 		} else {
	// 			navigation.navigate('Welcome', { ...data[0] });
	// 		}
	// 		setSubmitting(false);
	// 	})
	// 	.catch((error: any) => {
	// 		console.log(error);
	// 		setSubmitting(false);
	// 		handleMessage("An error occurred, please check your network");
	// 	});
	// };

	// const handleMessage = (message, type = 'FAILED') => {
	// 	setMessage(message);
	// 	setMessageType(type);
	// }

	return (
		<KeyboardAvoidingWrapper>
			<StyledContainer>
				<StatusBar style="dark" />
				<InnerContainer>
					<PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')} />
						<PageTitle> Mobile Apps </PageTitle>
						<SubTitle>Login</SubTitle>
						<Formik
						initialValues={{ email: '', password: '' }}
						// onSubmit={(values, {setSubmitting}) => {
						// 	if (values.email == '' || values.password == '') {
						// 		handleMessage('Please fill the fields');
						// 		setSubmitting(false)
						// 	} else {
						// 		handleLogin(values, setSubmitting);
						// 	}
						// }}
						onSubmit={(values) =>{
							console.log(values);
							navigation.navigate('Welcome')
						}}
						>
							{({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
							<StyledFormArea>
								<MyTextInput 
								label="Email Address"
								icon="mail"
								placeholder="blabla@gmail.com"
								placeholderTextColor={darkLight}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
								keyboardType="email-address"
								/>

								<MyTextInput 
								label="Password"
								icon="lock"
								placeholder="* * * * * * *"
								placeholderTextColor={darkLight}
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
								secureTextEntry={hidePassword}
								isPassword={true}
								hidePassword={hidePassword}
								setHidePassword={setHidePassword}
								/>
								{/* <MsgBox type={messageType}>{message}</MsgBox> */}
								<MsgBox>...</MsgBox>
								{/* {!isSubmitting && (
									<StyledButton onPress={handleSubmit}>
										<ButtonText>Login</ButtonText>
									</StyledButton>
								)}
								{isSubmitting && (
									<StyledButton disabled={true}>
										<ActivityIndicator size="large" color={primary} />
									</StyledButton>
								)} */}
								<StyledButton onPress={handleSubmit}>
									<ButtonText>Login</ButtonText>
								</StyledButton>
								<Line />
								<StyledButton google={true} onPress={handleSubmit}>
									<Fontisto name="google" color={primary} size={25} />
									<ButtonText google={true}>Sign in with Google</ButtonText>
								</StyledButton>
								<ExtraView>
									<ExtraText>Not have an account ? </ExtraText>
									<TextLink onPress={() => navigation.navigate("Signup")} >
										<TextLinkContent>Signup</TextLinkContent>
									</TextLink>
								</ExtraView>
							</StyledFormArea>
						)}	
						</Formik>
				</InnerContainer>
			</StyledContainer>
		</KeyboardAvoidingWrapper>
	);
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name={icon} size={30} color={brand} />
			</LeftIcon>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledTextInput {...props} />
			{ isPassword && (
				<RightIcon onPress={() => setHidePassword(!hidePassword)}>
					<Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={darkLight} />
				</RightIcon>
			)}
		</View>
	)
}

export default Login;