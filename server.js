import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EventsBoard from './components/EventsBoard.jsx';
import ScrollToTopBtn from './components/ScrollToTop/ScrollToTopBtn.jsx';
import CategoryDashboard from './components/CategoryDashboard.jsx';
import { users } from './assets/users.js'


const theme = createTheme({
    palette: {
        primary: {
            main: "#154194",
        },

        secondary: {
            main: "#ffffff",
        },
    }
})



export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className='App' style={{ padding: '1.2rem 9rem' }}>
                <ScrollToTopBtn />

                <EventsBoard />

                <CategoryDashboard category="Seeking" preSelected={["Kontakt zu Schulen",
                    "Kontakt zu Schüler:innen"]} users={users} />

            </div>
        </ThemeProvider>
    )
}