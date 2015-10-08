$(document).on('ready', function(){
	$('#fire').on('click', function (e) {
		e.preventDefault();
		console.log('Hello World');
		$.ajax({
			url:'/addstudent',
			method:'POST'
		});
	});
});

