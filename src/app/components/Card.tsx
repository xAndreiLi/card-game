import styles from "./Card.module.css";

interface Card {
    id: number;
    name: string;
    description: string;
    power: number;
    tags: string[];
    effect: boolean;
}

export const Card = ({id, name, description, power, tags, effect}: Card) => {
    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Power: {power}</p>
            <p>Tags: {tags.join(", ")}</p>
        </div>
    )
}
