import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
	InnerContainer,
	PageTitle,
	SubTitle,
	StyledFormArea,
	StyledButton,
	ButtonText,
	Line,
	WelcomeContainer,
	WelcomeImage,
	Avatar
} from './../components/styles.js';

const Welcome = ({navigation}) => {

	return (
		<>
			<StatusBar style="light" />
			<InnerContainer>
			    <WelcomeImage  resizeMode="cover" source={require('./../assets/img/img2.png')} />	
				<WelcomeContainer>
					<PageTitle welcome={true}> Welcome! </PageTitle>
					<SubTitle welcome={true}>Eren Yeager</SubTitle>
					<SubTitle welcome={true}>erenyeager@gmail.com</SubTitle>
					<StyledFormArea>
						<Line />
						<StyledButton onPress={() => {navigation.navigate('Login')}}>
							<ButtonText>Logout</ButtonText>
						</StyledButton>
						<StyledButton onPress={() => {navigation.navigate('Profile')}}>
							<ButtonText>Edit Profile</ButtonText>
						</StyledButton>
						<StyledButton onPress={() => {navigation.navigate('Location')}}>
							<ButtonText>Get Location</ButtonText>
						</StyledButton>
					</StyledFormArea>
				</WelcomeContainer>
			</InnerContainer>
		</>
	);
}

export default Welcome;