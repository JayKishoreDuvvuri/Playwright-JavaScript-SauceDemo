class CustomReporter {
	onTestBegin(test) {
		console.log(`Test Case Started : ${test.title}`)
	}

	onTestEnd(test, result) {
		console.log(`Test Case Completed : ${test.title} Status : ${result.status}`)
	}

	onStepBegin(test, result, step) {
		if (step.category === `test.step`) {
			console.log(`Executing Step : ${step.title}`)
		}
	}

	onError(error) {
		console.log(error.message)
	}
}
module.exports = CustomReporter
