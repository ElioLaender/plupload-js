angular.module('pluploadjs').controller('UploadController', function($scope, $http, $timeout) {
    
    $scope.titulo = "Upload com AngularJS e Plupload";

    $scope.fileUpload = {
        url: 'http://localhost:3000/posts',
        options: {
            multi_selection: false,
            filters: {
                mime_types : [
                  { title : "XML files", extensions : "xml" }
                ],
                max_file_size: "200mb",
                prevent_duplicates: true
              }
        },
        callbacks: {
          filesAdded: function(uploader, files) {
            $scope.loading = true;
            $timeout(function() { 
              uploader.start(); 
            }, 1);
          },
          uploadProgress: function(uploader, file) {
            $scope.percentLoad = file.percent;   
            $scope.loading = file.percent/100.0;
          },
          fileUploaded: function(uploader, file, response) {
            $scope.loading = false;
            $scope.sucessMessage = 'Upload Completo!';  
          },
          error: function(uploader, error) {
            $scope.loading = false;
            if(error.code == -601) {
                console.log('Deve ser importado somente arquivo .xml');
                $scope.errorMessage = 'Deve ser importado somente arquivo .xml';
            }

          }
        }
      }

});