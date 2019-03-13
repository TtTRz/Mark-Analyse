import '../../styles/analyse.scss'
import React from 'react';
import { Row, Col, Table, Button, Icon} from 'antd';
import { noop} from 'lodash-es';
class TermListView extends React.PureComponent{
  COLUMNS = [{
    title: '年级',
    dataIndex: 'grade',
    key: 'grade',
  }, {
    title: '学期',
    dataIndex: 'term',
    key: 'term',
  }, {
    title: '人数',
    dataIndex: 'number',
    key: 'number',
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  }];
  DATA = [
    {
      grade: '大二',
      term: '上学期',
      number: '91',
      action: <React.Fragment><a onClick={noop}>查看</a></React.Fragment>
    }
  ]
  renderData = (data) => {
    return data;
  };
  render() {
    const data = this.renderData(this.DATA);
    return (
      <React.Fragment>
        <div className="action-bar">
          <Button type="primary"><Icon type="plus" />创建新学期</Button>
          <div>

          </div>
        </div>

          <Table
            columns={this.COLUMNS}
            dataSource={data}
          />

      </React.Fragment>
    )
  }
}

export default TermListView;