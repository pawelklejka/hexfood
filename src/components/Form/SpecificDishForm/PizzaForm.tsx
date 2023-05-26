import { useFormContext } from "react-hook-form"

export default function PizzaForm() {
    const { register, formState: {errors} } = useFormContext()

    return (
        <>
            <label>Amount of slices</label>
            <input id="no_of_slices" {...register("no_of_slices", {required: true, min: 1})} className="pizza-input-color"/>
            {errors?.no_of_slices?.type === "required" && <p className="invalid-message">This field is required</p>}
            {errors?.no_of_slices?.type === "min" && <p className="invalid-message">The minimal amount of slices is 1</p>}

            <label>Diameter</label>
            <input {...register("diameter", {required: true, min: 20})} step="0.1" className="pizza-input-color"/>
            {errors?.diameter?.type === "required" && <p className="invalid-message">This field is required</p>}
            {errors?.diameter?.type === "min" && <p className="invalid-message">The minimal slice diameter is 20 cm</p>}
        </>

  )
}