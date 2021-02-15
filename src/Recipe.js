import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <div className={style.left}>
                <p>Calories: {calories}</p>
                <h2 >Instructions:</h2>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>

            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;
