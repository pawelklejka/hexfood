import { useFormContext } from "react-hook-form"

export default function SandwichForm() {
    const { register, formState:{errors} } = useFormContext()

    return (
        <>
            <label>Slices of bread</label>
            <input {...register("slices_of_bread", {required: true, min: 1})} type="number"/>
            {errors?.slices_of_bread?.type === "required" && <p className='invalid-message'>This field is required</p>}
            {errors?.slices_of_bread?.type === "min" && <p className='invalid-message'>Minimal amount of bread slices is 1</p>}


        </>

  )
}