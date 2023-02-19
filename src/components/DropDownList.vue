<template>
    <div>
        <select >
            <option disabled >Не выбрано</option>
            <option>Сделка</option>
            <option>Контакт</option>
            <option>Компания</option>
        </select>
    </div>
</template>

<script setup>
import { useListStore } from '../store';
import { toRefs } from 'vue';

const store = useListStore()
const {getToken,createLead} = toRefs(store)
console.log(getToken.value(123))
console.log(createLead.value(123))
</script>

<style lang="scss" scoped>

</style>