import { useFormContext } from "react-hook-form"

export default function SoupForm() {
    const { register } = useFormContext()

    return (
        <>
            <div className="label-container">
                <label>Spiciness of your soup</label>
            </div>
            <input type="number" {...register("spiciness_scale", {required: true, min: 1, max: 10})} placeholder="Spiciness from 1 to 10 "/>
        </>

  )
}