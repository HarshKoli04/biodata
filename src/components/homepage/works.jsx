import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./gleefiy_logo.jpg"
								alt="gleefiy"
								className="work-image"
							/>
							<div className="work-title">Gleefiy</div>
							<div className="work-subtitle">
								SDE Intern
							</div>
							<div className="work-duration">Nov 2024 - Feb 2025</div>
						</div>

						<div className="work">
							<img
								src="./hfc_logo.jpg"
								alt="HFC"
								className="work-image"
							/>
							<div className="work-title">Help For Coders</div>
							<div className="work-subtitle">
								SEO Intern
							</div>
							<div className="work-duration">Jan 2022 - Mar 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
