export default function Input(props) {
    return (
        <input
            className="form-control"
            type={props.type || "text"}
            value={props.value}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value, props.index)}
            readOnly={props.readOnly} />
    )
}