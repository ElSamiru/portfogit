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
	const [git, setGit] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchGit();
	}, []);

	async function fetchGit() {
		const req = await fetch(
			"https://api.github.com/users/ElGodzilla"
		);
		const res = await req.json();
		setGit(res);
		setLoading(false);
	}

	return (
		<>
			<Head>
				<title>{page}</title>
			</Head>
			<GlobalStyle />
			<Container>
				{loading ? (
					<div>Loading ...</div>
				) : (
					git.map((item) => (
						<Header
							key={repo.id}
							name={item.login}
							logo={item.avata_url}
							url={item.html_url}
						/>
					))
				)}
				{children}
			</Container>
		</>
	);
}
