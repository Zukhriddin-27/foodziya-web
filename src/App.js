import './App'
import Header from './components/screen/Header'
import Recipe from './components/screen/Recipe'
import Categories from './components/screen/Categories'
import RecipeItem from './components/screen/RecipeItem'
import CategoryItem from './components/screen/CategoryItem'
import CreateRecipe from './components/screen/CreateRecipe'
import Random from './components/screen/Random'
import Explore from './components/screen/Explore'
import About from './components/screen/About'
import Contact from './components/screen/Contact'

import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  let rout = useRoutes([
    { path: '/', element: <Header /> },
    { path: '/categories', element: <Categories /> },
    { path: '/categories/:id', element: <CategoryItem /> },
    { path: '/recipe', element: <Recipe /> },
    { path: '/recipe/:id', element: <RecipeItem /> },
    { path: '/create', element: <CreateRecipe /> },
    { path: '/explore-random', element: <Random /> },
    { path: '/explore-latest', element: <Explore /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
  ])
  return rout

  // return (
  //   <Routes>
  //     <Route path='/' exact element={<Header />} />,
  //     <Route path='categories' element={<Categories />} />,
  //     <Route path='/categories/:id' element={<CategoryItem />} />,
  //     <Route path='/recipe' element={<Recipe />} />,
  //     <Route path='/recipe/:id' element={<RecipeItem />} />,
  //     <Route path='/create' element={<CreateRecipe />} />,
  //     <Route path='/explore-random' element={<Random />} />,
  //     <Route path='/explore-latest' element={<Explore />} />,
  //     <Route path='/about' element={<About />} />,
  //     <Route path='/contact' element={<Contact />} />,
  //   </Routes>
  // )
}
function AppWrapper() {
  return (
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  )
}

export default AppWrapper
