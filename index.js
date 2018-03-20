console.log("hey this is working")
console.log($ + "jQuery is working")
$(document).ready(function(){
    console.log('doc is ready');
    $.get('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts')

        .then(function(data) {
                console.log(data.data);
                console.log(data.data.length);
                var i =  randomize(0,5)
                console.log(i);
                 $('button').click(function(){
                     $('.name').text(data.data[i].name)
                     $('.phone').text(data.data[i].phone)
                     $('.message').text(data.data[i].message)
                     $('.image-holder').attr('src', data.data[i].imageURL);                           
        })
      }
    )
})
function randomize(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}