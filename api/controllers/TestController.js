module.exports = {
    index: function(req, res) {

    	var testItems = [
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'},
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'}
        ];

        //User.findAll().done(function(err, users) {
            //res.view({
                //members: users
            //});
        //});

		User.getAll()
		.done(function(err, models) {
			res.view({
				members: models
			});
		});

        /*res.view(testItems: testItems);*/
        //res.view({
            //testItems: testItems
        //});
    }
};