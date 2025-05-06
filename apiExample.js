$.ajax ({
    url: 'https://api.github.com/repos/ElgenJuliano/MyFirstRepository',
    success: function(response) {
        console.log(response)
    }
})