import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import Heading from "../../ui/Typography/Heading/Heading";
import Paragraph from "../../ui/Typography/Paragraph/Paragraph";

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-xl w-full bg-white-color shadow-lg rounded-xl p-8 border border-red-200 flex flex-col justify-center items-center">
        {isRouteErrorResponse(error) ? (
          <>
            {/*Unkown route handler - 404 */}
            <Heading type="h1" className="text-header-lg text-error-color mb-2">
              {error.status} - {error.statusText}
            </Heading>
            <Link to={"/"} className="text-center underline text-blue-600">
              Return to home
            </Link>
          </>
        ) : (
          <>

            {/*Runtime error handle */}

            <Heading type="h1" className="text-header-lg text-error-color mb-2">
              An Error Occurred
            </Heading>
            <Paragraph className="text-black-color mb-2">
              {error.message}
            </Paragraph>
          </>
        )}
      </div>
    </div>
  );
}
