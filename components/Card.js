import styled from "styled-components";
import { GoRepoForked } from "react-icons/go";
import { BiBook, BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const ContainerCard = styled.a`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	min-width: 100%;
	max-width: 350px;
	min-height: 120px;
	margin: 2rem auto;
	padding: 1rem;
	border-radius: 10px;
	background-color: rgba(37, 37, 37, 0.8);
`;

const TitleCard = styled.h2`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	color: #eeeeee;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana,
		sans-serif;
	font-weight: bold;
`;

const TextCard = styled.p`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	font-size: 1.1rem;
	color: #eeeeee;
	font-family: sans-serif;
	font-weight: bold;
`;

const SubCard = styled.h3`
	display: flex;
	align-items: center;
	color: #eeeeee;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana,
		sans-serif;
	font-size: 1rem;
	font-weight: 600;
`;

const WrapperTextCard = styled.div`
	display: flex;
	align-items: center;
`;

const IconCard = styled.p`
	font-size: 1.3rem;
	margin-right: 0.5rem;
`;

// ******* Animation *******

export default function Card({
	name,
	desc,
	techno,
	url,
	forks,
	stars,
}) {
	return (
		<>
			<ContainerCard
				as={motion.a}
				whileHover={{
					scale: 1.03,
					cursor: "pointer",
					transition: { type: "ease", duration: 0.4 },
				}}
				href={url}
				target="blank"
			>
				<TitleCard>
					<IconCard>
						<BiBook />
					</IconCard>
					{name}
				</TitleCard>
				<SubCard>{desc}</SubCard>
				<TextCard>
					<WrapperTextCard>
						<IconCard>
							<BiCodeAlt />
						</IconCard>
						{techno}
					</WrapperTextCard>
					<WrapperTextCard>
						<IconCard>
							<GoRepoForked />
						</IconCard>
						{forks}
					</WrapperTextCard>
					{stars}
				</TextCard>
			</ContainerCard>
		</>
	);
}
