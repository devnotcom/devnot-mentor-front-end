<template>
  <div class="container">
    <div class="row" style="height:100vh; align-items:center">
      <div class="col-md-6 background-wrapper"></div>
      <div
        class="col-md-6"
        style="margin:0px 30px; display:flex; justify-content:center"
      >
        <form action="">
          <h1>DEVNOT MENTOR KAYIT</h1>
          <div class="form-group">
            <label for="languages" class="form-item-label">
              Mentorluk verebileceğin dil kütüphane ve araçlar
            </label>
            <input type="text" name="languages" class="form-item-input" />
          </div>

          <div class="form-group">
            <label for="languages" class="form-item-label">
              Profilinde görünmesini istediğin açıklama
            </label>
            <input type="text" name="languages" class="form-item-input" />
          </div>

         
          <div class="form-group">
            <label for="languages" class="form-item-label">
              Çalıştığın pozisyon
            </label>
            <input type="text" name="languages" class="form-item-input" />
          </div>
           <div class="form-group">
            <label for="languages" class="form-item-label">
              Bulunduğun ülke
            </label>
            <input type="text" name="languages" class="form-item-input" />
          </div>
          <div class="form-group">
            <label for="languages" class="form-item-label">
              Github Hesabın
            </label>
            <input type="text" name="languages" class="form-item-input" />
          </div>
          <div class="form-group">
            <label for="languages" class="form-item-label">
              Linkedin Hesabın
            </label>
            <input type="text" name="languages" class="form-item-input" />
          </div>
          <div class="form-group">
            <button class="btn">Gönder</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background-wrapper {
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    300deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}
.form-item-input {
  width: 100%;
  border-radius: 10px;
  min-height: 40px;
  border: none;
  box-shadow: 1px 1px 3px 0px grey;
  margin: 10px 0px;
}
.form-group {
  margin-bottom: 32px;
}
.btn {
  min-width: 80px;
  min-height: 40px;
  border: none;
  box-shadow: 1px 0px 5px 0px grey;
  border-radius: 15px;
  background: none;
  cursor: pointer;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
