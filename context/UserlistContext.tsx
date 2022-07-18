import React, { FC, useState } from 'react';
import { User } from '../types/user';

type UserlistContexttype={
    userslist:User
    updateUserslist:(qustionlist: User) => void;
}

export const UserlistContext = React.createContext<UserlistContexttype>({
	userslist: {},
	updateUserslist: (qustionlist: User) => {},

});

interface UserProviderProps {
	children: React.ReactNode;
}

const UserlistProvider: FC<UserProviderProps> = ({ children }) => {
	const [userslist, setUserslist] = useState<User>({});


	const updateUserslist = (userlist: User) => {
		setUserslist(userlist);
	};


	const contextValue: UserlistContexttype = {
		userslist,
        updateUserslist
	};

	return <UserlistContext.Provider value={contextValue}>{children}</UserlistContext.Provider>;
};

export default UserlistProvider;