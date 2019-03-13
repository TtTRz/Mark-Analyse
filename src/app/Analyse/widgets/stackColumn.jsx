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
import DataSet from "@antv/data-set";

class StackColumn extends React.PureComponent{
  render() {
    const data = [
      {
        person: '及格',
        subject: '大英3(47/8)',
        value: 47
      }, {
        person: '未及格',
        subject:'大英3(47/8)',
        value: 8,
      }, {
        person: '及格',
        subject: 'C++(80/11)',
        value: 80
      }, {
        person: '未及格',
        subject: 'C++(80/11)',
        value: 11
      }, {
        person: '及格',
        subject: 'JAVA高编(78/7)',
        value: 84
      }, {
        person: '未及格',
        subject: 'JAVA高编(78/7)',
        value: 7
      }, {
        person: '及格',
        subject: '概率论(78/13)',
        value: 78
      }, {
        person: '未及格',
        subject: '概率论(78/13)',
        value: 13
      }, {
        person: '及格',
        subject: '计算机网络(89/2)',
        value: 89
      }, {
        person: '未及格',
        subject: '计算机网络(89/2)',
        value: 2
      }, {
        person: '及格',
        subject: '离散数学(90/1)',
        value: 90
      }, {
        person: '未及格',
        subject: '离散数学(90/1)',
        value: 1
      }
    ];
    const ds = new DataSet();
    const dv = ds
      .createView()
      .source(data)
      .transform({
        type: "percent",
        field: "value",
        // 统计销量
        dimension: "person",
        // 每年的占比
        groupBy: ["subject"],
        // 以不同产品类别为分组
        as: "percent"
      });
    const cols = {
      percent: {
        min: 0,
        formatter(val) {
          return (val * 100).toFixed(2) + "%"  ;
        }
      }
    };
    return (
      <div>
        <Chart height={400} data={dv} scale={cols} forceFit>
          <Legend />
          <Axis name="subject" />
          <Axis name="percent" />
          <Tooltip />
          <Geom
            type="intervalStack"
            position="subject*percent"
            color={"person"}
          />
        </Chart>
      </div>
    );
  }
}

export default StackColumn;