type Fruit = {
    id: number;
    name: string;
    emoji: string;
};

const fruits: Fruit[] = [
    { id: 1, name: "Apple", emoji: "🍎" },
    { id: 2, name: "Banana", emoji: "🍌" },
    { id: 3, name: "Cherry", emoji: "🍒" },
    { id: 4, name: "Grape", emoji: "🍇" },
    { id: 5, name: "Orange", emoji: "🍊" },
];

export const FruitList = () => {
    return (
        <div>
            <h3>Fruit Basket</h3>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.id}>
                        {fruit.emoji} {fruit.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
