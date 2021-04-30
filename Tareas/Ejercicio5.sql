# El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.
SELECT nombre, SUM(sueldo)
FROM Elenco E

#El monto total destinado a películas por cada Estudio Cinematográfico, 
#durante la década de los 80's.
SELECT nomestudio, SUM(presupuesto) as 'montoTotal'
FROM Pelicula
WHERE año >= 1980 AND año <= 1989
#WHERE año BETWEEN 1980 AND 1989 -> otra opcion
GROUP BY nomestudio

#Nombre y sueldo promedio de los actores (sólo hombres) 
#que reciben en promedio un pago superior a 5 millones de dolares por película.
SELECT nombre, AVG(sueldo) as 'sueldo'
FROM Actor A, Elenco E 
WHERE A.sexo = 'M' AND A.nombre = E.nombre
GROUP BY nombre
HAVING AVG(sueldo) > 5000000

/*Título y año de producción de las películas con menor presupuesto. (Por ejemplo, 
la película de Titanic se ha producido en varias veces entre la lista 
de películas estaría la producción de Titanic y el año que fue filmada 
con menor presupuesto).*/
SELECT titulo, MIN(presupuesto) as 'presupuesto minimo'
FROM Pelicula
GROUP BY titulo
#duda: de como resolver el problema de varios titulos iguales
#resuelto: no se puede

#Mostrar el sueldo de la actriz mejor pagada.
SELECT nombre
FROM actor
WHERE sueldo = (SELECT MAX(sueldo)
				FROM Actor A, Elenco E
				WHERE A.nombre = E.nombre
				AND A.sexo = 'F')