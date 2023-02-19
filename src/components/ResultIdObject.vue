<template>
    <div>
    <div class="save-and-option">
        <DropDownList/>
        <ButtonSave/>
    </div>
        <div class="id-object">
        <p>{{ lead }}</p>
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
const lead = createLead.value()

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