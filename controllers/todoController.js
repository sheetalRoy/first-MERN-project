module.exports = function(app){
    app.get('/todo', (req,res) =>{
        res.render("todo");
    });
    app.post('/quotes', (req,res) =>{
        // res.render("todo");
        console.log('njnj');
    });
}