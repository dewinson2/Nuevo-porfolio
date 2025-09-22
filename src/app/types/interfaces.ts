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
 export interface experience {
    id:number;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;


 }
 export const experiences: experience[] = [
    {
        id: 1,
        position: 'Desarrollador Frontend Angular',
        company: 'Ademass Training Development',
        startDate: 'Abril 2024',
        endDate: 'Julio 2024',
        description: 'Desarrollé una aplicación web de gestión de tareas utilizando Angular, con el objetivo de proporcionar a los usuarios una herramienta eficiente para organizar y manejar sus tareas diarias. La aplicación permite crear, editar, eliminar y visualizar tareas, con opciones avanzadas de filtrado y categorización.',
       
    },
    {
        id: 2,
        position: "Desarrollador Frontend Angular",
        company: "No Country",
        startDate: "Octubre 2024",
        endDate: "Presente",
        description: "Desarrollé una aplicación de gestión escolar con Angular, permitiendo a administradores, profesores y estudiantes acceder a funciones específicas según sus roles. Implementé una interfaz moderna y responsiva, optimizando la eficiencia y la usabilidad para todos los usuarios."
    }

]


 export const Cards: Card[] = [
    {
        id: 1,
        title: 'PlayClass',
        description: 'Es una WebApp de Educación interactiva donde por medio de juegos la idea es que las personas aprendan de una manera más divertida y dinámica por medio de juegos educativos como sudokus, trivias, etc., tiene implementación con IA para hacer quizzes automáticos y personalizados.',
        imageUrl: 'p1.png',
        previewUrl: 'https://example.com/preview1',
        githubUrl: 'https://github.com/No-Country-simulation/s21-20-t-webapp',
        category: [{id: 1, name: 'React'}, {id: 2, name: 'TailwindCSS'}, ]
    },
   


]
