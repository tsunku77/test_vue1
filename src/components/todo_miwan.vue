<template>
  <div>
    <ul class="ulcss ulcss3">
      <li>체크</li>
      <li>NO</li>
      <li>TO DO</li>
      <li>작성일시</li>
    </ul>
    <ul class="titles">
      <li>미완료</li>
    </ul>
    <div v-for="(value,index) in todoLists" :key="index">
      <ul class="ulcss" v-if="!value.status">
        <li>{{value.status}}</li>
        <li>{{ todoLists.length - index }}</li>
        <li @click="changelistM(index)">{{ value.title }}</li>
        <li>{{ value.date }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  name: "todo_miwan",
  computed: {
    ...mapGetters({
      todoLists: 'todoLists',
    }),
  },
  methods: {
    ...mapMutations({
      ck_click: 'ck_click',
      changelist: 'changelist'
    }),
    changelistM(index){
      this.changelist( {change : {...this.todoLists[index], status:true}, index : index } )
    }
  }
}
</script>
<style>
.titles {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 500px;
  height: 30px;
  background: pink;
}

.titles > li {
  border: 1px solid black;
  height: 30px;
  color: black;
  font-weight: bolder;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.active {
  text-decoration: line-through;
}

.ulcss {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: row;
}

.ulcss > li {
  border: 1px solid black;
  height: 30px;
}

.ulcss > li:nth-of-type(1) {
  width: 50px;
}

.ulcss > li:nth-of-type(2) {
  width: 50px;
}

.ulcss > li:nth-of-type(3) {
  width: 200px;
  cursor: pointer;
}

.ulcss > li:nth-of-type(4) {
  width: 200px;
}

.ulcss3 {
  background: red;
  color: white
}
</style>