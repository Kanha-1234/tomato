import Header from '../../components/header/Header';
import { useState } from 'react';
import './Home.css'
import Exploremenu from '../../components/exploremenu/Exploremenu'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay';
import AppDowmload from '../../components/appdownload/AppDowmload';
const Home = () => {

  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDowmload/>
    </div>
  )
}

export default Home
