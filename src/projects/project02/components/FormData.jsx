import InputGroup from "./InputGroup";

const FormData = ({ formData, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-5 justify-center items-start">
            <InputGroup
                htmlFor={"name"}
                label={"Enter your fullname"}
                type={"text"}
                placeholder={"Your name here..."}
                inputName={"name"}
                value={formData.name}
                onChange={onChange}
            />
            <InputGroup
                htmlFor={"email"}
                label={"Enter your email"}
                type={"email"}
                placeholder={"user@gmail.com"}
                inputName={"email"}
                value={formData.email}
                onChange={onChange}
            />
            <InputGroup
                htmlFor={"username"}
                label={"Enter your username"}
                type={"text"}
                placeholder={"Your username here..."}
                inputName={"username"}
                value={formData.username}
                onChange={onChange}
            />
            <button type="submit"
                className="bg-purple-700 w-full px-3 py-2 flex justify-center items-center transition hover:-translate-y-0.75 cursor-pointer hover:bg-purple-600 duration-300 hover:shadow-lg rounded-lg mt-5"
            >Submit Data</button>
        </form>
    );
};

export default FormData;