<template>
    <div class="card" v-if="this.markInner=='courses'">
        <div class="card__content line__item" v-show="!isEdit">
            <div>{{item.name}}</div>
            <div>{{item.code}}</div>
            <div class='card__operation'>
                <button class='edit' @click="showEdit">edit</button>
                <button class='remove' @click="deleteCours(item)">delete</button>
            </div>
        </div>
        <div class="card__content line__item" v-show="isEdit">
            <input type='text' v-model="item.name" >
            <input type='text' v-model="item.code" >
            <div class='card__operation'>
                <button class='edit save' @click="saveMethod(item)">save</button>
                <button class='remove cancel' @click="cancelMethod(item)">cancel</button>
            </div>
        </div>
    </div>
    <div class="card" v-else>
        <div class="card__content line__item" v-show="!isEdit">
            <div>{{item.name}}</div>
            <div>{{item.email}}</div>
            <div :class="'class-'+this.item.status">{{item.status ? 'active' : 'inactive'}}</div>
            <div class='card__operation'>
                <button class='edit' @click="showEdit">edit</button>
                <button class='remove' @click="deleteCours(item)">delete</button>
            </div>
        </div>
        <div class="card__content line__item" v-show="isEdit">
            <input type='text' v-model="item.name" >
            <input type='text' v-model="item.email" >

            <check-box 
                @onCheck="onCheck" 
                :isCheck="[this.item.status, 'active', 'inactive']" 
                :isActive="this.item.status"/>

            <div class='card__operation'>
                <button class='edit save' @click="saveMethod(item)">save</button>
                <button class='remove cancel' @click="cancelMethod(item)">cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import CheckBox from './common/CheckBox'
export default {
    components: {
        CheckBox
    },
    props: ['item','markInner'],
    data(){
        return {
            isEdit:false,
            oldValue: {
                name:'',
                code:''
            },
            oldUserValue: {
                name:'',
                email:'',
                status:''
            }
        }
    },
    methods:{
        onCheck(val) {
            this.isCheck = val;
            this.item.status = !this.item.status;
        },
        deleteCours(item){
            this.$emit('deleteItemMain', item);
        },
        showEdit() {
            if(this.markInner=='users'){
                this.oldUserValue.name=this.item.name;
                this.oldUserValue.email=this.item.email;
                this.oldUserValue.status=this.item.status;
            } else if(this.markInner=='courses') {
                this.oldValue.name=this.item.name;
                this.oldValue.code=this.item.code;
            }
            this.isEdit = true;
        },
        saveMethod(item) {
            this.isEdit = false;
            this.$emit('saveItemLocal', item);
        },
        cancelMethod() {
            if(this.markInner=='users'){
                this.item.name=this.oldUserValue.name;
                this.item.email=this.oldUserValue.email;
                this.item.status=this.oldUserValue.status;
            } else if(this.markInner=='courses') {
                this.item.name=this.oldValue.name;
                this.item.code=this.oldValue.code;
            }
            this.isEdit = false;
        },

    },

}
</script>
<style lang="scss" >
button {
    border: none;
    line-height: 38px;
    padding: 0 12px 0 34px;
    text-transform: uppercase;
    cursor: pointer;
    color:$color_white;
    &:first-child {
        margin-right: 3px;
    }
    &.edit {
        background: #41a075 url('../assets/icons/edit-white.svg') no-repeat 7px center;
        &.save {
            background: $tone-green url('../assets/icons/save-white.svg') no-repeat 8px center;
        }
    }
    &.remove {
        background: $tone-red url('../assets/icons/rubbish-bin-white.svg') no-repeat 7px center;
        &.cancel {
            background: $color_blue url('../assets/icons/minus-button-white.svg') no-repeat 8px center;
        }
    }
}
.card {
    margin-top:1px;
    background:#f1f0f0;
    &__content {
        display:grid;
        grid-template-columns: 2fr 1fr 1fr ;
        height:40px;
        line-height:40px;
        div {
            padding: 0 0 0 10px;
        }
        input {
            padding: 0 0 0 10px;
            margin-right: 10px;
            margin: 2px 2px 2px 2px;
            border: none;
            box-shadow: 1px 1px 1px 0px #cccccc inset;
        }
        &:not(:first-child){
            border-bottom: 1px solid $border-default;
        }
        &.head {
            background:$color_darkGrey;
            color:$color_white;
            text-transform:uppercase;
            font-size:0.9em;
        }
    }
    &__operation {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
.Users .card__content {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.class-true {
    color:$tone-green;
}
.class-false {
    color:$tone-red;
}
</style>