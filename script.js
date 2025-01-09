

function getQuote(){
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes',
        headers: { 'X-Api-Key': ''},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

getQuote();