function Button(){
    const clickHandler = () => console.log('You clicked')
    return(
        <button onClick={clickHandler}>Click Me</button>
    );

}
export default Button;