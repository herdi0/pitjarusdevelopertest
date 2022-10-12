import { Table } from 'antd';
import React, { useEffect } from 'react';

function Tabledata({byBrand}){
    const columns = [
        {
          title: 'Name',
          dataIndex: 'brand_name',
          filterMode: 'tree',
          filterSearch: true,
          width: '30%',
        },
        {
          title: 'DKI Jakarta',
          dataIndex: 'jakarta'
        },
        {
          title: 'Jawa Barat',
          dataIndex: 'jawabarat'
        },
        {
          title: 'Kalimantan',
          dataIndex: 'kalimantan'
        },
        {
          title: 'Jawa Tengah',
          dataIndex: 'jawatengah'
        },
        {
          title: 'Bali',
          dataIndex: 'bali'
        },
        
      ];
      
      
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
      
      return(
        <Table columns={columns} dataSource={byBrand} onChange={onChange} />
      )
}

export default Tabledata