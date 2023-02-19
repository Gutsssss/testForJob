<template>
    <div>
        <select class="select-option">
        <option
        v-for="option in options" 
        :value="options.value"
        :isOpen="options.isOpen"
        v-on:openOption="openOption"
        >
        {{ option.text }}
        </option>
        </select>
    </div>
</template>

<script setup>
const options = [
    {text:"Не выбрано", value:1,isOpen:true },
    {text:"Сделка", value:2,isOpen:false },
    {text:"Контакт", value:3,isOpen:false },
    {text:"Компания", value:4,isOpen:false }
]

</script>

<style scoped>
.select-option {
    width: 200px;
    height: 30px;
    text-align: center;
    border-radius: 4px;
}
</style>