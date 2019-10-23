create table usuario(
idUsuario int(11) auto_increment primary key,
nombre varchar(20),
apellido varchar(20),
tipoDocumento varchar(20),
numeroDocumento varchar(25) unique,
rol varchar(20),
email varchar(50) unique,
nombreUsuario varchar(50) unique,
contraseña varchar(20));

create table ambiente(
idAmbiente int(11) auto_increment primary key,
nombre varchar(20) unique,
capacidadAprendices int(2));

create table componente(
idComponente int(11) auto_increment primary key,
tipo enum('Aire','Iluminación','Ventilación','') DEFAULT NULL,
nombre varchar(20));

create table perfil(
idPerfil int(11) auto_increment primary key,
usuarioId int(11),
nombre varchar(20),
foreign key (usuarioId) references usuario (idUsuario));

create table compoXAmb(
idCompAmb int(11) auto_increment primary key,
ambienteId int(11),
componenteId int(11),
perfilId int(11),
estadoCompo varchar(10),
foreign key (ambienteId) references ambiente (idAmbiente),
foreign key (componenteId) references componente (idComponente),
foreign key (perfilId) references perfil (idPerfil));

create table perfCompXAmb(
idPerfCompXAmb int(11) auto_increment primary key,
perfilId int(11),
listComp varchar(20),
foreign key (perfilId) references perfil (idPerfil));

create table horario(
idHorario int(11) auto_increment primary key,
ambienteId int(11),
usuarioId int(11),
fecha date,
horaInicio time,
horaFin time,
foreign key (ambienteId) references ambiente (idAmbiente),
foreign key (usuarioId) references usuario (idUsuario))ENGINE=InnoDB DEFAULT CHARSET=latin1;
