import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

const FourOhFour = () => {
    return (
        <div className="txt-center">
            <h1 className="txt-40 fw-bold">404!</h1>
            <p className="h2 mb-4">The page you requested cannot be found.</p>
            <p>
                <Link href="/">
                    <FaChevronLeft className="icon-align" /> Return to the Homepage
                </Link>
            </p>
        </div>
    );
};

export default FourOhFour;
