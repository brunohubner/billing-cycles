export default function InputAuth(props) {
    return !props.hide ? (
        <div className="form-group has-feedback">
            <input
                type={props.type || "text"}
                className="form-control"
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
            <span
                className={`glyphicon glyphicon-${props.icon}
                    form-control-feedback`}
            ></span>
        </div>
    ) : (
        false
    )
}
