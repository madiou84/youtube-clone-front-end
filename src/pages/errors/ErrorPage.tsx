import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as { status: string, statusText: string, message: string };

    return (
        <div className="w-full h-screen bg-write flex items-center justify-center">
            <div>
                <h4 className="text-lg text-center font-semibold">Oops!</h4>
                <div className="flex items-start space-x-4">
                    <h1 className="text-6xl font-bold text-red-500 text-center">{error.status}</h1>
                    <span className="h-20 w-px border-r-2 bg-gray-200" aria-hidden="true"/>
                    <div className="">
                        <p className="text-6xl font-bold">{error.statusText || error.message}</p>
                        <span>Please check the URL in the address bar and try again.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
