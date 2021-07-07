const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'yasin'){
        req.user = {name:'john',id:1}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    // console.log('authorize')
    // next()
}

module.exports = authorize