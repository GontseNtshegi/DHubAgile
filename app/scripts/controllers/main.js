'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('MainCtrl', function ($scope,$localStorage) {
   
    
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
         //this.editedUserStory.assignedTo=this.editedUserStory.assignedTo.name;
         //this.editedUserStory.status=this.editedUserStory.status.name;
     };
     
     /* Update user story method */
     this.update = function()
     {
          for(var j=0;j<$localStorage.cloudUserStories.length;j++)//traverse through the user stories
          {
              if($localStorage.cloudUserStories[j] === this.currentUserStory)//if the user story we want to update is found
              {
                  this.editedUserStory.status=this.editedUserStory.status.name;//change the status to the current convention
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
            "assignedTo":this.editedUserStory.assignedTo,
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
  });
