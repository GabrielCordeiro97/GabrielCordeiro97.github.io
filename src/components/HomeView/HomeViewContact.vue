<template>
  <div class="contact">
    <h1 class="contact__title" :class="{ lightMode: colorMode }">{{ $t("message.contactTitle") }}</h1>
    <h2 class="contact__subtitle" :class="{ lightMode: colorMode }">
      {{ $t("message.contactSubtitle") }}
    </h2>
    <div class="contact__wrapper">
      <form
        action="https://formsubmit.co/cordeiro.faria97@gmail.com"
        method="POST"
      >
        <div class="contact__form">
          <div class="contact__form-fields">
            <label class="contact__form-label" for="name" :class="{ lightMode: colorMode }">{{ $t("message.contactName") }}</label>
            <input
              class="contact__form-input"
              type="text"
              name="name"
              :placeholder="$t('message.contactNamePlaceholder')"
              required
              :class="{ lightMode: colorMode }"
            />
            <label class="contact__form-label" for="email" :class="{ lightMode: colorMode }">Email:</label>
            <input
              class="contact__form-input"
              type="email"
              name="email"
              :placeholder="$t('message.contactEmailPlaceholder')"
              required
              :class="{ lightMode: colorMode }"
            />

            <label class="contact__form-label" for="company" :class="{ lightMode: colorMode }">{{ $t("message.contactCompany") }}</label>
            <input
              class="contact__form-input"
              type="text"
              name="company"
              :placeholder="$t('message.contactCompanyPlaceholder')"
              :class="{ lightMode: colorMode }"
            />
          </div>
          <div class="contact__form-message">
            <label class="contact__form-label" for="message" :class="{ lightMode: colorMode }">{{ $t("message.contactMessage") }}</label>
            <textarea
              class="contact__form-input--textarea"
              name="message"
              :placeholder="$t('message.contactMessagePlaceholder')"
              cols="50"
              rows="12"
              required
              :class="{ lightMode: colorMode }"
            ></textarea>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://gabrielcordeiro97.github.io/"
            />
            <input type="hidden" name="_subject" value="New submission!" />
            <input type="text" name="_honey" style="display: none" />
            <input type="hidden" name="_template" value="basic" />
          </div>
        </div>
        <div class="contact__form-buttons">
          <button class="contact__form-buttons--submit" type="submit">
            {{ $t("message.contactSend") }}
          </button>
          <input
            class="contact__form-buttons--clear"
            type="reset"
            :value="$t('message.contactClear')"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeViewContact",
  props: {
    colorMode: {
      type: Boolean,
    },
  },
};
</script>

<style>
.contact__title {
  color: darkorange;
  text-align: center;
  margin-bottom: 0.5rem;
}
.contact__subtitle {
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: large;
  margin-bottom: 4rem;
}
.contact__form-fields {
  display: flex;
  flex-direction: column;
  width: 30%;
}
.contact__form-message {
  display: flex;
  flex-direction: column;
  width: 30%;
}
.contact__form-label {
  color: darkorange;
  font-weight: 600;
}
.contact__form {
  display: flex;
  justify-content: space-around;
}
.contact__form-input {
  margin-bottom: 3rem;
  background-color: rgb(172, 172, 172);
  padding: 10px;
}
.contact__form-input--textarea {
  margin-bottom: 1px;
  background-color: rgb(173, 173, 173);
  padding: 10px;
}
.contact__form-input::placeholder,
.contact__form-input--textarea::placeholder {
  color: rgb(184, 106, 10);
  font-weight: 500;
}
.contact__form-buttons {
  display: flex;
  justify-content: center;
}
.contact__form-buttons--submit,
.contact__form-buttons--clear {
  width: 20%;
  margin: 20px 3%;
  color: rgb(255, 140, 0);
  background-color: rgb(60, 60, 60);
  padding: 0.5rem;
}

.contact__form-buttons--submit:hover,
.contact__form-buttons--clear:hover {
  color: rgb(255, 187, 0);
  background-color: rgb(133, 133, 133);
}

.contact__channels {
  margin: 0 3rem 0 0;
}
.contact__channels-item {
  list-style: none;
}
.contact__channels-link {
  text-decoration: none;
  font-size: 2rem;
}

/* classes lightMode */
.contact__title.lightMode {
  color: rgb(70, 70, 70);
}
.contact__subtitle.lightMode {
  color: rgb(70, 70, 70);
}
.contact__form-label.lightMode {
  color: rgb(70, 70, 70);
}
.contact__form-input.lightMode {
  background-color: rgb(60, 60, 60);
  color: orange;
}
.contact__form-input--textarea.lightMode {
  background-color: rgb(60, 60, 60);
  color: orange;
}
</style>
