/**
 * Activity 3: Conditional Rendering
 *
 * Goal: Render different content based on a status prop.
 *
 * Instructions:
 * 1. The component receives a `status` prop of type "success" | "error" | "loading"
 * 2. Render a <span> with:
 *    - "success" -> text "Done!" with green color (#166534)
 *    - "error"   -> text "Failed!" with red color (#dc2626)
 *    - "loading" -> text "Loading..." with gray color (#6b7280)
 * 3. Use inline styles for the colors
 */

type StatusBadgeProps = {
    status: "success" | "error" | "loading";
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
    // TODO: Based on the `status` prop, return a <span> with:
    //   - The appropriate text
    //   - The appropriate color via inline style={{ color: "..." }}
    //
    // You can use if/else, switch, or a lookup object.

    return <span>{status}: Replace this with the correct output</span>;
};
