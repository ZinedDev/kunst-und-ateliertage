interface ResetFiltersButtonProps {
    onClick: () => void;
}

export default function ResetFiltersButton({onClick}: ResetFiltersButtonProps) {
    return (
        <div className="col-span-full text-center px-4">
            <button
                type="button"
                onClick={onClick}
                className="text-xs font-semibold text-blue-700 hover:underline cursor-pointer"
            >
                Filter zurücksetzen
            </button>
        </div>
    );
}
