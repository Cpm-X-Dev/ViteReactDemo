type StatusBadgeProps = {
    status: "success" | "error" | "loading";
};

const statusConfig = {
    success: { text: "Done!", color: "#166534" },
    error: { text: "Failed!", color: "#dc2626" },
    loading: { text: "Loading...", color: "#6b7280" },
} as const;

export const StatusBadge = ({ status }: StatusBadgeProps) => {
    const { text, color } = statusConfig[status];

    return <span style={{ color }}>{text}</span>;
};
