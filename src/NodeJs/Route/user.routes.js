import { 
    register,
    login 
} 
from "../Controller/users.controllers.js";


export function userRoutes(app) {
    app.post("/register", register)
    app.post("/login", login)
}