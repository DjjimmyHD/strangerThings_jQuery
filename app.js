// https://quiet-bayou-99554.herokuapp.com/api/v1/contacts

console.log('I am ready');
console.log($ + 'Jquery is up yo');
$.get('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts',function (data) {
    console.log(data.data);
    
    $('.name').text(data.data[2].name);
    $('.phone').text(data.data[2].phone);
    $('.message').text(data.data[2].message);
    $('.image-holder').attr("src",data.data[2].imageURL);
    // console.log(data.data[2]);
    // console.log(data.data[2].imageURL);
    // console.log(data.data[2].message);
    // console.log(data.data[2].phone);    
    // console.log(data.data[2].name);  
    
});

function testin(chese) {
    return("hey " + chese);

    
}
console.log(testin(1))
