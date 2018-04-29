function setCommande(obj, touche) {
	$(obj).hasClass('round') ? $(obj).addClass('bg-info') : $(obj).addClass('text-warning');
	$.ajax({
		type: 'GET',
		url: '/tele/'+touche,
		complete: function(data) {
			$(obj).removeClass('bg-info text-warning');
			console.log(data);
		}
	});
}

function setChannel(obj, code) {
	$.ajax({
		type: 'GET',
		url: '/tele/channel/'+code,
		complete: function(data) {
			console.log(data);
		}
	});
}