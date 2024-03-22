import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { TaskContextProvider } from "./Context/TasksContext"

ReactDOM.createRoot(document.getElementById("root")).render(
    <TaskContextProvider>
        <App />
    </TaskContextProvider>)