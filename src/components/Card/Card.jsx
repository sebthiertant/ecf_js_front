import React from "react";
import Button from "../Button/Button";
import { ReactComponent as Envelope } from "../../assets/envelope.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as MapMarker } from "../../assets/map-marker.svg";

const Card = (props) => {
	const {
		picture,
		firstName,
		lastName,
		job,
		company,
		address,
		city,
		country,
		email,
		phone,
		editCard,
		deleteCard,
		modalOpen,
	} = props;
	return (
		<div className="card_container">
			<div className="card_left_container">
				<figure>
					<img src={picture} alt="A profil" />
				</figure>
				<div className="card_left_container_content">
					<h3>
						{firstName} {lastName}
					</h3>
					<p className="job_company_p">
						{job} {"//"} {company}
					</p>
					<p>
						<MapMarker className="p_svg" height="12" width="16px" />
						{address}
					</p>
					<p>
						{city} - {country}
					</p>
					<p className="mail">
						<Envelope
							className="p_svg"
							height="21px"
							width="16px"
							margin="10rem"
						/>
						{email}
					</p>
					<p>
						<Phone className="p_svg" height="16px" width="16px" />
						{phone}
					</p>
				</div>
			</div>
			<div className="card_right_buttons_container">
				<Button onClick={editCard} content="Modify" disabled={modalOpen} />
				{modalOpen ? (
					<span className="delete_button">Delete</span>
				) : (
					<span onClick={deleteCard} className="delete_button">
						Delete
					</span>
				)}
			</div>
		</div>
	);
};

export default Card;
