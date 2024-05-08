const hasPartialValue = (value, object) => {
	let result = false;
	for (const key in object) {
		if (object[key] && object[key].toLowerCase().includes(value.toLowerCase())) {
			result = true;
			break;
		}
	}
	return result;
};

export { hasPartialValue };
