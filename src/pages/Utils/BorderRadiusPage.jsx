import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import { brandColors, colors, onDarkOutline } from '../Content';
const BorderRadiusPage = () => (
    <section id="border-radius" className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/utils">
                Utils
            </BreadcrumbItem>
            <BreadcrumbItem current>Borders</BreadcrumbItem>
        </Breadcrumbs>
        <h2>Borders</h2>
        <hr />
        <p>
            Classes to add borders to sides of containers. Can be used with Breakpoints{' '}
            <code>{`.border-{breakpoint}-{side}`}</code>
        </p>
        <p>
            <code>{`{breakpoint}`}</code> one of the pre-defined{' '}
            <Link to="/utils/breakpoints">responsive breakpoints</Link>
        </p>
        <p>
            <code>{`{side}`}</code> one of the pre-defined sides.
        </p>
        <ul>
            <li>
                <code>{`{t}op`}</code>
            </li>
            <li>
                <code>{`{r}ight`}</code>
            </li>
            <li>
                <code>{`{b}ottom`}</code>
            </li>
            <li>
                <code>{`{l}eft`}</code>
            </li>
            <li>
                <code>{`{x}`}</code> left and right
            </li>
            <li>
                <code>{`{y}`}</code> top and bottom
            </li>
            <li>
                No <code>{`{side}`}</code> is all sides
            </li>
        </ul>
        <div className="borders mb-8">
            <span className="swatch bg-light mr-4 border">.border</span>
            <span className="swatch bg-light mr-4 border-t">.border-t</span>
            <span className="swatch bg-light mr-4 border-r">.border-r</span>
            <span className="swatch bg-light mr-4 border-b">.border-b</span>
            <span className="swatch bg-light mr-4 border-l">.border-l</span>
            <span className="swatch bg-light mr-4 border-x">.border-x</span>
            <span className="swatch bg-light mr-4 border-y">.border-y</span>
        </div>

        <h2>Border Colors</h2>
        <hr />
        <p>
            Change the border color. Can be used with Breakpoints <code>{`.border-{breakpoint}-{color}`}</code>
        </p>
        <p>
            <code>{`{breakpoint}`}</code> one of the pre-defined{' '}
            <Link to="/utils/breakpoints">responsive breakpoints</Link>
        </p>
        <p>
            <code>{`{color}`}</code> one of the pre-defined <Link to="/content#colors">colors</Link>
        </p>
        <div className="mb-8">
            {[...brandColors, ...colors].map(([color]) => (
                <div
                    key={`border-${color}`}
                    className={classNames(`d-inline-block mr-4`, {
                        'bg-dark rounded p-2': onDarkOutline.includes(color)
                    })}
                >
                    <div className={`d-block border-b border-2 border-${color}`}>{`.border-${color}`}</div>
                </div>
            ))}
        </div>

        <h2>Border Sizes</h2>
        <hr />
        <p>
            Classes to set border width. Can be used with Breakpoints <code>{`.border-{breakpoint}-{size}`}</code>
        </p>
        <p>
            <code>{`{breakpoint}`}</code> one of the pre-defined{' '}
            <Link to="/utils/breakpoints">responsive breakpoints</Link>
        </p>
        <p>
            <code>{`{size}`}</code> one of the pre-defined sizes, 1-5(px).
        </p>
        <div className="mb-8">
            <span className="swatch bg-light mr-4 border border-1">border-1</span>
            <span className="swatch bg-light mr-4 border border-2">border-2</span>
            <span className="swatch bg-light mr-4 border border-3">border-3</span>
            <span className="swatch bg-light mr-4 border border-4">border-4</span>
            <span className="swatch bg-light mr-4 border border-5">border-5</span>
        </div>

        <h2>Border Radius</h2>
        <hr />
        <p>Classes to add pre-defined border radius to an element.</p>

        <div className="bg-dark rounded mb-3 p-3">
            <code>.rounded</code>
        </div>
        <div className="bg-dark rounded-pill p-3">
            <code>.rounded-pill</code>
        </div>
    </section>
);
export default BorderRadiusPage;
