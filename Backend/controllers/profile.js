const handleProfileGet = (req,res,db) => {
	const { id } = req.params;          //params property
	db.select('*').from('users').where({id})
	    .then(user =>{
	    	if(user.length){
	    		res.json(user[0]);
	    	}else{
	    		res.status(400).json('Not Found');
	    	}
	    })
	    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleProfileGet
};