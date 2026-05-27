\c libros;

CREATE TABLE Categoria (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100)
);
INSERT INTO Categoria (id, Nombre) VALUES 
(1, 'papeleria'),
(2, 'escritura'),
(3, 'accesorios');

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    producto VARCHAR(100),
    descripcion VARCHAR(1000),
    precio NUMERIC(100),
    categoria NUMERIC(100),
    imagen VARCHAR(10000)
   
);
INSERT INTO productos (producto, descripcion, precio, categoria, imagen) VALUES
('Agenda escolar', 'Agenda práctica con diseño moderno, ideal para organizar tus tareas.', 3500.00, 1, './recursos/productos/agenda.webp'),
('Hojas sueltas', 'Paquete de 100 hojas rayadas A4 de alta calidad.', 1200.00, 1, './recursos/productos/hojas_sueltas.webp'),
('Carpetas', 'Carpetas plásticas reforzadas con anillos, varios colores.', 2800.00, 1, './recursos/productos/carpetas.webp'),
('Lapiceras', 'Set de 3 lapiceras de tinta azul, suave y de secado rápido.', 1000.00, 2, './recursos/productos/lapiceras.webp'),
('Lápices', 'Lápices de grafito HB con goma, perfectos para escribir o dibujar.', 800.00, 2, './recursos/productos/lapices.webp'),
('Marcadores', 'Pack de 7 resaltadores, ideales para estudio y oficina.', 2200.00, 2, './recursos/productos/marcadores.webp'),
('Cartuchera', 'Cartuchera amplia con cierre reforzado.', 2500.00, 3, './recursos/productos/cartuchera.webp'),
('Kit Geometría', 'Kit completo con regla, tijera y goma.', 1700.00, 3, './recursos/productos/kit.webp');



/*
INSERT INTO Categoria (id, Nombre) VALUES 
(1, 'papeleria'),
(2, 'escritura'),
(3, 'accesorios');

-- 2. Insertar los productos relacionando el idcategoria
CREATE TABLE
INSERT INTO productos (producto, descripcion, precio, idcategoria, imagen) VALUES
('Agenda escolar', 'Agenda práctica con diseño moderno, ideal para organizar tus tareas.', 3500.00, 1, './recursos/productos/agenda.webp'),
('Hojas sueltas', 'Paquete de 100 hojas rayadas A4 de alta calidad.', 1200.00, 1, './recursos/productos/hojas_sueltas.webp'),
('Carpetas', 'Carpetas plásticas reforzadas con anillos, varios colores.', 2800.00, 1, './recursos/productos/carpetas.webp'),
('Lapiceras', 'Set de 3 lapiceras de tinta azul, suave y de secado rápido.', 1000.00, 2, './recursos/productos/lapiceras.webp'),
('Lápices', 'Lápices de grafito HB con goma, perfectos para escribir o dibujar.', 800.00, 2, './recursos/productos/lapices.webp'),
('Marcadores', 'Pack de 7 resaltadores, ideales para estudio y oficina.', 2200.00, 2, './recursos/productos/marcadores.webp'),
('Cartuchera', 'Cartuchera amplia con cierre reforzado.', 2500.00, 3, './recursos/productos/cartuchera.webp'),
('Kit Geometría', 'Kit completo con regla, tijera y goma.', 1700.00, 3, './recursos/productos/kit.webp');       