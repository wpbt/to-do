const Input = ({ type, id, placeholder, value, handleChange}) => {
    return (
        <input
            type        = {type}
            className   = "form-control"
            id          = {id}
            name        = {id}
            placeholder = {placeholder}
            value       = {value}
            onChange    = {handleChange}
        ></input>
    );
}
 
export default Input;