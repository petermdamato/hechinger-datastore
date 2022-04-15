import PathArrow from '@petedamato/react-arrow';
import BarChart from './BarChart'


const renderArrow = props => {
let basis = props.data[0].value / 1.3

// We're going to show an exaggerated line, as the changes are too subtle to be captured in the small fever chart

let arrowData = props.data.map((d)=>{
  return {"year":d.year, "value":Math.max(d.value - basis,0)}
})

let arrowClass = "fever-arrow";

if (props.data[0].value == 100000) {
  arrowClass = "fever-arrow faded"
}
return (
  <PathArrow
    className={arrowClass}
    data={arrowData}
    height={20}
    width={98}
    arrowsize={1}
    axis="true"
    style={{
      width: '120px',
      height:'80px'
    }}
  />
)
}

export default renderArrow;