import React from "react";
import Button from "../Button/Button";

const Modal = (props) => {
	const {
		toggle,
		closeModal,
		deleteUserModal,
		editUserModal,
		sendForm,
		deleteUserCard,
		onInputChange,
	} = props;

	return (
		<>
			{toggle && (
				<div className="modal_container">
					<h1>Add User</h1>
					<span className="exit_modal_button" onClick={closeModal}>
						X
					</span>
					<div className="form_container">
						<form>
							<label>
								First Name
								<input
									type="text"
									name="firstName"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Last Name
								<input
									type="text"
									name="lastName"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Photo URL
								<input
									type="url"
									name="photoURL"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Job
								<input
									type="text"
									name="job"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Company
								<input
									type="text"
									name="company"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Address
								<input
									type="text"
									name="address"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								City
								<input
									type="text"
									name="city"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Country
								<input
									type="text"
									name="country"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								E-mail
								<input
									type="email"
									name="email"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Phone
								<input
									type="number"
									name="phone"
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
						</form>
					</div>
					<div className="buttons_container">
						<span className="cancel_button" onClick={closeModal}>
							Cancel
						</span>
						<Button content={"Confirm"} onClick={sendForm} />
					</div>
				</div>
			)}
			{editUserModal && (
				<div className="modal_container">
					<h1>Modify User</h1>
					<span className="exit_modal_button" onClick={closeModal}>
						X
					</span>
					<div className="form_container">
						<form>
							<label>
								First Name
								<input
									type="text"
									name="firstName"
									value={editUserModal.firstName}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Last Name
								<input
									type="text"
									name="lastName"
									value={editUserModal.lastName}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Photo URL
								<input
									type="url"
									name="photoURL"
									value={editUserModal.photoURL}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Job
								<input
									type="text"
									name="job"
									value={editUserModal.job}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Company
								<input
									type="text"
									name="company"
									value={editUserModal.company}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Address
								<input
									type="text"
									name="address"
									value={editUserModal.address}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								City
								<input
									type="text"
									name="city"
									value={editUserModal.city}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Country
								<input
									type="text"
									name="country"
									value={editUserModal.city}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								E-mail
								<input
									type="email"
									name="email"
									value={editUserModal.email}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
							<label>
								Phone
								<input
									type="text"
									name="phone"
									value={editUserModal.phone}
									onChange={(e) => onInputChange(e.target.name, e.target.value)}
								></input>
							</label>
						</form>
					</div>
					<div className="buttons_container">
						<span className="cancel_button" onClick={closeModal}>
							Cancel
						</span>
						<Button content={"Confirm"} onClick={sendForm} />
					</div>
				</div>
			)}
			{deleteUserModal && (
				<div className="modal_container delete_modal">
					<h1>Delete User</h1>
					<p>Are you sure you want to delete this user ?</p>
					<div className="buttons_container">
						<span className="cancel_button" onClick={closeModal}>
							Cancel
						</span>
						<Button content={"Confirm"} onClick={deleteUserCard} />
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
