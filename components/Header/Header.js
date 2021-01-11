import styled from "styled-components";
import { BiLinkAlt } from "react-icons/bi";
import {
	RiLinkedinFill,
	RiCodepenFill,
	RiMailSendFill,
} from "react-icons/ri";
import { MdLocationOn, MdPersonAdd } from "react-icons/md";
import { motion } from "framer-motion";

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	min-width: 40%;
	max-width: 100%;
	min-height: 40vh;
	max-height: 100vh;
	margin: 0 auto;
	padding-bottom: 1rem;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
		"Helvetica Neue", sans-serif;
	font-weight: bold;
`;

const HeaderImage = styled.img`
	width: 150px;
	height: 150px;
`;
const HeaderLink = styled.a`
	font-size: clamp(1.4rem, 4vw, 2rem);
	font-weight: normal;
	color: #eeeeee;
	padding-bottom: 0.2rem;
	border-bottom: 2px solid #eeeeee;
`;

const HeaderWebsite = styled.a`
	display: flex;
	align-items: center;
	color: #eeeeee;
	font-size: clamp(1rem, 5vw, 1.2rem);
	&:hover {
		text-decoration: underline;
	}
`;

const HeaderText = styled.p`
	display: flex;
	align-items: center;
	color: #eeeeee;
	font-size: clamp(1rem, 5vw, 1.2rem);
`;

const HeaderLinkIcon = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const HeaderIcon = styled.a`
	font-size: 1.5rem;
	color: #eeeeee;
	padding: 0.3rem;
	cursor: pointer;
`;

export const Header = ({ logo, name, url }) => {
	return (
		<HeaderContainer>
			<HeaderImage src={logo} />
			<HeaderLink href={url} target="blank">
				@{name}
			</HeaderLink>
			<HeaderWebsite
				href="https://samirelgodzilla.com"
				target="blank"
			>
				<BiLinkAlt /> https://samirelgodzilla.com
			</HeaderWebsite>
			<HeaderText>
				<MdLocationOn />
				Europe
			</HeaderText>
			<HeaderText>
				<MdPersonAdd />
				Available for any project
			</HeaderText>
			<HeaderLinkIcon>
				<HeaderIcon
					as={motion.a}
					whileHover={{
						scale: 1.1,
						transition: {
							type: "ease",
							duration: 0.3,
							yoyo: 100,
						},
					}}
					href="https://www.linkedin.com/in/samir-el-mabtouti-871562197/"
					target="blank"
				>
					<RiLinkedinFill />
				</HeaderIcon>
				<HeaderIcon
					as={motion.a}
					whileHover={{
						scale: 1.1,
						transition: {
							type: "ease",
							duration: 0.3,
							yoyo: 100,
						},
					}}
					href="https://codepen.io/ElGodzilla06"
					target="blank"
				>
					<RiCodepenFill />
				</HeaderIcon>
				<HeaderIcon
					as={motion.a}
					whileHover={{
						scale: 1.1,
						transition: {
							type: "ease",
							duration: 0.3,
							yoyo: 100,
						},
					}}
					href="mailto:elgodzilla@protonmail.com"
				>
					<RiMailSendFill />
				</HeaderIcon>
			</HeaderLinkIcon>
		</HeaderContainer>
	);
};
