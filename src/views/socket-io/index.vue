<template>
  <div class="container">
    <div class="top">
      <p>📞Welcome to instant messaging</p>
      <p>{{ persons }} 👥</p>
      <a-button id="bt" style="margin: 0 5px 0 5px" @click="close">关闭</a-button>
    </div>
    <div class="main">
      <div id="p"></div>
      <textarea class="textarea" placeholder="回车发送" @keyup.enter="send" v-model="msg"></textarea>
    </div>
  </div>
</template>

<script lang="ts" setup name="index">
import { ref, computed, onMounted } from 'vue';
import io from 'socket.io-client';
import { useUserStore } from '/@/store/modules/user';
/** 个人信息获取 */
const userStore = useUserStore();
const userinfo = computed(() => userStore.getUserInfo);
/** 传的消息以及定义触发方法 */
const msg = ref('');
const emit = defineEmits(['close']);
const persons = ref(0);

/** 服务器URL */
const url = 'ws://81.69.234.69/';
/** 本地URL */
// const url = 'http://127.0.0.1:3001';

/** 连接 */
const socket = io(url, {
  transports: ['websocket'],
  reconnection: true,
  reconnectionAttempts: Infinity,
  auth: {
    token: '123',
  },
  cors: true,
});
onMounted(() => {
  socket.on('connect', function () {
    console.log('连接到服务器');
    socket.emit('name', userinfo.value.nickName, (response) => {
      persons.value = response.status;
    });
  });
  let newDiv = document.createElement('div');
  newDiv.innerHTML = '🎉欢迎你进入聊天室🎉';
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'center';
  document.getElementById('p').appendChild(newDiv);
});

/** 监听欢迎广播 */
socket.on('welcome', (result) => {
  persons.value = result.persons;
  let newDiv = document.createElement('div');
  newDiv.innerHTML = result.time + ' ' + result.msg;
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'center';
  document.getElementById('p').appendChild(newDiv);
});

/** 监听消息广播 */
socket.on('broadcast', (result) => {
  createDialog(2, result.msg, result.username);
});

/** 监听断开连接 */
socket.on('disconnect', function () {
  console.log('连接断开');
});

/** 监听人离开广播 */
socket.on('somebodyExit', (response) => {
  persons.value = response.status;
});

/** 创建消息 */
const createDialog = (type, data, username) => {
  let container = document.createElement('div');
  let newDiv = document.createElement('div');
  let head = document.createElement('div');
  let one = document.createElement('div');

  one.style.borderTop = '8px solid transparent';
  if (type === 1) {
    one.style.borderLeft = '8px solid #29b8db';
    one.style.borderRight = '8px solid transparent';
    newDiv.style.backgroundColor = '#29b8db';
    head.innerHTML = '我';
    container.style.justifyContent = 'flex-end';
  } else {
    one.style.borderLeft = '8px solid transparent';
    one.style.borderRight = '8px solid #f0f2f5';
    newDiv.style.backgroundColor = '#f0f2f5';
    head.innerHTML = username;
    container.style.justifyContent = 'flex-start';
    newDiv.style.color = 'black';
  }

  one.style.borderBottom = '8px solid transparent';
  one.style.width = '0px';
  one.style.height = '0px';

  newDiv.innerHTML = data;
  newDiv.style.padding = '5px';
  newDiv.style.borderRadius = '5px';

  container.style.display = 'flex';
  container.style.margin = '5px';
  container.style.alignItems = 'center';
  if (type === 1) {
    container.appendChild(newDiv);
    container.appendChild(one);
    container.appendChild(head);
  } else {
    container.appendChild(head);
    container.appendChild(one);
    container.appendChild(newDiv);
  }

  document.getElementById('p').appendChild(container);
};

/** 触发发送消息 */
const send = () => {
  createDialog(1, msg.value);
  socket.emit('send', { data: msg.value, username: userinfo.value.nickName });
  msg.value = '';
};

/** 触发离开按钮 */
const close = () => {
  socket.emit('exit', { username: userinfo.value.nickName });
  emit('close');
};
</script>

<style scoped>
.container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #001529;
  border-radius: 5px;
  color: #fff;
  width: 400px;
  font-family: Comic Sans MS, Tahoma, Arial, 'Heiti SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei';
  animation: animate 1s ease-in-out;
  /* animation: animate 2s ease-out; */
}

@keyframes animate {
  from {
    right: -400px;
  }
  to {
    right: 20px;
  }
}

.main {
  width: 100%;
  height: 400px;
  line-height: 20px;
}
#p {
  background-color: #0c2135;
  width: 100%;
  height: 80%;
  overflow: scroll;
  border-radius: 5px 5px 0 0;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  padding: 5px;
  color: #fff;
}
.textarea {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  padding: 0;
  border: 0;
  outline: none;
  background-color: #001529;
  border-radius: 0 0 5px 5px;
  padding: 5px;
  outline: none;
  border: none;
  resize: none;
}
</style>
