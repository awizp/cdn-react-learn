const InputField = ({ name, label, type, placeholder, value, onChange }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={name}
                className="text-gray-600 font-semibold text-sm italic"
            >
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="bg-white px-3 py-2 rounded-lg border-2 border-black/20 outline-none"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;