export const genres = [
    {_id: "5b21ca3eeb7f877723aaec818", name: "Action"},
    {_id: "5b21ca3eeb7f877723aaec819", name: "Comedy"},
    {_id: "5b21ca3eeb7f877723aaec817", name: "Thriller"},
];

export function getGenres() {
    return genres.filter(g => g);
}