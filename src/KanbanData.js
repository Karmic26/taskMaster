import { v4 as uuidv4 } from "uuid";
export const data = [
  {
    id: "1",
    Task: "Crear cartas.",
    Due_Date: "30-Marzo-2023"
  },
  {
    id: "2",
    Task: "Modificar cartas",
    Due_Date: "31-Marzo-2023"
  },
  {
    id: "3",
    Task: "Eliminar cartas",
    Due_Date: "01-Abril-2023"
  }
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "Pendientes",
    items: data
  },
  [uuidv4()]: {
    title: "En Progreso",
    items: []
  },
  [uuidv4()]: {
    title: "Testeo",
    items: []
  },
  [uuidv4()]: {
    title: "Finalizadas",
    items: []
  }
};
