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
import { data } from '../../../common/data';

class Gradient extends React.Component {
  renderData = (data) => {
    let a = 0; // 100 - 95
    let b = 0; //94 - 90
    let c = 0; // 89 - 85
    let d = 0;  // 84 - 80
    let e = 0; // 79 - 75
    let f = 0; // 74 - 70
    let g = 0; // 69 - 65
    let h = 0; //64 - 60
    let i = 0; // 59 - 0
    data.forEach((item) => {
      if(item >= 0 && item <= 59){
        i++;
      } else if(item >= 60 && item <= 64) {
        h++;
      } else if(item >= 65 && item <= 69) {
        g++;
      } else if(item >= 70 && item <= 74) {
        f++;
      } else if(item >= 75 && item <= 79) {
        e++;
      } else if(item >= 80 && item <= 84) {
        d++;
      } else if(item >= 85 && item <= 89) {
        c++;
      } else if(item >= 90 && item <= 94) {
        b++;
      } else if(item >= 100 && item <= 95) {
        a++;
      }
    });
    return [{
      score: '95 - 100',
      num: a,
    }, {
      score: '90 - 94',
      num: b,
    }, {
      score: '85 - 89',
      num: c,
    }, {
      score: '80 - 84',
      num: d,
    }, {
      score: '75 - 79',
      num: e,
    }, {
      score: '70 - 74',
      num: f,
    }, {
      score: '65 - 69',
      num: g,
    }, {
      score: '60 - 64',
      num: h,
    }, {
      score: '0 - 59',
      num: i,
    }].reverse()
  }
  render() {
    const DATA = this.renderData(data.av);
    const cols = {
      score: {
        alias: "分数"
      },
      num: {
        alias: "人数"
      }
    };
    return (
      <div>
        <Chart height={400} data={DATA} scale={cols} forceFit>
          <Axis
            name="month"
            title={null}
            tickLine={null}
            line={{
              stroke: "#E6E6E6"
            }}
          />
          <Axis
            name="acc"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="score*num"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: "l (270) 0:rgba(21, 146, 255, 0)",
              shadowBlur: 60,
              shadowOffsetY: 6
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Gradient;