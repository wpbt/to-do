const Checkbox = ({value, handleChange, data, checked_status}) => {
    return (
        <input
            className   = "form-check-input mt-0"
            type        = "checkbox"
            checked     = {(checked_status) ? true : false}
            value       = {value}
            onChange    = {() => handleChange(data)}
        />
    );
}
 
export default Checkbox;