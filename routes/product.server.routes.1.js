module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');//check plurality
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/products/:productId')
	.get(products.read)
  .delete(users.requiresLogin, products.delete);

	app.route('/api/products/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);

    app.route('/products/all').get(products.listView);
    app.route('/products/new').get(products.createView);

app.param('productId', products.productById);


}
