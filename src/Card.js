import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import Popup from './Popup'

const Caard = (props) => {
    const {strMeal, strMealThumb, idMeal} = props.meal

    const [mealId, setMealId] = useState(null)
    const [instructions, setInstructions] = useState('')

    const [modalShow, setModalShow] = useState(false);

    

    useEffect(()=>{
        const urlID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        axios.get(urlID)
            .then(response => {
                response.data.meals === null ? console.log("Nothing to insert") : setInstructions(response.data.meals[0])
            })
    },[mealId])

    const getMealId = (id) => {
        setMealId(id)
    }

    return (
        <>
         <Card style={{ width: '18rem', margin: '10px' }} onClick={() => { setModalShow(true); getMealId(idMeal)}}>
            <Card.Img variant="top" src={strMealThumb}/>
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                {/* <Card.Text>
                {meal}
                </Card.Text> */}
            </Card.Body>
        </Card>
        <Popup
            instructions = {instructions}
            img = {strMealThumb}
            header={strMeal}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    )
}



export default Caard
