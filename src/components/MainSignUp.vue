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
        <h2 class="hign-up">Sign up for training</h2>
        <p>Leave your contacts and we will call you back</p>
        <form @submit="onSubmit">
          <div class="form-inputs">
            <div>
              <!-- <label for="name">Name:</label> -->
              <input id="name" v-model="name" name="name" type="text" placeholder="Phone"/>
              <span>{{ nameError }}</span>
            </div>
            <div>
              <!-- <label for="phoneNumber">Phone Number:</label> -->
              <input id="phoneNumber" v-model="phoneNumber" name="telephone" autocorrect="off" autocomplete="tel" spellcheck="false" type="tel" placeholder="Name"/>
              <span>{{ phoneNumberError }}</span>
            </div>
            <div>
              <!-- <label for="email">Email Address:</label> -->
              <input id="email" v-model="email" type="email" name="email" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="Email"/>
              <span>{{ emailError }}</span>
            </div>
          </div>
          <p class="privacy-message">By clicking button "send" you agree to the privacy policy and data processing</p>
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

h2 {
  color: var(--green);
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

div.form-inputs {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap:  wrap;
  gap: 2.5rem;
  padding: 1.5rem 0;
  width: 100%;
  background: rgba(47, 47, 47, 1);
}

div.form-inputs div {
  width: min(300px, 600px);
}

input {
  padding: 1rem;
  width: min(250px, 100%);
}

#name {
  flex-grow: 2;
}

#email {
  flex: 1;
}

#phoneNumber {
  flex-grow: 2;
}

p.privacy-message {
  font-size: 0.75rem;
}

@media (min-width: 768px) {
  div.form-inputs {
    flex-direction: row;
  }
}
</style>