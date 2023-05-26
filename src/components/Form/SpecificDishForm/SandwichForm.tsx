import { useFormContext } from "react-hook-form"
import styles from './SpecificDishForm.module.css'
import { SpecificDishFormProps } from "../../../commons/types/types"

export default function SandwichForm(props: SpecificDishFormProps) {
    const { register, formState:{errors} } = useFormContext()

    return (
        <>
            <label>Slices of bread</label>
            <input {...register("slices_of_bread", {required: true, min: 1})} type="number" className={styles["sandwich-input-color"]}/>
            {errors?.slices_of_bread?.type === "required" && <p className='invalid-message'>This field is required</p>}
            {errors?.slices_of_bread?.type === "min" && <p className='invalid-message'>Minimal amount of bread slices is 1</p>}
            {props.apiError?.slices_of_bread && <p className='invalid-message'>{props.apiError.slices_of_bread[0]}</p>}

        </>
  )
}