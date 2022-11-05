const Button = ({ type, button_class, title, is_disabled }) => {
    return (
        <button
            type={type}
            className={ button_class }
            disabled={ (is_disabled === '') && true}
        >
            {title}
        </button>
    );
}
 
export default Button
