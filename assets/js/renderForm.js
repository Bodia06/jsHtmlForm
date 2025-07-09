const inputArray = [...document.querySelectorAll('form input')]

const inputsMap = {}
inputArray.forEach((input) => {
	if (input.name) {
		inputsMap[input.name] = input
	}
})

const {
	user_first_name: firstName,
	user_last_name: lastName,
	user_email: email,
	user_phone_country: phoneCountry,
	user_phone_mid_number: phoneMid,
	user_phone_last_number: phoneLast,
} = inputsMap

function cardContainer() {
	const cardContainerPart = document.createElement('div')
	cardContainerPart.classList.add('contact-form__card-container')

	const infoName = userName()
	const infoEmail = userEmail()
	const infoPhone = userPhone()

	cardContainerPart.appendChild(infoName)
	cardContainerPart.appendChild(infoEmail)
	cardContainerPart.appendChild(infoPhone)

	document.querySelector('.card-wrapper').appendChild(cardContainerPart)
}

function userName() {
	const userNamePart = document.createElement('h2')
	userNamePart.classList.add('contact-form__card-user__name')
	userNamePart.textContent = `Name | Surname: ${firstName.value} ${lastName.value}`
	return userNamePart
}

function userEmail() {
	const userEmailPart = document.createElement('p')
	userEmailPart.classList.add('contact-form__card-user__email')
	userEmailPart.textContent = `Email: ${email.value}`
	return userEmailPart
}

function userPhone() {
	const userPhonePart = document.createElement('p')
	userPhonePart.classList.add('contact-form__card-user__part')

	const fullPhone =
		`${phoneCountry.value}${phoneMid.value}${phoneLast.value}`.replace(
			/\s+/g,
			''
		)

	userPhonePart.textContent = `Phone number: ${fullPhone}`
	return userPhonePart
}

export function renderInfo() {
	const allValid = inputArray.every((input) =>
		input.classList.contains('valid')
	)
	if (allValid) {
		cardContainer()
	} else {
		alert('Please rewrite your info')
	}
}
