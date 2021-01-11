import Layout from "../components/Layout";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProjectTitle = styled.h1`
	color: #eeeeee;
	font-size: 4rem;
	font-weight: bolder;
	min-width: 30%;
	max-width: 80%;
	margin: 0 auto;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
		"Helvetica Neue", sans-serif;
`;

const ProjectContainer = styled.div`
	min-width: 60%;
	max-width: 100%;
	margin: 0 auto;
`;

const ProjectWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	min-width: 30%;
	margin: 0 auto;
	max-width: 80%;
`;

export default function Home() {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchRepos();
	}, []);

	async function fetchRepos() {
		const req = await fetch(
			"https://api.github.com/users/ElGodzilla/repos"
		);
		const res = await req.json();
		setRepos(res);
		setLoading(false);
	}

	return (
		<Layout page={"My Portfogit"}>
			<ProjectContainer>
				<ProjectTitle>Work_</ProjectTitle>
				<ProjectWrapper>
					{loading ? (
						<div>Loading ...</div>
					) : (
						repos.map((repo) => (
							<Card
								key={repo.id}
								name={repo.name}
								desc={repo.description}
								techno={repo.language}
								url={repo.html_url}
								forks={repo.forks}
							/>
						))
					)}
				</ProjectWrapper>
			</ProjectContainer>
		</Layout>
	);
}
