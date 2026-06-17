import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center bg-white border border-gray-100 rounded-2xl p-8 shadow-sm max-w-lg w-full">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-3">Something went wrong</h1>
                <p className="text-gray-500 mb-5">
                    We could not load this page. Please try refreshing or return to the home page.
                </p>
                <h3 className="text-sm text-gray-600 bg-gray-50 rounded-lg py-2 px-3 inline-block">
                    {err?.status || "Error"} {err?.statusText || "Unexpected error"}
                </h3>
            </div>
        </main>
    )
}

export default Error;