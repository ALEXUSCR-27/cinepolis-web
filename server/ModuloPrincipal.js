var sqlize = require('./Sqlize');

var db = require ('../Database');
exports.getMovies = function (req,resp) {
	var instruction = "exec BuscarPeliculas";
	
	console.log(instruction);

	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			resp.json(data.recordset)
		}
	});
};