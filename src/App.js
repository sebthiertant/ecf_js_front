import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Users from "./datas/users.json";

function App() {
	const [users, setUsers] = useState(null);

	// first useEffect to put the json datas into a local state
	useEffect(() => {
		setUsers(Users);
	}, []);

	// Add user button click
	const onAddButtonClick = () => {
		console.log("add button");
	};

	return (
		<div className="App">
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
									/>
								);
						  })
						: "[Chargement en cours]"}
				</div>
			</div>
		</div>
	);
}

export default App;
