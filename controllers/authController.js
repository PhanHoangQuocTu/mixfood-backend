class authController {
    //post : create account
    signUp(req, res){
        res.send('post sign up')
    }
}

module.exports = new authController;