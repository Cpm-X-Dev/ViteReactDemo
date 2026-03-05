/**
 * Activity 4: List Rendering
 *
 * Goal: Render a list of items from an array using .map()
 *
 * Instructions:
 * 1. Use the `fruits` array provided below
 * 2. Map over it to render each fruit as an <li> inside a <ul>
 * 3. Each <li> must have a unique `key` prop (use the fruit's id)
 * 4. Display the fruit name and emoji
 */

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
                {/* TODO: Map over the `fruits` array and render an <li> for each fruit.
                    Each <li> should:
                    - Have a key={fruit.id}
                    - Display: "{emoji} {name}"
                    Example: "🍎 Apple"
                */}
                <li>{fruits.length} fruits to render — replace this with .map()</li>
            </ul>
        </div>
    );
};
