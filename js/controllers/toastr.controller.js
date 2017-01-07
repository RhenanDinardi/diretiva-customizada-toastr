(function () {
  'use strict';

  angular
    .module('AngularStructure')
    .controller('ToastrController', ToastrController);

  ToastrController.$inject = ['$scope', '$http', 'toastr'];

  /**
   * @constructor Para mais : https://github.com/Foxandxss/angular-toastr
   * */
  function ToastrController($scope, $http, toastr) {

	// CONFIGURAÇÕES INICIAS DA TOASTR LOCALIZADAS NO APP.JS
	
	/**
	* Variables
	*/
	$scope.BO = new ToastrBusiness($http);
  
    /**
     * @description Configurações iniciais
     * */
    function init() {
		
		console.log("Hello, yes this is dog.");
		
    }
	
	
	/**
     * @description Dispara uma toastr
	 *@param {String}		_type				tipo da toastr
	 *@param {String}		_msg				mensagem a ser exibida na toastr
     * */
    $scope.callToastr = function (_type, _msg) {
		
		var _default = "Exemplo de mensagem de tipo " + _type;
			
		var msg = (_msg) ? _msg : _default;
			
		switch (_type) {
			
			case 'success' :
				
				toastr.success( msg);				
			break;
			
			case 'info' :
				
				toastr.info( msg, 'Exemplo com título');				
			break;
			
			case 'error' :
				
				toastr.error( msg);				
			break;
			
			case 'warning' :
				
				toastr.warning( msg);				
			break;
		}
		
    }
	
	/**
     * @description Limpa uma toastr
     * */
    $scope.clearToastr = function (_toastr) {
	
		//a chamada pode especificar uma toastr para ser removida da tela.
		//Sem especificaçao, limpa todas
		
		(_toastr ) ? toastr.clear(_toastr) : toastr.clear();
	}
			
    init();
  }
})();