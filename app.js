(function() {

    var app = angular.module("gemStore", []);

    //----------------Controller-----------------------//

    app.controller("StoreController", function($scope) {
            //-----------Function to add or likes dislikes----//
            $scope.books = [{

              //----------------Objects-----------------------//
              name: "Vernon Subutex T.1",
              author: "VIRGINIE DESPENTES",
              price: 8,
              description: "LE RETOUR DE VIRGINIE DESPENTES - Prix Landerneau du roman 2015",
              image: "assets/img/vs01.jpg",
              like: 0,
              dislike: 0,
              id: 01,
              comments: [{
                image: "assets/img/client1",
                author: "Sarah",
                comment: "super bouquin!",
              }, {
                image: "assets/img/client2",
                author: "Anonyme",
                comment: "Excellent livre à mettre entre toutes les mains de gens doués d'un conscience sereine"
              }],
              citations: [{
                title: "Elle s’habille chez Zara, quand elle trouve quelque chose à sa taille. Elle se passionne pour l’huile d’olive, le thé vert, elle s’est abonnée à Télérama et elle parle de recettes de cuisine, au boulot, avec ses collègues. Elle a fait tout ce que ses parents désiraient qu’elle fasse. Sauf qu’elle n’a pas eu d’enfant, alors le reste, ça ne compte pas. Aux repas de famille, elle fait tache. Ses efforts n’ont pas été récompensés. "
              }, {
                title: "Passé un certain âge, on ne se sépare plus des morts, on reste dans leur temps, en leur compagnie."
              }]


            }, {
              name: "Vernon Subutex T.2",
              author: "VIRGINIE DESPENTES",
              price: 8,
              description: "LE RETOUR DE VIRGINIE DESPENTES - Prix Landerneau du roman 2015",
              image: "assets/img/vs02.jpg",
              like: 0,
              dislike: 0,
              id: 02,
              comments: [],
              citations: []

            }, {
              name: "Maintenant qu'il fait tout le temps nuit sur toi",
              author: "MATHIAS MALZIEU",
              price: 8,
              description: "Coup de coeur des libraires!",
              image: "assets/img/mqfn.jpg",
              like: 0,
              dislike: 0,
              id: 03,
              comments: [],
              citations: []
            }, ]
        $scope.plusOne = function(index) {
            $scope.books[index].like += 1;
        }
        $scope.minusOne = function(index) {
            $scope.books[index].dislike += 1;
        }
    });

})();
