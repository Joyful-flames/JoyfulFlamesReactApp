import InstructionContainer from "./instructionContainer";
import PropertyBar from "./propertyBar";
import "./newSpecie.css";
import { getSpecieGenericName } from '../util/utils';

export default function NewSpecie({specieId}) {

    const title = getSpecieGenericName(specieId);


    return (
        <div className="newSpecie">
                <h1 className="newSpecie-title1">
                    New Specie
                </h1>
                <h1 className="newSpecie-title2">
                    {title}
                </h1>
                <div className="newSpecie-imagepart">
                    <img
                        className="newSpecie-image"
                        src={"images/newSpecieIcon/" + specieId + ".png"}
                        alt="plant figure"
                    />
                </div>
                <PropertyBar specieId={specieId}></PropertyBar>
                <div className="newSpecie-operations">
                    <div className="newSpecie-operation">
                        <img className="newSpecie-operation-image" src="images/icons/book.png" alt="book" />
                    </div>
                    <div className="newSpecie-operation">
                        <img className="newSpecie-operation-image" src="images/icons/rightArrow.png" alt="arrow" />
                    </div>
                </div>
        </div>
    );
}
