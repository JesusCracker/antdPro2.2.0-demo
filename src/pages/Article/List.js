import React, { PureComponent } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import users from '@/pages/Article/models/users';

@connect(({users}) => ({
  users,
}))

class List extends PureComponent {

  constructor(props) {
    super(props);
    this.dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];

    this.columns = [
      {
        title: '姓名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
    ];

    this.state = {};

  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'users/fetch',
    });

  }

  render() {

   const {users:{list}}=this.props;



    return (

      <PageHeaderWrapper title="查询表格">
        <Card>
          <Table dataSource={list} columns={this.columns} />;
        </Card>
      </PageHeaderWrapper>
    );
  }
}

List.propTypes = {};

export default List;
