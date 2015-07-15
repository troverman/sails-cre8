angular.module('models.member', ['lodash', 'services', 'sails.io',])

.service('MemberModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('user');
        return $sailsSocket.get(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});