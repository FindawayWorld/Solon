import React, { useContext } from 'react';
import { AuthContext, appActions } from '../../context/AuthContext';
import Layout from '../../components/Layout';
import Input from '../../components/form/Input';
import Loading from '../../components/Loading';
import { Auth } from 'aws-amplify';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';

const AccountIndex = () => {
    const { state, dispatch } = useContext(AuthContext);
    const handleSave = async (values) => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const result = await Auth.updateUserAttributes(user, values);
            console.log(result);
            dispatch({
                type: appActions.REFRESH_USER,
                payload: {
                    updatedUserAttributes: (await Auth.currentAuthenticatedUser({ bypassCache: true })).attributes
                }
            });
        } catch (e) {
            console.error(e);
        }
    };
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        enableReinitialize: true,
        initialValues: {
            given_name: state.user?.attributes?.given_name ?? '',
            family_name: state.user?.attributes?.family_name ?? ''
        },
        onSubmit: handleSave
    });

    if (!state.user && !state.isLoading) {
        return <Redirect to="/" />;
    }

    return (
        <Layout>
            {state.isLoading && <Loading />}
            {!state.isLoading && (
                <>
                    <h1>My Account</h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            id="given_name"
                            label="First Name"
                            value={values.given_name}
                            error={errors.given_name}
                            touched={touched.given_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Input
                            id="family_name"
                            label="Last Name"
                            value={values.family_name}
                            error={errors.family_name}
                            touched={touched.family_name}
                            onChange={handleChange}
                        />
                        <Input id="email" label="Email" defaultValue={state.user?.attributes.email} disabled />
                        <Input id="username" label="Username" defaultValue={state.user?.username} disabled />
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </>
            )}
        </Layout>
    );
};

export default AccountIndex;
