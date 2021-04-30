--COUNT(), SUM, AVG, STD, MIN, MAX

SELECT Descripcion, COUNT(Descripcion) AS Total_Entregas
FROM Entregan E, Materiales M
WHERE M.Clave = E.Clave
GROUP BY Descripcion
ORDER BY Total_Entregas DESC>2

SELECT Descripcion, SUM(Cantidad) AS Total_Unidades
FROM Entregan E, Materiales M
WHERE M.Clave = E.Clave
GROUP BY Descripcion
--ORDER BY Total_Unidades DESC>2
ORDER BY Total_Unidades DESC


SELECT Clave, Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT DISTINCT Clave FROM Entregan E)

--Consulta 1 - Actrices de “Las brujas de Salem”.
--opcion 1
SELECT A.Nombre
FROM Actor A, Elenco E
WHERE A.Nombre = E.Nombre AND Sexo = 'F' AND Titulo = 'Las brujas de salem'
--opcion 2
SELECT Nombre
FROM Elenco
WHERE Titulo = 'Las brujas de Salem'
AND Nombre IN(SELECT Nombre
FROM Actor A
WHERE Sexo = 'F')

--Consulta 2 - Nombres de los actores que aparecen en películas producidas por MGM en 1995.
SELECT nombre
FROM Elenco E, Pelicula P
WHERE E.Titulo = P.Titulo
AND E.año = P.año
AND nomestudio = 'MGM'
AND año = 1995
--Usando Subconsultas
SELECT nombre
FROM Elenco
WHERE año = 1995
AND titulo IN(SELECT titulo FROM Pelicula WHERE nomestudio = 'MGM')

--Consulta 3 - Películas que duran más que “Lo que el viento se llevó” (de 1939).

SELECT titulo
FROM Película
WHERE Duracion>(SELECT Duracion FROM Película WHERE titulo = 'Lo que el viento de llevó' AND año = 1939)

--Consulta 4 - Productores que han hecho más películas que George Lucas.
SELECT nombre
FROM Película p, Productor pr
WHERE p.idproductor = pr.idproductor
GROUP BY nombre HAVING COUNT(idproductor) > (
	SELECT COUNT(idproductor) 
	FROM Película p, Productor pr
	WHERE p.idproductor = pr.idproductor
	AND nombre = 'George Lucas'
	)

--Consulta 5 - Nombres de los productores de las películas en las que ha aparecido Sharon Stone.
SELECT PR.nombre
FROM Productor PR, Elenco E, Película P
WHERE E.Titulo = P.Titulo
AND E.año = P.año
AND PR.idproductor = P.idproductor
AND E.nombre = 'Sharon Stone'
-- Subconsulta <- esta bien fea y no es necesario
SELECT PR.Nombre
FROM Productor PR, Pelicula P
WHERE P.Titulo IN (
	SELECT Titulo
	FROM Elenco
	WHERE nombre = 'Sharon Stone')

--Consulta 6 - Título de las películas que han sido filmadas más de una vez
SELECT Titulo
FROM Pelicula
GROUP BY Titulo
Having COUNT(titulo) > 1
-- Subconsulta <- no se puede o es absurdo
SELECT Titulo
FROM Pelicula
WHERE Titulo IN(SELECT COUNT(Titulo) FROM Pelicula GROUP BY Titulo HAVING COUNT(Titulo) > 1)