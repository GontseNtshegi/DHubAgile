'use strict';

/**
 * @ngdoc overview
 * @name DHubAgile
 * @description
 * # DHubAgile
 *
 * Main module of the application.
 */
angular
  .module('DHubAgile', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/CRUD', {
        templateUrl: 'views/CRUD.html',
        controller: 'CrudCtrl',
        controllerAs: 'Crud'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('MainCtrl', function () {
      this.teamMembers=[{"id":"1","name":"Nick Cannon"},
                        {"id":"2","name":"Simiso Zwane"},
                        {"id":"3","name":"Catey Sime"},
                        {"id":"4","name":"Bradley Gaviria"},
                        {"id":"5","name":"Solomon Ntshegi"},
                        {"id":"6","name":"Edward Jane"}
  
      ];
      this.statuses = [{"id":"1","name":"Backlog"},
                    {"id":"2","name":"To Do"},
                    {"id":"3","name":"In Progress"},
                    {"id":"4","name":"Review"},
                    {"id":"5","name":"Deploy"}
      ];
      
    
    this.UserStories = [
        {
            "id":"1",
            "title":"Web Services",
            "description":"Integrate webservices with the application",
            "category":"SOAP",
            "status":"Backlog",
            "assignedTo":"Nick Cannon",
            "type":"Big Change",
            "estimate":""
        },
        {
            "id":"2",
            "title":"MongoDB",
            "description":"Create a document for inserting users",
            "category":"Database",
            "status":"Backlog",
            "assignedTo":"Simiso Zwane",
            "type":"Small Enhancement",
            "estimate":""
        },
        {
            "id":"3",
            "title":"User Interface",
            "description":"User should be able to access the application from any device",
            "category":"UX Design/Responsive",
            "status":"In Progress",
            "assignedTo":"Catey Sime",
            "type":"Big Change",
            "estimate":""
        },
        {
            "id":"4",
            "title":"Screen Logic",
            "description":"Separate screen logic from common reusable logic",
            "category":"Logic Layer",
            "status":"To Do",
            "assignedTo":"Bradley Gaviria",
            "type":"Big Change",
            "estimate":""
        }
        ,
        {
            "id":"5",
            "title":"Bed letter",
            "description":"Print out bed letter",
            "category":"Logic Layer",
            "status":"Review",
            "assignedTo":"Bradley Gaviria",
            "type":"Big Change",
            "estimate":""
        }
        ,
        {
            "id":"6",
            "title":"Error logs",
            "description":"Separate screen logic from common reusable logic",
            "category":"Logic Layer",
            "status":"To Do",
            "assignedTo":"Bradley Gaviria",
            "type":"Big Change",
            "estimate":""
        }
        ,
        {
            "id":"7",
            "title":"Home Page",
            "description":"Single Homepage",
            "category":"Logic Layer",
            "status":"Review",
            "assignedTo":"Bradley Gaviria",
            "type":"Big Change",
            "estimate":""
        }
        ,
        {
            "id":"8",
            "title":"Screen Logic 3",
            "description":"Extract screen logic from common reusable logic",
            "category":"Logic Layer 5",
            "status":"Deploy",
            "assignedTo":"Bradley Gaviria",
            "type":"Big Change",
            "estimate":""
        }
    ];
    
    /***** Methods for CRUD ****/
    this.currentUserStory = null;//keep the original user story
    this.editedUserStory={};// to store the edited user story
     
     /* method to call when a  user story is selected from the view */
     this.setCurrentUserStory=function(userStory)
     {
         this.currentUserStory=userStory;
         this.editedUserStory= angular.copy(this.currentUserStory);
     };
     
     /* Update user story method */
     this.update = function()
     {
         var attributes =['title','description','category','status','assignedTo','type'];
         attributes.forEach(function(attr){
             this.currentUserStory[attr] = this.editedUserStory[attr];
         });
       this.clearForm(); 
     };
     
     /* Method to Cancel */
     this.cancel = function()
     {
         this.clearForm();
     };
     
     /* Method to clear from */
     this.clearForm = function()
     {
         this.currentUserStory=null;
         this.editedUserStory =[];
         this.userStoryDetailsForm.$setPristine();
         this.userStoryDetailsForm.$setUntouched();
     };
     
     /* Method to create a new user story */
     this.create=function()
     {
         var newUserStory=angular.copy(this.editedUserStory);
         newUserStory.id=Math.floor(Math.random()*9)+1;
         this.UserStories.push(newUserStory);
         this.clearForm();
     };
     
     /* Method to delete a story */
     this.delete=function(userStoryId)
     {
        this.UserStories.remove(function(userStory)
        {
           return userStory.id===userStoryId;  
        });
     };
  });

'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('CrudCtrl', function () {
    this.currentUserStory = null;//keep the original user story
    this.editedUserStory={};// to store the edited user story
     
     /* method to call when a  user story is selected from the view */
     this.setCurrentUserStory=function(userStory)
     {
         this.currentUserStory=userStory;
         this.editedUserStory= angular.copy(this.currentUserStory);
     };
  });

