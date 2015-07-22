module.exports = {
    index: function(req, res) {

    	var testItems = [
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'},
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'}
        ];

        var test = User.getAll();

        /*User.find().exec(function(err, users) {

        	if (err) throw err;

            res.view({
                members: users
            });

        });*/

        res.view({members:test});

		//User.getAll()
		//.exec(function(err, models) {
			//res.view({
				//members: models
			//});
		//});
        //res.view({
            //testItems: testItems
        //});

    }
};