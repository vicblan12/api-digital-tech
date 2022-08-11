CREATE TABLE users.users (
	id serial NOT NULL PRIMARY KEY,
	correo character varying(150) NOT NULL,
	passwd character varying(150) NOT NULL,
	nombre character varying(100) NOT NULL,
	apellidos character varying(100) NOT NULL,
	telefono character varying(16) NOT NULL,
	direccion character varying(100) NOT NULL,
	f_nac date NOT NULL,
	role_id integer NOT NULL DEFAULT 2000,
	created_at date NULL DEFAULT now()
);

CREATE TABLE users."role" (
	id integer NOT NULL PRIMARY KEY,
	tipo character varying(20) NOT NULL,
	description character varying(250) NULL
);

alter table users add constraint  FK_ROLE foreign key (role_id) references users.role(id);