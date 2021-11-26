import React, {useState} from 'react'
import axios from "axios";

const EditProduct = (props) => {
    let [nameProduct, setName] = useState(props.NameProduct)
    let [idProduct, setIdProduct] = useState(props.Id)
    let [category, setCategory] = useState(props.Category)
    let [protein, setProtein] = useState(props.Protein)
    let [fats, setFats] = useState(props.Fats)
    let [carbohydrates, setCarbohydrates] = useState(props.Carbohydrates)
    let [calorie, setCalorie] = useState(props.Calorie)
    
    const onChangeName = (event) =>{
        setName(event.currentTarget.value)
    }
    const onChangesetIdProduct = (event) =>{
        setIdProduct(event.currentTarget.value)
    }
    const onChangesetCategory = (event) =>{
        setCategory(event.currentTarget.value)
    }
    const onChangesetProtein = (event) =>{
        setProtein(event.currentTarget.value)
    }
    const onChangesetFats = (event) =>{
        setFats(event.currentTarget.value)
    }
    const onChangesetCarbohydrates = (event) =>{
        setCarbohydrates(event.currentTarget.value)
    }
    const onChangesetCalorie = (event) =>{
        setCalorie(event.currentTarget.value)
    }

    const editProduct = (Id, NameProduct, Category, Protein, Fats, Carbohydrates, Calorie) =>{
       axios.patch(`http://localhost:4000/product?Id=${Id}&NameProduct=${NameProduct}&Category=${Category}&Protein=${Protein}&Fats=${Fats}&Carbohydrates=${Carbohydrates}&Calorie=${Calorie}`).then()
    }
    return (
        <div>
            <br/>
            <input type="text" value={nameProduct}  autoFocus={true} onChange={onChangeName}/>
            <input type="text" value={category} onChange={onChangesetCategory}/>
            <input type="text" value={protein} onChange={onChangesetProtein}/>
            <input type="text" value={fats} onChange={onChangesetFats}/>
            <input type="text" value={carbohydrates} onChange={onChangesetCarbohydrates}/>
            <input type="text" value={calorie} onChange={onChangesetCalorie}/> 
            <a href="/product"><button type = "button" className = "btn btn-primary" onClick={editProduct(idProduct, nameProduct, category, protein, fats, carbohydrates, calorie)}>Сохранить</button></a>
        </div>
    )
}

export default EditProduct