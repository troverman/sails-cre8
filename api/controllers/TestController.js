module.exports = {
    index: function(req, res) {

    	var testItems = [
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'},
            {whatup: 'hello!', mhm: 'awww-yis', soo: '1234'}
        ];

        User.findAll().done(function(err, applicants) {
            res.view({
                members: members
            });
        });


        /*res.view(testItems: testItems);*/
        //res.view({
            //testItems: testItems
        //});
    }
};