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
		.spread(function(models) {
			res.view(members: models);
		})
		.fail(function(err) {
			// An error occured
		});


        /*res.view(testItems: testItems);*/
        //res.view({
            //testItems: testItems
        //});
    }
};