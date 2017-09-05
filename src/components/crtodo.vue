<template>
<div id="todo">
    <h1>{{ title }}</h1>
    <input type="text" v-model="text" placeholder="pls input ur todo">
    <button id="btnin" v-on:click="addTodo()">Create</button>
    <ul>
        <li v-for="item in list">
            <span>{{ item.text }}</span>
            <button id="btndel" v-on:click="removeTodo(this.list)">X</button>
        </li>
    </ul>
</div>
</template>

<script type="javascript/text">
export default {
    name: 'todo',
    data () {
    return {
        title: 'A ToDo List with vue.js!',
        text: '',
        list: [{ text: 'your to do' }]
        }
    },
    methods: {
        addTodo() {
            this.list.push({ text: this.text })
            this.text = ''
        },
        removeTodo(index) {
            this.list.splice(index, 1)
        }
    }
}
</script>

<style>
    #todo{
        margin: 60px auto 0;
        max-width: 400px;
        height: auto;
        border-radius: 5px;
        background: #eee;
        padding: 30px; 
    }
    h1{
        text-align: center;
    }
    input, #btnin{
            border: 1px solid #ccc;
            height: 30px;
    }
    input{
        width: 70%;
        padding-left: 8px;
        font-size: 14px;
        border-radius: 3px;
    }
    #btnin{
        width: 26%;
        font-size: 14px;
        background: steelblue;
        color: #fff;
        border-radius: 3px;
    }
    ul{
        list-style-type: none;
        padding-left: 0;
    }
    li{
        text-align: left; 
        padding: 5px;
        border: 1px solid #ccc;
        background: #fff;
        width: 97%;
        height: 22px;
    }
    #btndel{
        cursor: pointer;
        float: right;
        color: red;
        font-weight: bold;
        border: 1px solid #ccc;
        padding: 3px 5px;
        background: #fff;
    }
</style>