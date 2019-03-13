import '../../styles/analyse.scss'
import React from 'react';

import { Tabs, Divider, Button, Icon } from 'antd';
import StackColumn from "./widgets/stackColumn.jsx";
import Gradient from "./widgets/GradientCol.jsx";
import Donut from "./widgets/Dount.jsx";
import Gauge from "./widgets/Gauge.jsx";

const TabPane = Tabs.TabPane;
import { data } from '../../common/data';
import Jitter from "./widgets/Jitter.jsx";


class TermView extends React.PureComponent{
  renderRate = (data, keyName)=> {
    let a = 0;
    let b = 0;
    data[keyName].forEach((item) => {
      if(item >= 60) {
        a++;
      } else {
        b++;
      }
    });
    return [{ value: (a / (a + b)).toFixed(2) * 100}];
  };
  renderJitter = (data, keyName) => {
    let D = data[keyName].sort((a, b) => a - b);
    let count = 0;
    return D.map((item) => {
      count++;
      if(item >= 60 && count % 2 === 0) {
        return {
          Class: "分布",
          Grade: "通过",
          Score: item,
        }
      } else if (item <60 && count % 2 === 0) {
        return {
          Class: "分布",
          Grade: "未通过",
          Score: item,
        }
      } else if (item >= 60 && count % 2 !== 0) {
        return {
          Class: "情况",
          Grade: "通过",
          Score: item,
        }
      }
      return {
        Class: "情况",
        Grade: "未通过",
        Score: item,
      }
    })
  }
  render(){
    return (
      <React.Fragment>
        <div className="action-bar">
          <Button type="primary"> <Icon type="file-excel" /> 导入</Button>
          <div>

          </div>
        </div>
        <Tabs>
          <TabPane tab="总体" key="total">
            <Divider>平均分分布</Divider>
            <Gradient/>
            <Divider>各科通过率</Divider>
            <StackColumn/>
            <Divider>获得学分比率</Divider>
            <Donut />
          </TabPane>
          <TabPane tab="大英三" key="eng">
            <Divider>通过率</Divider>
            <Gauge data={this.renderRate(data, "eng")}/>
            <Divider>分数分布</Divider>
            <Jitter data={this.renderJitter(data, "eng")}/>
          </TabPane>
          <TabPane tab="C++" key="cpp">
            <Divider>通过率</Divider>
            <Gauge data={this.renderRate(data, "cpp")}/>
            <Divider>分数分布</Divider>
            <Jitter data={this.renderJitter(data, "cpp")}/>
          </TabPane>
          <TabPane tab="JAVA高编" key="java">
            <Divider>通过率</Divider>
            <Gauge data={this.renderRate(data, "java")}/>
            <Divider>分数分布</Divider>
            <Jitter data={this.renderJitter(data, "java")}/>
          </TabPane>
          <TabPane tab="概率论" key="analyse">
            <Divider>通过率</Divider>
            <Gauge data={this.renderRate(data, "analyse")}/>
            <Divider>分数分布</Divider>
            <Jitter data={this.renderJitter(data, "analyse")}/>
          </TabPane>
          <TabPane tab="计算机网络" key="com">
            <Divider>通过率</Divider>
            <Gauge data={this.renderRate(data, "com")}/>
            <Divider>分数分布</Divider>
            <Jitter data={this.renderJitter(data, "com")}/>
          </TabPane>
          <TabPane tab="离散数学" key="maths">
            <Divider>通过率</Divider>
            <Gauge data={this.renderRate(data, "maths")}/>
            <Divider>分数分布</Divider>
            <Jitter data={this.renderJitter(data, "maths")}/>
          </TabPane>
        </Tabs>
      </React.Fragment>
    )
  }
}

export default TermView;