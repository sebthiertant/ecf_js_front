import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import Users from "./datas/users.json";

function App() {
	const [users, setUsers] = useState(null);
	const [toggleModal, setToggleModal] = useState(false);
	const [deleteUserModal, setDeleteUserModal] = useState(false);

	// first useEffect to put the json datas into a local state
	useEffect(() => {
		setUsers(Users);
	}, []);

	// Add user button click
	const onAddButtonClick = () => {
		console.log("add button");
		setToggleModal(true);
	};

	// Close modal window if open
	const closeModal = () => {
		setToggleModal(false);
		setDeleteUserModal(false);
	};

	// Cards Buttons
	const editCard = () => {
		console.log("edit button");
	};

	const deleteCard = () => {
		console.log("delete button");
		setDeleteUserModal(true);
	};

	return (
		<>
			<div
				className={
					"App " + (toggleModal || deleteUserModal ? "modal_open" : "")
				}
			>
				<div className="container">
					<div className="title_container">
						<h1>Users List</h1>
					</div>
					<div className="top_button_container">
						<Button content="Add user" onClick={onAddButtonClick} icon="true" />
					</div>
					<div className="users_cards_container">
						{users
							? users.map((user, index) => {
									const {
										photoURL,
										firstName,
										lastName,
										job,
										company,
										address,
										city,
										country,
										email,
										phone,
									} = user;
									return (
										<Card
											key={index}
											picture={photoURL}
											firstName={firstName}
											lastName={lastName}
											job={job}
											company={company}
											address={address}
											city={city}
											country={country}
											email={email}
											phone={phone}
											editCard={editCard}
											deleteCard={deleteCard}
										/>
									);
							  })
							: "[Chargement en cours]"}
					</div>
				</div>
			</div>
			<Modal
				toggle={toggleModal}
				closeModal={closeModal}
				deleteUserModal={deleteUserModal}
			></Modal>
		</>
	);
}

export default App;
