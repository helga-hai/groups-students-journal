<template>
  <div class='add'>
    <button class='add__btn' @click="openEditor" v-show="!isNew">
      + Add
    </button>

    <div class="card" v-if="this.mark=='courses'">
      <div class='add__box' v-show="isNew">
        <div class="card__content line__item">
            <input type='text' v-model="courseName" >
            <input type='text' v-model="courseCode" >
            <div class='card__operation'>
                <button class='edit save' @click="sendData()">create</button>
                <button class='remove cancel' @click="cancelMethod">cancel</button>
            </div>
        </div>
      </div>
    </div>
    
    <div class="card" v-else>
      <div class='add__box' v-show="isNew">
        <div class="card__content line__item">
            <input type='text' v-model="userName" >
            <input type='text' v-model="userEmail" >

            <check-box 
                @onCheck="onCheck" 
                :isCheck="[this.userStatus, 'active', 'inactive']" 
                :isActive="this.userStatus"/>

            <div class='card__operation'>
                <button class='edit save' @click="sendData()">create</button>
                <button class='remove cancel' @click="cancelMethod">cancel</button>
            </div>
        </div>
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
  data() {
    return {
      courseName: '',
      courseCode: '',
      userName: '',
      userEmail: '',
      userStatus: false,
      isNew: false,
    };
  },
  props: {
    mark: String
  },
  methods: {
    onCheck(val) {
        this.isCheck = val;
        this.userStatus = !this.userStatus;
    },
    openEditor() {
      this.isNew = true;
    },
    cancelMethod() {
      this.courseName = '';
      this.courseCode = '';
      this.userName = '';
      this.userEmail = '';
      this.userStatus = false;
      this.isNew = false;
    },
    sendData() {
      if(this.mark=='courses'){
        if (this.courseName.length > 0 && this.courseCode.length > 0) {
          const name = this.courseName;
          const code = this.courseCode;
          this.$emit('createElement', {name,code});
          this.courseName = '';
          this.courseCode = '';
          this.isNew = false;
        }
      } else if (this.mark=='users'){
        if (this.userName.length>0 && this.userEmail.length>0) {
          const name = this.userName;
          const email = this.userEmail;
          const status = this.userStatus;
          this.$emit('createElement', {name,email,status});
          this.userName = '';
          this.userEmail = '';
          this.userStatus = false;
          this.isNew = false;
        }
      }
    }
  },
};
</script>
<style lang="scss">
.add {
  text-align:right;
  margin: 2px 0 2px 0;
  background: $bg-table;
  &__btn {
    background: $color_blue;
    margin-right: 0 !important;
    padding: 0 27px;
  }
}
</style>