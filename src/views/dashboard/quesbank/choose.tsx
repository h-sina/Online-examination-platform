import { FormSchema } from '/@/components/Form/index';

export function schemas(): FormSchema[] {
  return [
    {
      field: 'content',
      component: 'Input',
      label: '题目内容',
      colProps: { span: 18 },
      componentProps: { disabled: true },
    },
    // 填空
    {
      field: 'selection',
      component: 'Input',
      label: '填空',
      colProps: { span: 18 },
    },
    // 论述
    {
      field: 'selection',
      component: 'InputTextArea',
      label: '论述',
      colProps: { span: 18 },
    },
    // 单选
    {
      field: 'selectionList',
      component: 'RadioGroup',
      label: '单选',
      colProps: {
        span: 18,
      },
      componentProps: {
        options: [
          {
            label: 'A',
            value: 0,
          },
          {
            label: 'B',
            value: 1,
          },
          {
            label: 'C',
            value: 2,
          },
          {
            label: 'D',
            value: 3,
          },
        ],
      },
    },
    // 判断
    {
      field: 'selectionList',
      component: 'RadioGroup',
      label: '判断',
      colProps: {
        span: 18,
      },
      componentProps: {
        options: [
          {
            label: '对',
            value: 0,
          },
          {
            label: '错',
            value: 1,
          },
        ],
      },
    },
    // 多选
    {
      field: 'field5',
      component: 'CheckboxGroup',
      label: '多选',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
  ];
}

export function pd(): FormSchema[] {
  return [
    // {
    //   field: 'content',
    //   component: 'Input',
    //   label: '题目内容',
    //   colProps: { span: 18 },
    //   componentProps: { disabled: true },
    // },
    // 判断
    {
      field: 'answer1',
      component: 'RadioGroup',
      label: '判断',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '对',
            value: 1,
          },
          {
            label: '错',
            value: 0,
          },
        ],
      },
    },
  ];
}

export function dx(): FormSchema[] {
  return [
    // 单选
    {
      field: 'answer1',
      component: 'RadioGroup',
      label: '单选',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'A',
            value: 'a',
          },
          {
            label: 'B',
            value: 'b',
          },
          {
            label: 'C',
            value: 'c',
          },
          {
            label: 'D',
            value: 'd',
          },
        ],
      },
    },
  ];
}

export function duox(): FormSchema[] {
  return [
    // 多选
    {
      field: 'answer1',
      component: 'CheckboxGroup',
      label: '多选',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'A',
            value: 'a',
          },
          {
            label: 'B',
            value: 'b',
          },
          {
            label: 'C',
            value: 'c',
          },
          {
            label: 'D',
            value: 'd',
          },
          // {
          //   label: 'E',
          //   value: 'e',
          // },
          // {
          //   label: 'F',
          //   value: 'f',
          // },
        ],
      },
    },
  ];
}
