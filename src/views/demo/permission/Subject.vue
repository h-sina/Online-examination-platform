<template>
  <div>
    <h1>教师管理的题库 - 增删查改</h1>
    <table>
      <button @click="submit">添加</button>
      <tr v-for="item in data.questionList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <button @click="deleteQues">删除</button>
        </td>
        <td>
          <button @click="updateQues">修改</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import {
  addQuestionDetailF,
  addQuestionDetail1,
  addQuestionDetail2,
  addQuestionDetail3,
  addQuestionDetail4,
  addQuestionDetail5,
  addQuestionDetail1,
} from '/@/api/question/question';
export default defineComponent({
  name: 'Subject',
  setup() {
    const data = reactive({
      formF: {},
      quesList: [],
    });
    const submit = () => {
      const type = submitF();
      submitS(type);
      getList();
    };
    async function submitS(type) {
      let res;
      switch (type) {
        case 1:
          res = await addQuestionDetail1;
          break;
        case 2:
          res = await addQuestionDetail2;
          break;
        case 3:
          res = await addQuestionDetail3;
          break;
        case 4:
          res = await addQuestionDetail4;
          break;
        case 5:
          res = await addQuestionDetail5;
          break;
      }
    }
    async function submitF() {
      // const res = await addQuestionDetailF(formF);
      // console.log(res);
      // return res.type;
    }
    async function getList() {
      // const res = await getQuestion();
      // console.log(res);
      // data.quesList = res.data.list;
    }
    async function deleteQues() {
      // const res = await deleteQuestion();
      // console.log(res);
      // getList()
    }
    async function updateQues() {
      // const res = await updateQuestionDetail(formF);
      // console.log(res);
      // getList()
    }
    return {
      data,
      submit,
      submitF,
      submitS,
      getList,
      deleteQues,
      updateQues,
    };
  },
});
</script>

<style scoped></style>
