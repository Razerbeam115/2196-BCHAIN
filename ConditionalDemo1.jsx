export default function ShinnyButton(){
    const handleClick = () => {
        alert("You clicked me!");
    }
    return(
        <button onClick={handleClick}>
            Click This Button !
        </button>
    );
}