'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('ProjectsCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('tangentApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/CRUD.html',
    "<div class=\"container\" id=\"cont\" ng-controller=\"LoginCtrl\"> <form name=\"loginForm\" ng-submit=\"Login()\"> <h3>Login</h3> <div class=\"login\"> <label>username</label> <input type=\"text\" ng-model=\"username\" ng-required=\"username\"> <label>password</label> <input type=\"text\" ng-model=\"password\" ng-required=\"password\"> <input type=\"submit\" id=\"submit\" value=\"submit\"> </div> </form> </div>"
  );


  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"user-story-display-area\"> <div class=\"user-story-display-wrapper\"> <ul class=\"cols\" ng-repeat=\"status in ::main.statuses\"> <h3 class=\"colStatus\">{{::status.name}}</h3> <hr> <li class=\"userstory\" ng-repeat=\"userstory in main.UserStories | filter:{status:status.name}\" ng-click=\"main.setCurrentUserStory(userstory)\"> <div class=\"papercuts\"> <article> <div> <button type=\"button\" class=\"close\" ng-click=\"main.delete(userstory.id)\">x</button> <p class=\"title\">{{userstory.title}}</p> </div> <div class=\"type-bar {{userstory.type}}\"> </div> <div> <p>{{userstory.description}}</p> </div> </article> </div> </li> </ul> </div> </div> <div class=\"selectedStory\"> <h3>User Story Details</h3> <form name=\"main.userStoryDetailsForm\"> <div class=\"form-group\"> <div class=\"controls\"> </div> <div> <label ng-required=\"true\">Title</label> <input type=\"text\" ng-model=\"main.editedUserStory.title\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"50\" class=\"form-control\"> <label ng-required=\"true\">Status</label> <select id=\"status\" name=\"status\" ng-required=\"true\" ng-options=\"status as status.name for status in main.statuses track by status.id\" class=\"form-control\" ng-model=\"main.editedUserStory.status\"> <label ng-required=\"true\">Description</label> <textarea ng-model=\"main.editedUserStory.description\" rows=\"3\" cols=\"35\" id=\"desc\"></textarea> <label ng-required=\"true\">Assign to</label> <select id=\"teamMemeber\" name=\"teamMemeber\" ng-model=\"main.editedUserStory.assignedTo\" ng-required=\"true\" ng-options=\"member as member.name for member in main.teamMembers track by member.id\" class=\"form-control\"> <label ng-required=\"true\">Estimate</label> <input type=\"time\" ng-model=\"main.editedUserStory.estimate\" ng-rquired=\"true\" placeholder=\"HH:mm:ss\" min=\"08:00:00\" max=\"17:00:00\" style=\"width: 300px;height:50px\"> <p> <div ng-if=\"main.currentUserStory\"> <button class=\"btn btn-lg btn-success\" ng-click=\"main.cancel()\" style=\"float:left;width: 100px\">Cancel</button> <button class=\"btn btn-lg btn-success\" ng-click=\"main.upadate()\" style=\"float:right;width: 200px\">Update user story</button> </div> <div ng-if=\"!main.currentUserStory\"> <button class=\"btn btn-lg btn-success\" ng-disabled=\"!main.userStoryDetailsForm.$valid\" ng-click=\"main.create()\" style=\"width:100%\"> Create user story </button> </div> </div> </div></form> </div>"
  );


  $templateCache.put('views/projects.html',
    "<p>This is the projects view.</p>"
  );

}]);
