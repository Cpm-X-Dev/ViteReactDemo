type ProfileCardProps = {
    name: string;
    role: string;
    isActive: boolean;
};

export const ProfileCard = ({ name, role, isActive }: ProfileCardProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{role}</p>
            <span>{isActive ? "Active" : "Inactive"}</span>
        </div>
    );
};
