import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Code from '../../components/Code';
import ProgressBar from '../../components/ProgressBar';
const ProgressBarPage = () => {
    return (
        <section className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Progress Bar</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Progress Bar</h2>
            <hr />
            <p>
                <strong>Required assets:</strong> <code>scss/mods/_progress-bar.scss</code>
            </p>
            <p>
                <strong>Works with:</strong> <Link to="/utils/colors">Background Color Utils</Link>,{' '}
                <Link to="/utils/borders">Border Utils</Link>
            </p>

            <div className="mb-4">
                <p>
                    <code>.progress</code>
                </p>
                <ProgressBar label="Uploading Audio" value={10} max={100} />
                <ProgressBar label="Uploading Audio" value={25} max={100} />
                <p>
                    <code>.progress-md</code>
                </p>
                <ProgressBar label="Uploading Audio" value={50} max={100} className="progress-md" />
                <p>
                    <code>.progress-lg</code>
                </p>
                <ProgressBar label="Uploading Audio" value={75} max={100} className="progress-lg" />
                <p>Indeterminate Progress</p>
                <p>
                    Removing the <code>value</code> prop (or setting to <code>null</code>, <code>false</code>, or{' '}
                    <code>undefined</code>) will put the progress bar into an indeterminate state.
                </p>
                <div style={{ width: '400px' }}>
                    <ProgressBar
                        label="Uploading Audio"
                        max={100}
                        className="progress-md rounded-pill"
                        barClassName="bg-fuchsia"
                    />
                </div>

                <Code
                    lang="jsx"
                    code={`<ProgressBar
    label={string} // Required accessible label
    max={number} // Required Max/total value
    value={number} // Current value
    className={string} // Class to apply to outer .progress element
    barClassName={string} // Class to apply to inner .progress-bar element
/>`}
                />
            </div>
        </section>
    );
};

export default ProgressBarPage;
