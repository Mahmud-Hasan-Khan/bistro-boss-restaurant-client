
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
