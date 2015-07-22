module.exports = {
    index: function(req, res) {

    	var testItems = [
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'},
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'}
        ];

        var member_array = [];


        /*User.find().exec(function(err, users) {

        	if (err) throw err;

            res.view({
                members: users
            });

        });*/

		//same as above
     	User.getAll().spread(function(models) {

     		member_array.push(models);

            //res.view({
                //members: models,
                //testItems: testItems
            //});
        });

        res.view({
            testItems: testItems,
            members: member_array,
        });

    }
};