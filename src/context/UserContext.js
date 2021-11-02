import React, { useState } from "react";
const UserContext = React.createContext();

export const UserProvider = (props) => {
	const [user, setUser] = useState({});
	const [searchProduct, setSearchProduct] = useState({
		query: "",
		products: [],
	});

	return (
		<UserContext.Provider
			value={{ user, setUser, searchProduct, setSearchProduct }}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContext;
