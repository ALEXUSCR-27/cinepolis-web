create table Usuario (
	Correo nvarchar(100) not null,
	Contraseña nvarchar(100) not null,
	Nombre nvarchar(100) not null, 
	PrimerApellido nvarchar(100) not null,
	SegundoApellido nvarchar(100) not null,
	EstadoVacunacion nvarchar (100) not null,
	Cedula nvarchar(100) not null,
	FechaNacimiento nvarchar(100) not null
)

select * from Usuario

create procedure BuscarUsuario
	as
	select * from Usuario

create procedure Registrar
	@Nombre nvarchar(100),
	@Correo nvarchar(100),
	@Contraseña nvarchar(100),
	@PrimerApellido nvarchar(100),
	@SegundoApellido nvarchar(100),
	@EstadoVacunacion nvarchar(100),
	@Cedula nvarchar(100),
	@FechaNacimiento nvarchar(100)
as
insert Usuario values (@Correo,@Contraseña,@Nombre,@PrimerApellido,@SegundoApellido,@EstadoVacunacion,@Cedula,@FechaNacimiento)
exec BuscarUsuario 

insert Usuario values ('alex@loquesea.com','1234','Alex','Sanchez','Cespedes','Incompleto','702760278','27/04/2000') 