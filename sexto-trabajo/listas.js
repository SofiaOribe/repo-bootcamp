const compra = ['Arroz', 'Fideo', 'Papa', 'Caldo', 'Pollo'];

compra.push('Aceite de Girasol');
compra.pop();

const peliculasFavoritas = [
    {
        titulo: "Shrek 2",
        director: "Andrew Adamson",
        fecha: new Date(2004, 5, 17)
    },
    {
        titulo: "Tron: El Legado",
        director: "Joseph Kosinski",
        fecha: new Date(2010, 11, 16)
    },
    {
        titulo: "Alicia en el País de las Maravillas",
        director: "Tim Burton",
        fecha: new Date(2010, 2, 4)
    }
];

const peliculasNuevas = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));

const directores = peliculasFavoritas.map(pelicula => {
    return pelicula.director;
});

const titulos = peliculasFavoritas.map(pelicula => {
    return pelicula.titulo;
});

const nuevaLista = directores.concat(titulos);

const directoresTitulos = [...directores, ...titulos]
