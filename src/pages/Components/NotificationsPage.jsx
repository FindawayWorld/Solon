import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { titleCase } from '../../utils';
import { brandColors } from '../Content';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';

toast.configure();

const NotificationsPage = () => {


    const notify = () => {
        toast('Basic Notification');
    }

    const notifySuccess = () => {
        toast.success('Success Notification');
    }

    const notifyInfo = () => {
        toast.info('Info Notification');
    }

    const notifyWarning = () => {
        toast.warn('Warning Notification');
    }

    const notifyError = () => {
        toast.error('Error Notification');
    }

    return (
        <section className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Notifications</BreadcrumbItem>
            </Breadcrumbs>

            <div className="mb-4">
                <h2>Temporary Notifications</h2>
                <hr />

                <button className="btn btn-primary mr-1" onClick={notify}>Default</button>
                <button className="btn btn-primary mr-1" onClick={notifySuccess}>Success</button>
                <button className="btn btn-primary mr-1" onClick={notifyInfo}>Info</button>
                <button className="btn btn-primary mr-1" onClick={notifyWarning}>Warning</button>
                <button className="btn btn-primary mr-1" onClick={notifyError}>Error</button>

                {/* <p>
                    <strong>Required assets:</strong> <code>scss/components/_flashes.scss</code>,{' '}
                    <code>scss/_settings.scss</code>, and <code>scss/_functions.scss</code>
                </p> */}



            </div>

        </section>
    )
}

export default NotificationsPage;
