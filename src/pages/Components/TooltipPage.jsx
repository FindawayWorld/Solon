import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Tooltip from '../../components/Tooltip.jsx';
import '@reach/tooltip/styles.css';
import Code from '../../components/Code';

const TooltipPage = () => (
    <section className="mb-5">
        <Breadcrumbs>
            <BreadcrumbItem as={Link} to="/components">
                Components
            </BreadcrumbItem>
            <BreadcrumbItem current>Tooltip</BreadcrumbItem>
        </Breadcrumbs>
        <h2>Tooltip</h2>
        <hr />

        <p>
            <strong>Required assets:</strong> <code>scss/mods/_tooltip.scss</code>, <code>@reach/tooltip</code>,{' '}
            <code>@reach/tooltip/styles.css</code>, and <code>@reach/portal</code>
        </p>

        <p>
            <Tooltip label="Provide a custom tooltip. Default position is below the trigger.">
                <span className="txt-primary">What's this?</span>
            </Tooltip>
        </p>

        <p>
            <Tooltip
                label="Position the tooltip below, above or to the right of the trigger using the 'position' prop."
                position="right"
            >
                <span className="txt-primary">Need help?</span>
            </Tooltip>
        </p>

        <p>
            <Tooltip
                label={
                    <p className="mb-0">
                        You can pass a string
                        <br />
                        or a fragment
                        <br />
                        as the 'label' prop.
                    </p>
                }
                position="right"
            >
                <span className="txt-primary">Hover for more info.</span>
            </Tooltip>
        </p>

        <Code
            lang="jsx"
            code={`<Tooltip label="Provide a custom tooltip. Default position is below the trigger.">
    <span className="txt-primary">What's this?</span>
</Tooltip>

<Tooltip
    label="Position the tooltip below, above or to the right of the trigger using the 'position' prop."
    position="right"
>
    <span className="txt-primary">Need help?</span>
</Tooltip>

<Tooltip
    label={
        <p className="mb-0">
            You can pass a string
            <br />
            or a fragment
            <br />
            as the 'label' prop.
        </p>
    }
    position="right"
>
    <span className="txt-primary">Hover for more info.</span>
</Tooltip>`}
        />
    </section>
);

export default TooltipPage;
