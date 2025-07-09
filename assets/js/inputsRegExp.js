const INPUTS_REG_EXP = {
	user_first_name: /^[A-Z][a-z]{3,18}$/,
	user_last_name: /^[A-Z][a-z]{2,18}$/,
	user_email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	user_phone_country: /^\+\d{3}$/,
	user_phone_mid_number: /^\d{3}$/,
	user_phone_last_number: /^\d{4}$/,
}

export function inputHandler(e) {
	if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
		e.target.classList.add('valid')
		e.target.classList.remove('invalid')
	} else {
		e.target.classList.remove('valid')
		e.target.classList.add('invalid')
	}
}
