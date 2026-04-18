export function Checkbox ({checked, onChange, label, id})
{
    return <div className="form-check">
        <input type="checkbox"
            id = {id}
            className="form-check-imput"
            checked ={checked}
            onChange = {(e) =>onChange(e.target.checked)}
         />
         <label htmlFor="form-check-label">{label}</label>
    </div>
}