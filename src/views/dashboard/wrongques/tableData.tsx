import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 180,
    },
    {
      title: 'title',
      dataIndex: 'title',
      width: 150,
      // filters: [
      //   { text: 'Male', value: 'male' },
      //   { text: 'Female', value: 'female' },
      // ],
    },
    {
      title: 'type',
      dataIndex: 'type',
      // sorter: true,
    },
    {
      title: 'level',
      dataIndex: 'level',
      // sorter: true,
      // width: 150,
      // sorter: true,
      // defaultHidden: true,
    },
    {
      title: 'creatorName',
      width: 150,
      dataIndex: 'creatorName',
    },
    {
      title: 'lastUpdateTime',
      width: 150,
      dataIndex: 'lastUpdateTime',
      sorter: true,
    },
  ];
}
