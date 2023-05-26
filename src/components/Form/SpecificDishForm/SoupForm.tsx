import { useFormContext } from "react-hook-form"
import styles from './SpecificDishForm.module.css'
import { SpecificDishFormProps } from "../../../commons/types/types"

export default function SoupForm(props: SpecificDishFormProps) {
    const { register, formState: {errors} } = useFormContext()

    return (
        <>
            <div className="label-container">
                <label>Spiciness of your soup</label>
            </div>
            <input type="number" {...register("spiciness_scale", {required: true, min: 1, max: 10})} placeholder="Spiciness from 1 to 10 " className={styles["soup-input-color"]}/>
            {errors?.spiciness_scale?.type === "required" && <p className='invalid-message'>This field is required</p>}
            {errors?.spiciness_scale?.type === "min" && <p className='invalid-message'>Minimal amount of spiciness is 1</p>}
            {errors?.spiciness_scale?.type === "max" && <p className='invalid-message'>Maximal amount of spiciness is 10</p>}
            {props.apiError?.spiciness_scale && <p className='invalid-message'>{props.apiError.spiciness_scale[0]}</p>}

        </>

  )
}