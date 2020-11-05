import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: "Welcome To WyreFitness | Home",
	description: "Best fitness products for cheap prices",
	keywords: "proteins, health, fitness",
};

export default Meta;
