import React from "react";
import Button from "../Button/Button";

const Modal = (props) => {
	const { toggle, closeModal } = props;

	const sendForm = () => {
		console.log("form sent");
	};

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
								<input type="text" name="firstName"></input>
							</label>
							<label>
								Last Name
								<input type="text" name="lastName"></input>
							</label>
							<label>
								Photo URL
								<input type="url" name="photoURL"></input>
							</label>
							<label>
								Job
								<input type="text" name="job"></input>
							</label>
							<label>
								Company
								<input type="text" name="company"></input>
							</label>
							<label>
								Address
								<input type="text" name="address"></input>
							</label>
							<label>
								City
								<input type="text" name="city"></input>
							</label>
							<label>
								Country
								<input type="text" name="country"></input>
							</label>
							<label>
								E-mail
								<input type="email" name="email"></input>
							</label>
							<label>
								Phone
								<input type="number" name="phone"></input>
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
		</>
	);
};

export default Modal;
