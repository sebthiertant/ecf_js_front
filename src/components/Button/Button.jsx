import React from "react";
import { ReactComponent as AddIcon } from "../../assets/add.svg";

const Button = (props) => {
	const { onClick, content, icon, disabled } = props;

	return (
		<button className="button_primary" onClick={onClick} disabled={disabled}>
			<div className="button_primary_content">
				{icon ? (
					<>
						{" "}
						<AddIcon height="24px" width="24px" /> {content}
					</>
				) : (
					content
				)}
			</div>
		</button>
	);
};

export default Button;
