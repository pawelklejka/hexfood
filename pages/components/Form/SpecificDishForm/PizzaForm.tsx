import { useFormContext } from "react-hook-form"

export default function PizzaForm() {
    const { register } = useFormContext()

    return (
        <>
            <label>Amount of slices</label>
            <input {...register("no_of_slices", {required: true, min: 1})} />
            <label>Diameter</label>
            <input {...register("diameter", {required: true})} step="0.1"/>
        </>

  )
}