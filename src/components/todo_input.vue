<template>
  <div class="todo_input">
    <div class="col-md-12 input_box">
      <b-form-input type="text" class="form-control-md" v-model="Atodo"
                    placeholder="할 일을 작성해주세요" @keypress.enter="add_btn()" autofocus></b-form-input>
      <b-button squared variant="warning" size="lg" @click.prevent="add_btn()">추가</b-button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  name: "todo_input",
  data() {
    return {
      Atodo: ""
    }
  },
  computed: {
    ...mapGetters({
      todoLists: 'todoLists'
    }),
  },
  methods: {
    ...mapMutations({
      add_btn2: 'add_btn'
    }),
    add_btn() {
      if (this.Atodo.trim() !== '') {
        this.add_btn2({
          title: this.Atodo,
          date: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
          status: false
        });
      } else alert("할 일을 작성해주세요");
      this.Atodo = '';
    }
  }
}
</script>
<style>
.todo_input {
  width: 500px;
  height: auto;
}

.input_box {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.form-control {
  margin-right: 10px;
}

.btns_box {
  width: 100%;
  height: auto;
  float: left;
  line-height: 50px;
  position: relative;
}

.btn_hasal {
  float: right;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: white;
  background: red;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
}

.btn_location {
  position: absolute;
  right: 50px;
}

.btn_hasal:hover {
  background: white;
  color: red;
}
</style>