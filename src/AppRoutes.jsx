import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const ContentPage = lazy(() => import('./pages/Content'));
const UtilsPage = lazy(() => import('./pages/Utils'));

const ColorTester = lazy(() => import('./pages/ColorTester'));
const FontTester = lazy(() => import('./pages/FontTester'));
const BadgesPage = lazy(() => import('./pages/Components/BadgesPage'));
const BreadcrumbsPage = lazy(() => import('./pages/Components/BreadcrumbsPage'));
const ButtonsPage = lazy(() => import('./pages/Components/ButtonsPage'));
const FlashesPage = lazy(() => import('./pages/Components/FlashesPage'));
const FormattedCurrencyPage = lazy(() => import('./pages/Components/FormattedCurrencyPage'));
const FormattedPluralPage = lazy(() => import('./pages/Components/FormattedPluralPage'));
const PaginationPage = lazy(() => import('./pages/Components/PaginationPage'));
const LoadingPage = lazy(() => import('./pages/Components/LoadingPage'));
const ModalPage = lazy(() => import('./pages/Components/ModalPage'));
const FormsPage = lazy(() => import('./pages/Components/FormsPage'));
const BrandSettings = lazy(() => import('./pages/BrandSettings'));
const ColorsPage = lazy(() => import('./pages/Utils/ColorsPage'));
const SpacingPage = lazy(() => import('./pages/Utils/SpacingPage'));
const BreakpointsPage = lazy(() => import('./pages/Utils/BreakpointsPage'));
const GridsPage = lazy(() => import('./pages/Utils/GridsPage'));
const BorderRadiusPage = lazy(() => import('./pages/Utils/BorderRadiusPage'));
const ProgressBarPage = lazy(() => import('./pages/Components/ProgressBar'));

const HomePage = lazy(() => import('./pages/Home'));
const ComponentsPage = lazy(() => import('./pages/Components'));
const JSPage = lazy(() => import('./pages/Javascript'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="components">
                    <Route index element={<ComponentsPage />} />
                    <Route path="badges" element={<BadgesPage />} />
                    <Route path="breadcrumbs" element={<BreadcrumbsPage />} />
                    <Route path="buttons" element={<ButtonsPage />} />
                    <Route path="flashes" element={<FlashesPage />} />
                    <Route path="formatted-currency" element={<FormattedCurrencyPage />} />
                    <Route path="formatted-plural" element={<FormattedPluralPage />} />
                    <Route path="pagination" element={<PaginationPage />} />
                    <Route path="loading" element={<LoadingPage />} />
                    <Route path="modal" element={<ModalPage />} />
                    <Route path="forms" element={<FormsPage />} />
                    <Route path="progress-bar" element={<ProgressBarPage />} />
                </Route>
                <Route path="content" element={<ContentPage />} />
                <Route path="utils">
                    <Route index element={<UtilsPage />} />
                    <Route path="colors" element={<ColorsPage />} />
                    <Route path="spacing" element={<SpacingPage />} />
                    <Route path="breakpoints" element={<BreakpointsPage />} />
                    <Route path="grids" element={<GridsPage />} />
                    <Route path="borders" element={<BorderRadiusPage />} />
                </Route>
                <Route path="javascript" element={<JSPage />} />
                <Route path="color-tester" element={<ColorTester />} />
                <Route path="font-tester" element={<FontTester />} />
                <Route path="brand-settings" element={<BrandSettings />} />
            </Routes>
        </Suspense>
    );
};
export default AppRoutes;
