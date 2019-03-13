import $ from "jquery";
import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class Jitter extends React.Component {

  render() {
    return (
      <div>
        {console.log(this.props.data)}
        <Chart height={window.innerHeight} data={this.props.data} forceFit>
          <Tooltip
            crosshairs={{
              type: "cross"
            }}
          />
          <Axis name="Score" grid={null} />
          <Axis
            name="Class"
            tickLine={null}
            subTickCount={1}
            subTickLine={{
              lineWidth: 0,
              stroke: "#BFBFBF",
              length: 2
            }}
            grid={{
              align: "center",
              // 网格顶点从两个刻度中间开始
              lineStyle: {
                stroke: "#E9E9E9",
                lineWidth: 0,
                lineDash: [3, 3]
              }
            }}
          />
          <Legend reversed />
          <Geom
            type="point"
            position="Class*Score"
            color="Grade"
            opacity={0.65}
            shape="circle"
            size={4}
            adjust="jitter"
          />
        </Chart>
      </div>
    );
  }
}

export default Jitter;
