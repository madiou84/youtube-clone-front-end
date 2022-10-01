import {ChevronRightIcon} from "@heroicons/react/24/outline";

export default function FloatingButton() {
    return (
        <button
            type="button"
            className="hidden flex items-center justify-center fixed top-14 h-14 -right-2 w-20 bg-white rounded-full z-10"
        >
            <div
                className="flex items-center justify-center h-8 w-8 shadow-2xl shadow-amber-500 bg-green-500 rounded-full">
                <ChevronRightIcon className="w-8 h-8"/>
            </div>
        </button>
    );
}
