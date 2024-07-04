import { v4 as uuidv4 } from "uuid";
import Home from "../components/UI/icons/Home";
import Course from "../components/UI/icons/Course";
import Article from "../components/UI/icons/Article";

export const navbarTabs = [
  {
    name: "خانه",
    path: "/",
    id: uuidv4(),
    icon: Home,
  },
  {
    name: "دوره ها",
    path: "/courses",
    id: uuidv4(),
    icon: Course,
  },
  {
    name: "مقالات",
    path: "/articles",
    id: uuidv4(),
    icon: Article,
  },
];
