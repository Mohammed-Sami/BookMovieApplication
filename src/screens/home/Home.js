import React from 'react'
import Movies from '../../ApiService/Movies';
import Header from '../../common/header/Header'
import ReleasedMovies from '../../components/released_movies/ReleasedMovies';
import UpcommingMovies from '../../components/upcomming_movies/UpcommingMovies';
import './Home.css'

function Home() {
  const [upcommingMovies, setUpcommingMovies] = React.useState();
  const [releasedMovies, setReleasedMovies] = React.useState();
  
  React.useEffect(()=>{
    Movies[0]("PUBLISHED").then((data)=>{setUpcommingMovies(data.movies)})
    Movies[0]("RELEASED").then((data)=>{setReleasedMovies(data.movies)})
  },[]);

  return (
    <div>
      <Header/>
      <UpcommingMovies movies={upcommingMovies}/>
      <div style={{display:'flex'}}>
        <div style={{width:'76%', margin:'16px'}}>
          <ReleasedMovies movies={releasedMovies}/>
        </div>
        <div style={{backgroundColor: 'green', width:'24%',margin:'16px'}}>
          Green
        </div>
      </div>
      
    </div>

  )
}

export default Home