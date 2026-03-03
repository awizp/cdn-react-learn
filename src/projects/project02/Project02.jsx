import { v4 as uuid } from "uuid";

import { useEffect, useState } from "react";
import FormData from "./components/FormData";
import './style.css';
import UsersData from "./components/UsersData";

const Project02 = () => {

    const [formData, setFormData] = useState({
        id: uuid(),
        name: "",
        email: "",
        username: ""
    });

    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    // setting each input value in form data,
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, id: uuid(), [name]: value }));
    };

    // submit form data of new user,
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(formData);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const URL = "https://mimic-server-api.vercel.app/users";

        const res = await fetch(URL, requestOptions);
        const data = await res.json();
        console.log(data);

        alert(`Your user data is updated, name: ${formData.name}, username: ${formData.username}`);
    };

    // get users data from api,
    useEffect(() => {
        try {
            setIsLoading(true);
            const URL = "https://mimic-server-api.vercel.app/users";
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const fetchUsersData = async () => {
                const res = await fetch(URL, requestOptions);
                const data = await res.json();
                setUsersData(data);
            };
            fetchUsersData();
        } catch (error) {
            console.log("Error fetching users data: ", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // search user by name whenever search state changes,
    useEffect(() => {
        const searchData = () => {
            if (search) {
                let newData = usersData.filter((user) => {
                    if (user.name.toLowerCase().includes(search.toLowerCase)) {
                        return user;
                    }
                });
                setUsersData(newData);
            }
        };
        searchData();
    }, [search]);


    return (
        <section className="w-full bg-black text-white p-10">
            <div className="flex flex-col gap-15 justify-center items-center">
                <div className="w-full md:w-[70%] mx-auto bg-zinc-900 p-5 rounded-xl flex flex-col gap-10 justify-center items-center">
                    <h1 className="text-2xl font-bold italic">Users Data</h1>
                    <FormData onChange={handleFormData} onSubmit={handleFormSubmit} formData={formData} />
                </div>
                <div className="w-full">
                    <UsersData isLoading={isLoading} usersData={usersData} value={search} onChange={(e) => handleSearch(e)} />
                </div>
            </div>
        </section>
    );
};

export default Project02;