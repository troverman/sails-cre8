module.exports = {
    index: function(req, res) {

    	var testItems = [
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'},
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'}
        ];

        User.findAll().done(function(err, users) {
            res.view({
                members: users
            });
        });

		/*User.getAll()
		.spread(function(err, models) {
			res.view({
				members: models
			});
		});*/

        /*res.view(testItems: testItems);*/
        //res.view({
            //testItems: testItems
        //});

		//var test = User.getAll();
		//var test1 = User.findAll();
    }
};