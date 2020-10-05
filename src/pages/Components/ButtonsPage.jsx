import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Menu, MenuList, MenuButton, MenuItem, MenuLink } from '@reach/menu-button';
import { titleCase } from '../../utils';
import { brandColors } from '../Content';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

const ButtonsPage = () => {
    return (
        <section id="Buttons" className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Buttons</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Buttons</h2>
            <hr />
            <p>
                Button styles are based on the defined <a href="/content">color</a> variables.
            </p>
            <p>
                <strong>Required assets:</strong> <code>scss/components/_buttons.scss</code>,{' '}
                <code>scss/_settings.scss</code>, and <code>scss/_functions.scss</code>
            </p>

            <h3>Solid Buttons</h3>

            <p className="mb-1">
                Solid button <code>:hover</code> style is as follows.
            </p>
            <ul className="mt-0">
                <li>Background color: shades the original color by 15%</li>
                <li>Border color: shades the original color by 20%</li>
                <li>Text color: either black or white depending on the hover color.</li>
            </ul>

            <p className="mb-8">
                {brandColors.map((color) => (
                    <button key={`btn-${color}`} className={classnames('btn mr-1 mb-1', `btn-${color}`)}>
                        {titleCase(color)}
                    </button>
                ))}
                <button className="btn btn-link">Link</button>
            </p>

            <h3>Outline Buttons</h3>
            <p className="mb-1">
                Outline button <code>:hover</code> style is as follows.
            </p>
            <ul className="mt-0">
                <li>Background color: the original color</li>
                <li>Border color: the original color</li>
                <li>Text color: either black or white depending on the hover color.</li>
            </ul>
            <p>
                <small>
                    NOTE: The <code>$light</code> color outline button is available but unreadable, it's advised to
                    avoid using.
                </small>
            </p>
            <p>
                {brandColors
                    .filter((color) => color !== 'light')
                    .map((color) => (
                        <button
                            key={`btn-outline-${color}`}
                            className={classnames('btn mr-1 mb-1', `btn-outline-${color}`)}
                        >
                            {titleCase(color)}
                        </button>
                    ))}
            </p>

            <h3>Button Tags</h3>
            <p>
                The .btn classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can
                also use these classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some
                browsers may apply a slightly different rendering).
            </p>
            <p>
                <a className="btn btn-primary mr-1 mb-1" href="#demo" role="button">
                    Link/Anchor
                </a>
                <button className="btn btn-primary mr-1 mb-1" type="submit">
                    Button
                </button>
                <input className="btn btn-primary mr-1 mb-1" type="button" value="Input" />
                <input className="btn btn-primary mr-1 mb-1" type="submit" value="Submit" />
                <input className="btn btn-primary mr-1 mb-1" type="reset" value="Reset" />
            </p>

            <h3>Button Sizes</h3>

            <p>
                <button className="btn btn-primary btn-lg mr-3">Large</button>
                <button className="btn btn-primary mr-3">Normal</button>
                <button className="btn btn-primary btn-sm">Small</button>
            </p>

            <h3>Reach-UI MenuButton</h3>
            <Menu>
                <MenuButton className="btn btn-primary mr-1">Actions</MenuButton>
                <MenuList className="dropdown-menu">
                    <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
                    <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
                    <MenuItem onSelect={() => alert('Mark as Draft')}>Mark as Draft</MenuItem>
                    <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
                    <MenuLink as={Link} to="/content">
                        Go to Content Page
                    </MenuLink>
                </MenuList>
            </Menu>

            <h3>Button Groups</h3>
            <div className="btn-group mb-4">
                <button className="btn btn-primary active">First</button>
                <button className="btn btn-primary">Second</button>
                <button className="btn btn-primary">Third</button>
            </div>

            <div className="btn-group d-flex">
                <button className="btn btn-outline-primary">First</button>
                <button className="btn btn-outline-primary active">Second</button>
                <button className="btn btn-outline-primary">Third</button>
            </div>
        </section>
    );
};

export default ButtonsPage;
