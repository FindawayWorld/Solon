import { Routes, Route } from 'react-router-dom';
import ComponentsPage from './pages/Components';
import ContentPage from './pages/Content';
import UtilsPage from './pages/Utils';
import HomePage from './pages/Home';
import JSPage from './pages/Javascript';
import ColorTester from './pages/ColorTester';
import FontTester from './pages/FontTester';
import BadgesPage from './pages/Components/BadgesPage';
import BreadcrumbsPage from './pages/Components/BreadcrumbsPage';
import ButtonsPage from './pages/Components/ButtonsPage';
import FlashesPage from './pages/Components/FlashesPage';
import FormattedCurrencyPage from './pages/Components/FormattedCurrencyPage';
import FormattedPluralPage from './pages/Components/FormattedPluralPage';
import PaginationPage from './pages/Components/PaginationPage';
import LoadingPage from './pages/Components/LoadingPage';
import ModalPage from './pages/Components/ModalPage';
import FormsPage from './pages/Components/FormsPage';
import BrandSettings from './pages/BrandSettings';
import ColorsPage from './pages/Utils/ColorsPage';
import SpacingPage from './pages/Utils/SpacingPage';
import BreakpointsPage from './pages/Utils/BreakpointsPage';
import GridsPage from './pages/Utils/GridsPage';
import BorderRadiusPage from './pages/Utils/BorderRadiusPage';
import ProgressBarPage from './pages/Components/ProgressBar';
import Accessibility from './pages/Accessibility';
import DisplayPage from './pages/Utils/Display';

const AppRoutes = () => {
    return (
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
                <Route path="display" element={<DisplayPage />} />
            </Route>
            <Route path="javascript" element={<JSPage />} />
            <Route path="color-tester" element={<ColorTester />} />
            <Route path="font-tester" element={<FontTester />} />
            <Route path="brand-settings" element={<BrandSettings />} />
            <Route path="accessibility" element={<Accessibility />} />
        </Routes>
    );
};
export default AppRoutes;
