import React from 'react';
import Layout from '../components/Layout';

const BrandSettings = () => {
    return (
        <Layout>
            <h1>Brand Settings</h1>

            <p>
                SCSS variables can be overridden using the <code>_brand_settings.scss</code> file. There you can
                override any global variables found in <code>_settings.scss</code>, or add new variables.
            </p>

            <p>Below are some examples for existing brands/sites.</p>

            <h2>Findaway</h2>
            <pre className="mb-6">
                <code>
                    {`// Colors
$teal: #a8d7ce;
$blue: #008fd5;
$dark-blue: #626677;

$green: #4ba450;

$orange: #ff581e;
$orange-light: #ff9d83;
$red: #f63837;

$white: #ffffff;
$off-white: #fcfaf8;
$gray-dark: #e3e3e3;
$black: #282732;

$font-color: $black;

$primary: $orange;
$secondary: $dark-blue;

$border-radius: 0;
`}
                </code>
            </pre>

            <h2>Passport</h2>
            <pre>
                <code>{`// Colors
$black: #222;
$white: #ffffff;
$primary: #ea7340;
$orange: #EA7340;

$gray-dark: #6C6C6C;
$gray-light: #F4F5F6;
$red: #dc3545;
$tan: #F8F6F1;
$yellow: #ffc107;
$teal: #289c9c;

$blue: #253251;
$blue-light: #96B0F0;
$blue-pale: #B7C1D6;

$green: #82C887;
$green-dark: #28a745;

$border-color: #BCC9D4;

$primary: $blue;`}</code>
            </pre>
        </Layout>
    );
};

export default BrandSettings;
