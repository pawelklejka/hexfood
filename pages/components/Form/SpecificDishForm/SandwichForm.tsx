import { useFormContext } from "react-hook-form"

export default function SandwichForm() {
    const { register } = useFormContext()

    return (
        <>
            <label>Slices of bread</label>
            <input {...register("no_of_slices", {required: true, min: 1})} />

        </>

  )
}