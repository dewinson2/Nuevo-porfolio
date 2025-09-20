export interface Card{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    previewUrl?: string;
    githubUrl?: string;
    category: Category[]
}

export interface Category{
    id: number;
    name: string;
}  


 export const Cards: Card[] = [
    {
        id: 1,
        title: 'PlayClass',
        description: 'Es una WebApp de Educación interactiva donde por medio de juegos la idea es que las personas aprendan de una manera más divertida y dinámica por medio de juegos educativos como sudokus, trivias, etc., tiene implementación con IA para hacer quizzes automáticos y personalizados.',
        imageUrl: 'p1.png',
        previewUrl: 'https://example.com/preview1',
        githubUrl: 'https://github.com/No-Country-simulation/s21-20-t-webapp',
        category: [{id: 1, name: 'React'}, {id: 2, name: 'TailwindCSS'}, ]
    }


]
