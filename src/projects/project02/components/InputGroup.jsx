const InputGroup = ({ label, htmlFor, inputName, type, placeholder, value, onChange }) => {
    return (
        <div className="w-full flex flex-col justify-center items-start gap-3">
            <label htmlFor={htmlFor}
                className="font-semibold text-sm italic"
            >{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={inputName}
                value={value}
                onChange={onChange}
                className="w-full bg-zinc-800 rounded-lg px-3 py-1.5 border-2 border-white/20"
            />
        </div>
    );
};

export default InputGroup;