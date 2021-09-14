"use strict";

var routes = require("next-routes")();
//the parantesis at the end shows that this module returns a function instead of a class. and this function is immediately invoked.

routes.add("/stores/new", "stores/new").add("/stores/:address", "/stores/show").add("/stores/:address/products", "stores/products/index").add("/stores/:address/products/new", "/stores/products/new").add("/stores/:address/products/review", "/stores/products/review");

//The order of add mehtods are important!
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBOztBQUVBLE9BQ0csQUFESCxJQUNPLEFBRFAsZUFDc0IsQUFEdEIsY0FFRyxBQUZILElBRU8sQUFGUCxvQkFFMkIsQUFGM0IsZ0JBR0csQUFISCxJQUdPLEFBSFAsNkJBR29DLEFBSHBDLHlCQUlHLEFBSkgsSUFJTyxBQUpQLGlDQUl3QyxBQUp4Qyx3QkFLRyxBQUxILElBS08sQUFMUCxvQ0FLMkMsQUFMM0M7O0FBT0E7QUFDQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tZWhyZGFkX3dvcmsvd29ya19zcGFjZS9zdG9yZV92MiJ9