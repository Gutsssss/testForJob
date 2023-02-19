<template>
    <div>
    <div class="save-and-option">
        <DropDownList/>
        <ButtonSave/>
    </div>
        <div class="id-object">
        <p>{{ store }}</p>
        </div>
        
    </div>
</template>

<script setup>
import DropDownList from './DropDownList.vue';
import ButtonSave from './ButtonSave.vue'
import { useListStore } from '../store';
import { toRefs } from 'vue';


const store = useListStore()
const {getToken,createLead} = toRefs(store)
console.log(getToken.value(123))
console.log(createLead.value(123))

</script>
<style scoped>
.id-object {
    width: 500px;
    height: 500px;
    border: 1px solid black;
}
.save-and-option {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
</style>