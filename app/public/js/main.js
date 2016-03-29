
function handleSucess(data,textstatus,xhr) {
	console.log('Data is: ', data);
	console.log('textstatus is: ', textstatus);
	console.log('xhr is: ', xhr);

	if (data.student.fname === "Blake") {
		$('h1').css('color','red');
		$('h1').html('User Already Exists');
	} else {
		$('h1').html('Created ' + data.student.fname);
	}
};

function handleError(xhr, textstatus, xhr) {

};

$(document).on('ready', function(){
	$('#fire').on('click', function (e) {

		console.log($('#addStudentForm').serialize());

		e.preventDefault();
		
		$.ajax({
			url:'/addstudent',
			method:'GET',
			data: $('#addStudentForm').serialize(),
			success: handleSucess,
			error: handleError,
		});
	});
});

