<template>
    <div class="toggle" @click="onCheckInner" :isCheck="isCheck" :class="[isActive ? activeClass : '', errorClass]">
        <span class="toggle__indicator">
            <span class="toggle__icon"></span>
            <span class="toggle__overlay"></span>
        </span>
        <div class="toggle__text">
            <p>{{this.isCheck[0] ? this.isCheck[1] : this.isCheck[2]}}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    },
    props: {
        isCheck: Array,
        isActive: Boolean
    },
    methods: {
        onCheckInner() {
            this.isCheck[0]=!this.isCheck[0]
            this.$emit('onCheck', !this.isCheck[0]);
        }
    }
}
</script>

<style lang="scss">
.toggle {
    font-size:13px;
    text-align:left;
    height:40px;
    line-height:40px;
    &__indicator {
        display: inline-block !important;
        width: 52px !important;
        height: 32px !important;
        position: relative !important;
        background-color: #afafaf;
        border-radius: 40px;
        margin-left: 15px;
        vertical-align: sub;
    }
    &__text {
        padding-left: 15px;
        display: inline-block;
        vertical-align: bottom;
        color:$tone-grey;
    }
    &__icon {
        width: 28px !important;
        height: 28px !important;
        display: block !important;
        position: absolute !important;
        top: 2px !important;
        left: 2px !important;
        background-color: white;
        border-radius: 50px;
        cursor:pointer;
    }
    &__overlay {
        width: 32px!important;
        height: 15px!important;
        display: inline-block!important;
    }
}
.toggle.active.text-danger {
    .toggle__icon {
        right: 2px;
        left: auto !important;
        background-repeat: no-repeat;
        background-position: center;
    }
    .toggle__indicator {
        background:#439b5e;
        vertical-align: sub;
    }
    .toggle__text {
        color:$color_darkGrey;
    }
}
.toggle.active.text-danger.ext {
    .toggle__icon {
        background-image: none;
    }
    .toggle__indicator {
        background:$tone-green;
    }
    .toggle__text {
        color:$color_darkGrey
    }
}
</style>
