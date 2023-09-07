
function inputHeader(text) {
    return (
        <h2 className="text-2xl mt-4">{text}</h2>
    );
}
function inputDescription(text) {
    return (
        <p className="text-gray-500 text-sm">{text}</p>
    );
}
export default function PreInput(header, description) {
    return (
        <>
            {inputHeader(header)}
            {inputDescription(description)}
        </>
    );
}