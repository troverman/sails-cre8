angular.module('templates-app', ['about/index.tpl.html', 'header/index.tpl.html', 'home/index.tpl.html', 'messages/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<h1>About Sailng</h1>\n" +
    "\n" +
    "<p>Sailng is a boilerplate application that uses the latest Sails.js and Angular to easily create realtime, single page web applications.</p>\n" +
    "<p>It borrows ideas from <a href=\"https://github.com/ngbp/ngbp\">ngbp</a> and <a href=\"https://github.com/angular-app/angular-app/\">angular-app</a>.</p>");
}]);

angular.module("header/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header/index.tpl.html",
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"/home\">Sailng</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li ng-repeat=\"navItem in navItems\">\n" +
    "                <a href=\"{{navItem.url}}\"><i class=\"{{navItem.cssClass}}\"></i> {{navItem.title}}</a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li class=\"divider-vertical\"></li>\n" +
    "\n" +
    "            <li ng-if=\"currentUser\" id=\"current-user-dropdown\" class=\"dropdown\">\n" +
    "                <div class=\"btn-group\">\n" +
    "                    <a class=\"btn btn-default btn-sm dropdown-toggle\">\n" +
    "                        <i class=\"fa fa-user\"></i> {{currentUser.email}}    <span class=\"caret\"></span>\n" +
    "                    </a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a href=\"/logout\"><i class=\"fa fa-share\"></i> Logout</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            \n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<h1>Sailng</h1>\n" +
    "<p class=\"lead\">Sails.js + Angular = Awesome</p>\n" +
    "\n" +
    "<p>Read <a href=\"/about\">about</a> the project to learn more</p>\n" +
    "\n" +
    "<p><a href=\"/messages\">View all messages</a><p>");
}]);

angular.module("messages/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("messages/index.tpl.html",
    "<h2>Messages</h2>\n" +
    "<p>Open this page in two browsers and see how easy Sails.js makes realtime applications!</p>\n" +
    "\n" +
    "<p ng-show=\"!currentUser\"><a href=\"/register\">Register</a> to post a message!</p>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "			<div class=\"form-group\">\n" +
    "			<label for=\"messageTitle\">Your Message</label>\n" +
    "				<input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\" ng-disabled=\"!currentUser\">\n" +
    "			</div>\n" +
    "			<button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newMessage.title\">Submit</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<h3>All Messages</h3>\n" +
    "		<ul>\n" +
    "			<li ng-repeat=\"message in messages\">{{message.title}} <b>by</b> {{message.user.username}}, <span am-time-ago=\"message.updatedAt\"></span> <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\" ng-show=\"currentUser.id === message.user.id\"><i class=\"fa fa-trash-o\"></i></button></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>");
}]);
