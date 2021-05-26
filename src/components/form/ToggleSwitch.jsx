import classnames from 'classnames';
import { useId } from '@reach/auto-id';
const ToggleSwitch = ({ checked = false, label = '', id = false, disabled = false, onChange = () => {} }) => {
    id = useId(id);
    return (
        <div
            className={classnames('form-switch', {
                'form-check': !!label
            })}
        >
            <input
                id={id}
                className="form-check-input"
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            {!!label && <label htmlFor={id}>{label}</label>}
        </div>
    );
};

export default ToggleSwitch;
