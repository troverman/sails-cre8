module.exports = {
    index: function(req, res) {

    	var testItems = [
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'},
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'}
        ];

        var this_is_a_test;

        User.find({username:'trevor'}).exec(function (err, found){
 			this_is_a_test = found;
		});


        User.find().exec(function(err, users) {
        	if (err) throw err;
            res.view({
                members: users,
                testItems: testItems,
                this_is_a_test: this_is_a_test,
            });
        });


		//same as above
     	/*User.getAll().spread(function(models) {
            res.view({
                members: models,
                testItems: testItems
            })
           	.fail(function(err) {});
        });*/
    }
};