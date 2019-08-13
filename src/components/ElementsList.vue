<template>
    <div class="wrap-line">
        <div class='card__content head'>
            <div v-for="(value, key, index) in itemsList[0]" :key="index">{{key}}</div>
        </div>
        <person v-for="(item,index) in itemsList" :key="index" 
            @deleteItemMain="deleteItemMain"
            :item.sync="item"
            :markInner="markInner"
            @saveItemLocal="saveItemLocal"
            />
    </div>

</template>
<script>
import Person from "@/components/Person";
export default {
    components: {
        Person
    },
    data(){
        return {
            itemsList:'',
            markInner:''
        }
    },
    props: {
        coursesList:Array,
        usersList:Array,
        mark: String
    },
    mounted() {
        this.markInner = this.mark;
        if(this.mark=='users'){
            this.itemsList=this.usersList;
        } else if(this.mark=='courses'){
            this.itemsList=this.coursesList;
        }
    },
    watch: {
        itemsList(newVal) {
            if(this.mark=='users')
                this.itemsList=this.usersList;
             else if(this.mark=='courses')
                this.itemsList=this.coursesList;
        }
    },
    methods: {
        deleteItemMain(item) {
            const indexInList = this.itemsList.indexOf(item);
            this.itemsList.splice(indexInList, 1);
            let localkey = this.mark+'List';
            localStorage[localkey] = JSON.stringify(this.itemsList);
        },
        saveItemLocal(item) {
            let localkey = this.mark+'List';
            localStorage[localkey] = JSON.stringify(this.itemsList);
        }
    }
};
</script>
<style lang="scss">
.wrap-line {
    background:$color_white;
    box-shadow: 1px 0 1px 0 $color_lightGrey;
}
</style>