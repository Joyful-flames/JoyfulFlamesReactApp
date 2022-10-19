import "./instructionTemplate.css";
import InstructionContainer from "./instructionContainer";
/**
 * This component is used to render the instruction page for this application
 * 
 * @param  {string} {title - the title of the instruction page
 * @param  {string} imageName - the name of the image to be displayed
 * @param  {string} description - the description of the instruction page
 * @param  {string} buttonName - the name of the button to be displayed}
 */
export default function InstructionTemplate({title, imageName, description, buttonName}) {

    // Todo - finish the connection
    const clickHandler = () => {
        console.log("Not yet completed");
    };


    return (
        <div className="instructionTemplate">
            <h2 className="instructionTemplate-title">{title}</h2>
            <InstructionContainer>
                <img className="instructionTemplate-image" alt="bear" src={"images/"+imageName}></img>
                <p className="instructionTemplate-description">{description}</p>
                <button className="instructionTemplate-button" onClick={()=>clickHandler()}>{buttonName}</button>
            </InstructionContainer>
        </div>
    );
}
