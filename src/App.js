import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";

function App() {
	const [users, setUsers] = useState(null);
	const [toggleModal, setToggleModal] = useState(false);
	const [deleteUserModal, setDeleteUserModal] = useState(false);
	const [deleteUserIndex, setDeleteUserIndex] = useState(null);
	const [editUserData, setEditUserData] = useState(null);
	const [nextId, setNextId] = useState(null);
	const [error, setError] = useState("");
	const [modalInputs, setModalInputs] = useState({
		firstName: "",
		lastName: "",
		photoURL: "",
		job: "",
		company: "",
		address: "",
		city: "",
		country: "",
		email: "",
		phone: "",
	});

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
	}, [axios, users]);

	// Add user button click
	const onAddButtonClick = () => {
		if (users === [] || users.length === 0) {
			setNextId(1);
		} else if (nextId <= 1) {
			let usersLength = users.length;
			setNextId(users[usersLength - 1].id + 1);
		} else {
			setNextId(nextId + 1);
		}

		setToggleModal(true);
	};

	// Close modal window if open
	const closeModal = () => {
		setModalInputs({
			firstName: "",
			lastName: "",
			photoURL: "",
			job: "",
			company: "",
			address: "",
			city: "",
			country: "",
			email: "",
			phone: "",
		});
		setToggleModal(false);
		setDeleteUserModal(false);
		setEditUserData(null);
	};

	// Edit user card button function
	const editCard = (index) => {
		const editUser = users[index];
		setToggleModal(true);
		setEditUserData(editUser);
		setModalInputs(editUser);
	};

	// send edited user form to the server
	const editedSendForm = () => {
		axios
			.patch("http://localhost:8000/users/" + modalInputs.id, {
				id: modalInputs.id,
				firstName: modalInputs.firstName,
				lastName: modalInputs.lastName,
				photoURL: modalInputs.photoURL,
				job: modalInputs.job,
				company: modalInputs.company,
				address: modalInputs.address,
				city: modalInputs.city,
				country: modalInputs.country,
				email: modalInputs.email,
				phone: modalInputs.phone,
			})
			.catch(function (error) {
				console.log(`Editing user ${modalInputs.id} error :  + ${error}`);
			});

		setToggleModal(false);
		setEditUserData(null);
		setModalInputs({
			firstName: "",
			lastName: "",
			photoURL: "",
			job: "",
			company: "",
			address: "",
			city: "",
			country: "",
			email: "",
			phone: "",
		});
	};

	const onInputChange = (name, value) => {
		// made a local copy to change the values into it
		let tempInputState = modalInputs;
		tempInputState[name] = value;
		setModalInputs(tempInputState);
	};

	// get the modal form and close the modal. Also add the user to the server
	const sendFormModal = () => {
		axios
			.post("http://localhost:8000/users", {
				id: nextId,
				firstName: modalInputs.firstName,
				lastName: modalInputs.lastName,
				photoURL: modalInputs.photoURL,
				job: modalInputs.job,
				company: modalInputs.company,
				address: modalInputs.address,
				city: modalInputs.city,
				country: modalInputs.country,
				email: modalInputs.email,
				phone: modalInputs.phone,
			})
			.catch(function (error) {
				console.log("Creation user error : " + error);
			});
		setToggleModal(false);
		setEditUserData(null);
		setModalInputs({
			firstName: "",
			lastName: "",
			photoURL: "",
			job: "",
			company: "",
			address: "",
			city: "",
			country: "",
			email: "",
			phone: "",
		});
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
						{error ? <h1>Error : {error}</h1> : <h1>USERS LIST</h1>}
					</div>
					<div className="top_button_container">
						<Button
							content="Add user"
							onClick={onAddButtonClick}
							icon="true"
							disabled={users === null}
						/>
					</div>
					<div className="users_cards_container">
						{users ? (
							users.map((user, index) => {
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
										editCard={() => editCard(index)}
										deleteCard={() => deleteCard(index)}
										modalOpen={toggleModal}
									/>
								);
							})
						) : (
							<p>Chargement des utilisateurs en cours</p>
						)}
					</div>
				</div>
			</div>
			<Modal
				toggle={toggleModal}
				closeModal={closeModal}
				deleteUserModal={deleteUserModal}
				sendForm={sendFormModal}
				deleteUserCard={deleteUserCard}
				onInputChange={onInputChange}
				editUserModal={editUserData}
				editedSendForm={editedSendForm}
			></Modal>
		</>
	);
}

export default App;
