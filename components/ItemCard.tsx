import React from 'react';
import styles from '../styles/style_item/ItemCard.module.css'
const nedo = 'red';
export const ItemCard = ({ title }: any) => {
    return (
        <div className={styles.box_card}>
            <div className={styles.background_card}>
                <p style={{ color: `${nedo}` }}>This is asdkas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tenetur quod ad quam. Temporibus, suscipit tempora quisquam earum ab fugiat perferendis eius quis minima doloremque, porro cupiditate omnis rerum minus! card</p>
            </div>
        </div>


    )
}