import "./instructionContainer.css";

// make a container component
const InstructionContainer = ({ children }) => {
    return <div className="instruction-container">{children}</div>;
}

// export the container component
export default InstructionContainer;