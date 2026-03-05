type TNavLink = {
    id: number;
    name: string;
    path: string;
}[];

export const navLinks: TNavLink = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Essentials", path: "/essentials" },
    { id: 3, name: "Hooks", path: "/hooks" },
    { id: 4, name: "Router", path: "/router" },
    { id: 5, name: "Forms", path: "/forms" },
];
