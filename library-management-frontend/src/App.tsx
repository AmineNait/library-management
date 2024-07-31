import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Borrow from "./pages/Borrow";
import { BookProvider } from "./contexts/BookContext";
import { AuthorProvider } from "./contexts/AuthorContext";
import { UserProvider } from "./contexts/UserContext";
import { BorrowProvider } from "./contexts/BorrowContext";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

const App: React.FC = () => {
  return (
    <BookProvider>
      <AuthorProvider>
        <UserProvider>
          <BorrowProvider>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/borrow" element={<Borrow />} />
              </Routes>
              <Footer />
            </div>
          </BorrowProvider>
        </UserProvider>
      </AuthorProvider>
    </BookProvider>
  );
};

export default App;
