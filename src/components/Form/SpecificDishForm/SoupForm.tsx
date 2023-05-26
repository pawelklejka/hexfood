import { useFormContext } from "react-hook-form"
import styles from './SpecificDishForm.module.css'

export default function SoupForm() {
    const { register, formState: {errors} } = useFormContext()

    return (
        <>
            <div className="label-container">
                <label>Spiciness of your soup</label>
            </div>
            <input type="number" {...register("spiciness_scale", {required: true, min: 1, max: 10})} placeholder="Spiciness from 1 to 10 " className={styles.soupInputColor}/>
            {errors?.spiciness_scale?.type === "required" && <p className='invalid-message'>This field is required</p>}
            {errors?.spiciness_scale?.type === "min" && <p className='invalid-message'>Minimal amount of spiciness is 1</p>}
            {errors?.spiciness_scale?.type === "max" && <p className='invalid-message'>Maximal amount of spiciness is 10</p>}
        </>

  )
}