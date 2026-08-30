import Home from "./pages/Home.tsx"
import GameBoard from "./pages/GameBoard.tsx"
import SelectCourse from "./pages/SelectCourse.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-course" element={<SelectCourse />} />
        <Route path="/game/v1/:courseId" element={<GameBoard />} />
        {/* <Route path="/game" element={<GameBoard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
