const formateDate = (date) => {
	let dt = new Date(date)
	dt.format('DD MMM YYY')
}
export {formateDate }