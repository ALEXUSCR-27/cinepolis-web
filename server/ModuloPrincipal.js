var sqlize = require('./Sqlize');

var db = require ('../Database');
exports.getMovies = function (req,resp) {
	var instruction = "exec Buscarpelis";
	
	console.log(instruction);

	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			resp.json(data.recordset)
			console.log(data.recordset)
		}
	});
};

exports.login = function (req,resp) {
	instruction = "exec Users"
	
	console.log(instruction);
	console.log(req.body);

	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			resp.json(data.recordset)
			console.log(data.recordset)
		}
	});
};

exports.registro = function(req,resp) {
	instruction = "exec Registrar "+ "@Nombre = '"+req.body.Nombre+"',@Correo = '"+req.body.Correo+
	"',@Contraseña = '"+req.body.Contrasena+"',@PrimerApellido = '"+req.body.PrimerApellido+
	"',@SegundoApellido = '"+req.body.SegundoApellido+"',@EstadoVacunacion = '"+req.body.EstadoVacunacion+
	"',@Cedula = '"+req.body.Cedula+"',@FechaNacimiento = '"+req.body.FechaNacimiento+"';"

	
	console.log(instruction);
	console.log(req.body);

	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			resp.json(data.recordset)
			console.log(data.recordset)
		}
	});
};