PGDMP     /            
        z            digital_tech    12.6    12.6 1    E           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            F           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            G           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            H           1262    50088    digital_tech    DATABASE     ?   CREATE DATABASE digital_tech WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Venezuela.1252' LC_CTYPE = 'Spanish_Venezuela.1252';
    DROP DATABASE digital_tech;
                postgres    false                        2615    50144    alquiler    SCHEMA        CREATE SCHEMA alquiler;
    DROP SCHEMA alquiler;
                postgres    false            
            2615    50142    clientes    SCHEMA        CREATE SCHEMA clientes;
    DROP SCHEMA clientes;
                postgres    false                        2615    50089    usuarios    SCHEMA        CREATE SCHEMA usuarios;
    DROP SCHEMA usuarios;
                postgres    false                        2615    50143 	   vehiculos    SCHEMA        CREATE SCHEMA vehiculos;
    DROP SCHEMA vehiculos;
                postgres    false            ?            1259    50153    cliente_vehiculo    TABLE       CREATE TABLE alquiler.cliente_vehiculo (
    id integer NOT NULL,
    cliente_id integer NOT NULL,
    fecha_desde date NOT NULL,
    fecha_hasta date NOT NULL,
    vehiculo_id integer NOT NULL,
    estatus_id integer DEFAULT 1 NOT NULL,
    created_at date DEFAULT now()
);
 &   DROP TABLE alquiler.cliente_vehiculo;
       alquiler         heap    postgres    false    6            ?            1259    50151    cliente_vehiculo_id_seq    SEQUENCE     ?   CREATE SEQUENCE alquiler.cliente_vehiculo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE alquiler.cliente_vehiculo_id_seq;
       alquiler          postgres    false    6    212            I           0    0    cliente_vehiculo_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE alquiler.cliente_vehiculo_id_seq OWNED BY alquiler.cliente_vehiculo.id;
          alquiler          postgres    false    211            ?            1259    50145    estatus    TABLE     g   CREATE TABLE alquiler.estatus (
    id integer NOT NULL,
    descripcion character varying NOT NULL
);
    DROP TABLE alquiler.estatus;
       alquiler         heap    postgres    false    6            ?            1259    50171    persona    TABLE     ?   CREATE TABLE clientes.persona (
    id integer NOT NULL,
    nombre character varying(250) NOT NULL,
    telefono character varying(14) NOT NULL
);
    DROP TABLE clientes.persona;
       clientes         heap    postgres    false    10            ?            1259    50169    persona_id_seq    SEQUENCE     ?   CREATE SEQUENCE clientes.persona_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE clientes.persona_id_seq;
       clientes          postgres    false    216    10            J           0    0    persona_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE clientes.persona_id_seq OWNED BY clientes.persona.id;
          clientes          postgres    false    215            ?            1259    50122    role    TABLE     ?   CREATE TABLE usuarios.role (
    id integer NOT NULL,
    tipo character varying(20) NOT NULL,
    description character varying(250)
);
    DROP TABLE usuarios.role;
       usuarios         heap    postgres    false    8            ?            1259    50120    role_id_seq    SEQUENCE     ?   CREATE SEQUENCE usuarios.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE usuarios.role_id_seq;
       usuarios          postgres    false    8    209            K           0    0    role_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE usuarios.role_id_seq OWNED BY usuarios.role.id;
          usuarios          postgres    false    208            ?            1259    50109    users    TABLE     ?  CREATE TABLE usuarios.users (
    id integer NOT NULL,
    correo character varying(150) NOT NULL,
    passwd character varying(150) NOT NULL,
    nombre character varying(100) NOT NULL,
    apellidos character varying(100) NOT NULL,
    telefono character varying(16) NOT NULL,
    direccion character varying(100) NOT NULL,
    f_nac date NOT NULL,
    role_id integer DEFAULT 2000 NOT NULL,
    created_at date DEFAULT now(),
    status boolean DEFAULT false NOT NULL
);
    DROP TABLE usuarios.users;
       usuarios         heap    postgres    false    8            ?            1259    50107    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE usuarios.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE usuarios.users_id_seq;
       usuarios          postgres    false    8    207            L           0    0    users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE usuarios.users_id_seq OWNED BY usuarios.users.id;
          usuarios          postgres    false    206            ?            1259    50160    vehiculo    TABLE     ?   CREATE TABLE vehiculos.vehiculo (
    id integer NOT NULL,
    placa character varying(8) NOT NULL,
    marca character varying NOT NULL,
    modelo character varying NOT NULL
);
    DROP TABLE vehiculos.vehiculo;
    	   vehiculos         heap    postgres    false    11            ?            1259    50158    vehiculo_id_seq    SEQUENCE     ?   CREATE SEQUENCE vehiculos.vehiculo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE vehiculos.vehiculo_id_seq;
    	   vehiculos          postgres    false    214    11            M           0    0    vehiculo_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE vehiculos.vehiculo_id_seq OWNED BY vehiculos.vehiculo.id;
       	   vehiculos          postgres    false    213            ?
           2604    50156    cliente_vehiculo id    DEFAULT     ~   ALTER TABLE ONLY alquiler.cliente_vehiculo ALTER COLUMN id SET DEFAULT nextval('alquiler.cliente_vehiculo_id_seq'::regclass);
 D   ALTER TABLE alquiler.cliente_vehiculo ALTER COLUMN id DROP DEFAULT;
       alquiler          postgres    false    211    212    212            ?
           2604    50174 
   persona id    DEFAULT     l   ALTER TABLE ONLY clientes.persona ALTER COLUMN id SET DEFAULT nextval('clientes.persona_id_seq'::regclass);
 ;   ALTER TABLE clientes.persona ALTER COLUMN id DROP DEFAULT;
       clientes          postgres    false    215    216    216            ?
           2604    50133    role id    DEFAULT     f   ALTER TABLE ONLY usuarios.role ALTER COLUMN id SET DEFAULT nextval('usuarios.role_id_seq'::regclass);
 8   ALTER TABLE usuarios.role ALTER COLUMN id DROP DEFAULT;
       usuarios          postgres    false    209    208    209            ?
           2604    50112    users id    DEFAULT     h   ALTER TABLE ONLY usuarios.users ALTER COLUMN id SET DEFAULT nextval('usuarios.users_id_seq'::regclass);
 9   ALTER TABLE usuarios.users ALTER COLUMN id DROP DEFAULT;
       usuarios          postgres    false    207    206    207            ?
           2604    50163    vehiculo id    DEFAULT     p   ALTER TABLE ONLY vehiculos.vehiculo ALTER COLUMN id SET DEFAULT nextval('vehiculos.vehiculo_id_seq'::regclass);
 =   ALTER TABLE vehiculos.vehiculo ALTER COLUMN id DROP DEFAULT;
    	   vehiculos          postgres    false    214    213    214            >          0    50153    cliente_vehiculo 
   TABLE DATA           {   COPY alquiler.cliente_vehiculo (id, cliente_id, fecha_desde, fecha_hasta, vehiculo_id, estatus_id, created_at) FROM stdin;
    alquiler          postgres    false    212   ?5       <          0    50145    estatus 
   TABLE DATA           4   COPY alquiler.estatus (id, descripcion) FROM stdin;
    alquiler          postgres    false    210   ?5       B          0    50171    persona 
   TABLE DATA           9   COPY clientes.persona (id, nombre, telefono) FROM stdin;
    clientes          postgres    false    216   46       ;          0    50122    role 
   TABLE DATA           7   COPY usuarios.role (id, tipo, description) FROM stdin;
    usuarios          postgres    false    209   o6       9          0    50109    users 
   TABLE DATA           ?   COPY usuarios.users (id, correo, passwd, nombre, apellidos, telefono, direccion, f_nac, role_id, created_at, status) FROM stdin;
    usuarios          postgres    false    207   ?6       @          0    50160    vehiculo 
   TABLE DATA           ?   COPY vehiculos.vehiculo (id, placa, marca, modelo) FROM stdin;
 	   vehiculos          postgres    false    214   ?7       N           0    0    cliente_vehiculo_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('alquiler.cliente_vehiculo_id_seq', 3, true);
          alquiler          postgres    false    211            O           0    0    persona_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('clientes.persona_id_seq', 1, true);
          clientes          postgres    false    215            P           0    0    role_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('usuarios.role_id_seq', 1, false);
          usuarios          postgres    false    208            Q           0    0    users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('usuarios.users_id_seq', 8, true);
          usuarios          postgres    false    206            R           0    0    vehiculo_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('vehiculos.vehiculo_id_seq', 2, true);
       	   vehiculos          postgres    false    213            ?
           2606    50179    estatus pk_estatus 
   CONSTRAINT     R   ALTER TABLE ONLY alquiler.estatus
    ADD CONSTRAINT pk_estatus PRIMARY KEY (id);
 >   ALTER TABLE ONLY alquiler.estatus DROP CONSTRAINT pk_estatus;
       alquiler            postgres    false    210            ?
           2606    50176    persona persona_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY clientes.persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY clientes.persona DROP CONSTRAINT persona_pkey;
       clientes            postgres    false    216            ?
           2606    50135    role role_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY usuarios.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY usuarios.role DROP CONSTRAINT role_pkey;
       usuarios            postgres    false    209            ?
           2606    50119    users users_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY usuarios.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY usuarios.users DROP CONSTRAINT users_pkey;
       usuarios            postgres    false    207            ?
           2606    50168    vehiculo vehiculo_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY vehiculos.vehiculo
    ADD CONSTRAINT vehiculo_pkey PRIMARY KEY (id);
 C   ALTER TABLE ONLY vehiculos.vehiculo DROP CONSTRAINT vehiculo_pkey;
    	   vehiculos            postgres    false    214            ?
           2606    50185    cliente_vehiculo fk_cliente    FK CONSTRAINT     ?   ALTER TABLE ONLY alquiler.cliente_vehiculo
    ADD CONSTRAINT fk_cliente FOREIGN KEY (cliente_id) REFERENCES clientes.persona(id);
 G   ALTER TABLE ONLY alquiler.cliente_vehiculo DROP CONSTRAINT fk_cliente;
       alquiler          postgres    false    216    2741    212            ?
           2606    50180    cliente_vehiculo fk_estatus    FK CONSTRAINT     ?   ALTER TABLE ONLY alquiler.cliente_vehiculo
    ADD CONSTRAINT fk_estatus FOREIGN KEY (estatus_id) REFERENCES alquiler.estatus(id);
 G   ALTER TABLE ONLY alquiler.cliente_vehiculo DROP CONSTRAINT fk_estatus;
       alquiler          postgres    false    2737    210    212            ?
           2606    50190    cliente_vehiculo fk_vehiculo    FK CONSTRAINT     ?   ALTER TABLE ONLY alquiler.cliente_vehiculo
    ADD CONSTRAINT fk_vehiculo FOREIGN KEY (vehiculo_id) REFERENCES vehiculos.vehiculo(id);
 H   ALTER TABLE ONLY alquiler.cliente_vehiculo DROP CONSTRAINT fk_vehiculo;
       alquiler          postgres    false    214    212    2739            ?
           2606    50136    users fk_role    FK CONSTRAINT     o   ALTER TABLE ONLY usuarios.users
    ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES usuarios.role(id);
 9   ALTER TABLE ONLY usuarios.users DROP CONSTRAINT fk_role;
       usuarios          postgres    false    2735    207    209            >   +   x?3?4?4202?5??54@0???K.#<
????qqq x?=      <   A   x?3?J-N-*KL??2?tN?KN??M8]?J?R?Alc????" S? ?H!9'35?$?+F??? ?^,      B   +   x?3??t?R?u?u???650W0?0?5500?????? ?N$      ;   T   x?3400?tL????,.)JL?/?-.M,??WH??S((?,??IM??/V???2???HIU.M.-*N?Aҕ{xWW? Ԕ?      9   ?   x???
?@ ???+\??:??5>3??f2)3%???
??h????)??О??nysSʮ?p	m?O"?W?1??M?O??冭\<?W?L_?x??x??kdM?CwM؅l?f??&??2?	KE?3??)??Db?@D`4????9?%?\?h?'H???T?I?)?-0      @   "   x?3䌈4?4??t?r?t?tq?????? Q??     