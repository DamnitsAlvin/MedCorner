export default function MessageBox(props){
    const message = props.children; 
    const variant = props.variant; 
    return(
        <div className={`alert alert-${variant}|| 'info' `}>{message}</div>
    );
}