import { forwardRef, useState, useRef, useImperativeHandle } from "react";

const Input = forwardRef(({ type, value, ...props }, ref) => {
	const inputRef = useRef();

	const [fieldValue, setFieldValue] = useState(value);

	useImperativeHandle(ref, () => {
		return {
			value() {
				return inputRef.current.value;
			},
			focus() {
				inputRef.current.focus();
			},
		};
	});

	const handleChange = (event) => {
		setFieldValue(event.target.value);
	};

	return (
		<input
			ref={inputRef}
			type={type}
			value={fieldValue}
			{...props}
			onChange={handleChange}
		/>
	);
});

export default Input;
