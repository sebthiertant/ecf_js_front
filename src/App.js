import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";

function App() {
	const [users, setUsers] = useState(null);
	const [toggleModal, setToggleModal] = useState(false);
	const [deleteUserModal, setDeleteUserModal] = useState(false);
	const [deleteUserIndex, setDeleteUserIndex] = useState(null);
	const [error, setError] = useState("");

	// axios
	const axios = require("axios");

	// first useEffect to get the users list from the server
	useEffect(() => {
		axios
			.get("http://localhost:8000/users")
			.then((response) => {
				if (response.status === 200) {
					return response.data;
				} else {
					setError("Error on getting the users list from server");
				}
			})
			.then((data) => {
				setUsers(data);
			});
	}, [users]);

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

	// get the modal form and close the modal. Also add the user to the server
	const sendFormModal = (userData) => {
		let userId = users.length + 1;

		axios
			.post("http://localhost:8000/users", {
				id: userId,
				firstName: userData.firstName,
				lastName: userData.firstName,
				photoURL: userData.photoURL,
				job: userData.job,
				company: userData.company,
				address: userData.address,
				city: userData.city,
				country: userData.country,
				email: userData.email,
				phone: userData.phone,
			})
			.catch(function (error) {
				console.log("Creation user error : " + error);
			});

		setToggleModal(false);
	};

	const deleteCard = (index) => {
		setDeleteUserIndex(index);
		setDeleteUserModal(true);
	};

	const deleteUserCard = () => {
		const userList = users;
		const userId = users[deleteUserIndex].id;
		// local datas
		userList.splice(deleteUserIndex, 1);
		setUsers([...userList]);

		axios
			.delete("http://localhost:8000/users/" + userId)
			.catch(function (error) {
				console.log("Delete user error : " + error);
			});

		setDeleteUserIndex(null);
		setDeleteUserModal(false);
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
										firstName,
										lastName,
										photoURL,
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
											firstName={firstName}
											lastName={lastName}
											picture={photoURL}
											job={job}
											company={company}
											address={address}
											city={city}
											country={country}
											email={email}
											phone={phone}
											editCard={editCard}
											deleteCard={() => deleteCard(index)}
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
				sendForm={sendFormModal}
				deleteUserCard={deleteUserCard}
			></Modal>
		</>
	);
}

export default App;
