# DESARROLLADOR REACT

1.- Consumir una API y generar un token de consulta. Para ello, dirígete a https://postulaciones.solutoria.cl/index.html y ve a la sección "Token". Debes solicitar un token utilizando el método POST en /api/acceso. Tus credenciales para solicitar el token son las siguientes:
{
  "userName": "@usuario",
  "flagJson": true
}

2.- Con el token creado, debes importar la información histórica de la UF desde la API a una base de datos de tu elección. La información se encuentra en /api/indicadores.

3.- Crea un CRUD (Create, Read, Update, Delete) de los datos importados en la base de datos que hayas utilizado. El CRUD debe implementarse utilizando cualquier framework de React y axios.

4.- Crea un gráfico que muestre los datos importados, y agrega un filtro de fecha que permita visualizar los datos en un rango específico.
