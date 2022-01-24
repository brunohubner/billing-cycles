import Grid from "../../common/layout/Grid"

export default function LabelAndInput(props) {
    return (
        <Grid cols={props.cols}>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <input
                    className="form-control"
                    type={props.type || "text"}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={e => props.onChange(e.target.value)}
                    readOnly={props.readOnly}
                />
            </div>
        </Grid>
    )
}
