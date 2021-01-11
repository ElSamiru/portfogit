import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import { Header } from "./Header/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`;

export default function Layout({ children, page }) {
	const [gits, setGits] = useState([]);

	useEffect(() => {
		fetchGit();
	}, []);

	async function fetchGit() {
		const req = await fetch(
			"https://api.github.com/users/ElGodzilla"
		);
		const res = await req.json();
		setGits(res);
	}

	return (
		<>
			<Head>
				<title>{page}</title>
			</Head>
			<GlobalStyle />
			<Container>
				<Header
					name={gits.login}
					logo={gits.avatar_url}
					url={gits.html_url}
				/>
				{children}
			</Container>
		</>
	);
}
