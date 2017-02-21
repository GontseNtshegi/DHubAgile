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
    'ngStorage'
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
  .controller('MainCtrl', ["$scope", "$localStorage", function ($scope,$localStorage) {
   
    
    /*********************** LOCAL STORAGE ***************************************/
    this.load=function(first){
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
        if(first==="1")
        {
            $localStorage.cloudUserStories=this.UserStories;
            this.data = $localStorage.cloudUserStories;
        }
      
     
  };
    /*********************** END OF LOCAL STORAGE ***************************************/
    
    /***** variables for CRUD ****/
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
          for(var j=0;j<$localStorage.cloudUserStories.length;j++)//traverse through the user stories
          {
              if($localStorage.cloudUserStories[j] === this.currentUserStory)//if the user story we want to update is found
              {
                  this.editedUserStory.status=this.editedUserStory.status.name;//change the status to the current convention
                  this.editedUserStory.assignedTo=this.editedUserStory.assignedTo.name;//change the status to the current convention
                  $localStorage.cloudUserStories[j]=angular.copy(this.editedUserStory);//copy the changes into the old user story
                  j=$localStorage.cloudUserStories.length;//end the loop
              }
          }    
       this.clearForm();//reset the html form
       
       
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
         $localStorage.cloudUserStories.push({
            "id":Math.floor(Math.random()*100)+1,
            "title":this.editedUserStory.title,
            "description":this.editedUserStory.description,
            "category":this.editedUserStory.category,
            "status":this.editedUserStory.status.name,
            "assignedTo":this.editedUserStory.assignedTo.name,
            "type":this.editedUserStory.type,
            "estimate":this.editedUserStory.estimate
        });
         this.clearForm();
     };
     
     /* Method to delete a story */
     this.delete=function(userStory)
     {
          alert("Are you sure you want to delete this user story ?");
          for(var i=0;i<$localStorage.cloudUserStories.length;i++)
          {
              if($localStorage.cloudUserStories[i].id === userStory.id && $localStorage.cloudUserStories[i].title===userStory.title)
              {
                  delete $localStorage.cloudUserStories[i];
                  i=$localStorage.cloudUserStories.length;
              }
          }
        
        
     };
  }]);

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

angular.module('DHubAgile').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/CRUD.html',
    "<div class=\"container\" id=\"cont\" ng-controller=\"LoginCtrl\"> <form name=\"loginForm\" ng-submit=\"Login()\"> <h3>Login</h3> <div class=\"login\"> <label>username</label> <input type=\"text\" ng-model=\"username\" ng-required=\"username\"> <label>password</label> <input type=\"text\" ng-model=\"password\" ng-required=\"password\"> <input type=\"submit\" id=\"submit\" value=\"submit\"> </div> </form> </div>"
  );


  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"user-story-display-area\" ng-init=\"main.load('1')\"> <div class=\"user-story-display-wrapper\"> <ul class=\"cols\" ng-repeat=\"status in ::main.statuses\"> <h3 class=\"colStatus\">{{::status.name}}</h3> <hr> <li class=\"userstory\" ng-repeat=\"userstory in main.data | filter:{status:status.name}\" ng-click=\"main.setCurrentUserStory(userstory)\"> <div class=\"papercuts\"> <article> <div> <button type=\"button\" class=\"close\" ng-click=\"main.delete(userstory)\">x</button> <p class=\"title\">{{userstory.title}}</p> </div> <div class=\"type-bar {{userstory.type}}\"> </div> <div> <p>{{userstory.description}}</p> </div> </article> </div> </li> </ul> </div> </div> <div class=\"selectedStory\"> <h3 class=\"coluser\">User Story Details</h3> <form name=\"main.userStoryDetailsForm\"> <div class=\"form-group\"> <div class=\"controls\"> </div> <div> <label ng-required=\"true\">Title</label> <input type=\"text\" ng-model=\"main.editedUserStory.title\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"50\" class=\"form-control\"> <label ng-required=\"true\">Status</label> <select id=\"status\" name=\"status\" ng-required=\"true\" ng-options=\"status as status.name for status in main.statuses track by status.id\" class=\"form-control\" ng-model=\"main.editedUserStory.status\" ng-value=\"\"> <label ng-required=\"true\">Description</label> <textarea ng-model=\"main.editedUserStory.description\" rows=\"3\" cols=\"35\" id=\"desc\"></textarea> <label ng-required=\"true\">Assign to</label> <select id=\"teamMember\" name=\"teamMember\" ng-model=\"main.editedUserStory.assignedTo\" ng-required=\"true\" ng-options=\"member as member.name for member in main.teamMembers track by member.id\" class=\"form-control\"> <label ng-required=\"true\">Estimate</label> <input type=\"time\" ng-model=\"main.editedUserStory.estimate\" ng-rquired=\"true\" placeholder=\"HH:mm:ss\" min=\"00:00:00\" max=\"23:59:59\"> <label ng-required=\"true\">Type</label> <input type=\"text\" ng-model=\"main.editedUserStory.type\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"50\" class=\"form-control\"> <label ng-required=\"true\">Category</label> <input type=\"text\" ng-model=\"main.editedUserStory.category\" ng-required=\"true\" ng-minlength=\"2\" ng-maxlength=\"50\" class=\"form-control\"> <p> <div ng-if=\"main.currentUserStory\"> <button class=\"btn btn-lg btn-success\" id=\"cancel\" ng-click=\"main.cancel()\"><label class=\"Label\">Cancel</label></button> <button class=\"btn btn-lg btn-success\" id=\"update\" ng-click=\"main.update()\"><label class=\"Label\">Update user story</label></button> </div> <div ng-if=\"!main.currentUserStory\"> <button class=\"btn btn-lg btn-success\" id=\"create\" ng-disabled=\"!main.userStoryDetailsForm.$valid\" ng-click=\"main.create()\"> Create user story </button> </div> </div> </div> </form> </div>"
  );


  $templateCache.put('views/projects.html',
    "<p>This is the projects view.</p>"
  );

}]);
