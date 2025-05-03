import { Routes, Route } from "react-router-dom";
import AuthGuard from "src/components/AuthGuard";
import { pages } from "src/configs/Pages";
import Error404 from "src/pages/errors/404";

const Router = () => {

    return (
        <Routes>
            {
                pages.map(({ title, path, element, authGuard }) => (
                    <Route
                    path={path}
                    element={authGuard ? <AuthGuard>{element}</AuthGuard> : element}
                    key={title}
                    />
                ))
            }

            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default Router;
