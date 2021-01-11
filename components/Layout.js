import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import useSWR from "swr";
import { Header } from "./Header/Header";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`;

const fetcher = (url) =>
	fetch(url).then((res) => res.json());

export default function Layout({ children, page }) {
	const { data, error } = useSWR("./api/github", fetcher);
	// const numProjects = data?.numProjects;
	const avatar = data?.avatar;
	const name = data?.name;
	const gitUrl = data?.gitUrl;

	return (
		<>
			<Head>
				<title>{page}</title>
			</Head>
			<GlobalStyle />
			<Container>
				<Header logo={avatar} name={name} url={gitUrl} />
				{children}
			</Container>
		</>
	);
}
