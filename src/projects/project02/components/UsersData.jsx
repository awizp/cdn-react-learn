import { useState, useEffect } from "react";

const UsersData = ({ usersData, isLoading, value, onChange }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const limitUsers = () => {
            setUsers([]);
            if (usersData.length <= 10) {
                setUsers(usersData);
            } else {
                for (let i = 0; i < 10; i++) {
                    const user = usersData[i];
                    setUsers((prev) => [...prev, user]);
                }
            }
        };

        limitUsers();
    }, [usersData]);



    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">

            <div className="w-full flex justify-between items-center">
                <h1 className="text-xl font-bold italic text-center">Available users</h1>

                <input
                    type="text"
                    placeholder="Search user by name"
                    className="bg-zinc-800 rounded-full px-3 py-1.5"
                    value={value}
                    onChange={onChange}
                />
            </div>

            <ul className="w-full md:w-[70%] bg-zinc-850 p-10 rounded flex flex-col justify-center items-center gap-5">
                {
                    users.map((user) => {
                        return <div key={user.id} className="w-full bg-purple-700 rounded-xl p-3 hover:bg-purple-600 hover:shadow-lg flex justify-between items-center gap-10 hover:-translate-y-0.75 transition duration-300">
                            <li className="w-full flex justify-center items-center"><p>{user.name}</p></li>
                            <li className="w-full flex justify-center items-center"><p>{user.username}</p></li>
                            <li className="w-full flex justify-center items-center"><p>{user.email}</p></li>
                        </div>;
                    })
                }

                {isLoading && <p>Loading users...</p>}
            </ul>
        </div>
    );
};

export default UsersData;