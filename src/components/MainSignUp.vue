<script setup>
import { defineComponent, ref } from 'vue';
import { useField, useForm } from 'vee-validate';

    const { handleSubmit } = useForm();
    const name = ref('');
    const phoneNumber = ref('');
    const email = ref('');

    const { errorMessage: nameError, value: nameValue } = useField('name', 'required');
    const { errorMessage: phoneNumberError, value: phoneNumberValue } = useField('phoneNumber', 'required|numeric');
    const { errorMessage: emailError, value: emailValue } = useField('email', 'required|email');

    const onSubmit = handleSubmit(() => {
      
    });

</script>

<template>
    <section>
        <form @submit="onSubmit">
          <div class="form-inputs">
            <div>
              <label for="name">Name:</label>
              <input id="name" v-model="name" />
              <span>{{ nameError }}</span>
            </div>
            <div>
              <label for="phoneNumber">Phone Number:</label>
              <input id="phoneNumber" v-model="phoneNumber" />
              <span>{{ phoneNumberError }}</span>
            </div>
            <div>
              <label for="email">Email Address:</label>
              <input id="email" v-model="email" />
              <span>{{ emailError }}</span>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
    </section>
</template>
   
<style>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 33, 33, 1);
  width: 100vw;
  padding: 3rem 1.5rem;
  gap: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  background: rgba(47, 47, 47, 1)
}

.form-inputs {
  display: flex;
  align-items: flex-end;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  background: rgba(47, 47, 47, 1)
}

#name {
  flex-grow: 1;
  flex-basis: 160px;
}
#email {
  flex-grow: 3;
  flex-basis: 200px;
}

#phoneNumber {
  flex-grow: 1;
  flex-basis: 80px;
}

</style>