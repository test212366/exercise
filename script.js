const submit = document.getElementById('submit'),
	firstSvetRed = document.getElementById('red-first'),
	firstSvetYellow = document.getElementById('yellow-first'),
	firstSvetGreen = document.getElementById('green-first'),
	secondSvetRed = document.getElementById('red-second'),
	secondSvetGreen = document.getElementById('green-second'),
	timer = document.getElementById('timer')


firstSvetGreen.classList.add('active')
secondSvetRed.classList.add('active')


function nextSvet() {
	submit.disabled = true
	const promise = new Promise(function (resolve, reject) {
		setTimeout(() => {
			firstSvetGreen.classList.remove('active')
			firstSvetYellow.classList.add('active')
			resolve()
		}, 5000)
	})
	promise.then(nextSvet2)

}
async function nextSvet2() {
	await setTimeout(() => {
		firstSvetYellow.classList.remove('active')
	}, 1000)

	await setTimeout(() => {
		firstSvetRed.classList.add('active')
		secondSvetRed.classList.remove('active')
		secondSvetGreen.classList.add('active')
	}, 1000)
	await setTimeout(() => {
		secondSvetGreen.classList.remove('active')
		secondSvetRed.classList.add('active')
		firstSvetRed.classList.remove('active')
		firstSvetGreen.classList.add('active')

	}, 15000)
	await setTimeout(() => {
		submit.disabled = false
	}, 60000)

}

submit.addEventListener('click', nextSvet)
