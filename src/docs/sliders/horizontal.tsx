import { $, type JSX } from "voby"
import { Slider } from "../../slider"

function Horizontal() {
    // Initialize the state value
    const value = $<number>(10)

    // Event handler for the change event start
    const handleChangeStart = () => {
        console.log("Change event started")
    }

    // // Event handler for the slider value change
    // const handleChange = (newValue: number) => {
    //     value(newValue)
    // }

    // Event handler for the change event completion
    const handleChangeComplete = () => {
        console.log("Change event completed")
    }

    return (
        <div class="slider">
            <Slider
                min={0}
                max={100}
                value={value}
                onChangeStart={handleChangeStart}
                onChange={value}
                onChangeComplete={handleChangeComplete}
            />
            <div class="value">{value}</div>
        </div>
    )
}

export default Horizontal
