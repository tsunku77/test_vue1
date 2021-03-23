<template>
  <div id="app" class="todo_box">
    <h1>Todo List 배열1개</h1>
    <todo_input/>
    <todo_miwan/>
    <todo_wan/>
  </div>
</template>

<script>
import todo_input from "@/components/todo_input";
import todo_miwan from "@/components/todo_miwan";
import todo_wan from "@/components/todo_wan";

export default {
  name:'App',
  components: {
    todo_input,
    todo_miwan,
    todo_wan,
  }
}
</script>
<style>
  .todo_box{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
