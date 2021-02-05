function goto(url) {
	uni.navigateTo({
		url:url
	})
}

module.exports = {
	goto:goto,
	vuemixin:{
		created: function () { console.log(1) }
	}
}