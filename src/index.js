import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Caard from './Card'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Main = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=bread'
    const [recipe, setRecipe] = useState([]);

    console.log(recipe)

    useEffect(()=>{
        axios.get(url)
            .then(response => {
                setRecipe(response.data.meals)
            })
    }, [url])

    
    return (
        <Container>
            {recipe === null ? 
                <h2>Nekas netika atrasts</h2>
            :
                <Row md={4} className="justify-content-md-center">
                    {recipe.map((meal)=>{
                        return(
                            <Caard key={meal.idMeal} meal={meal} />
                        )
                    })}
                </Row>
            }
        </Container>
    )
}

ReactDOM.render(<Main/>, document.getElementById('root'))
