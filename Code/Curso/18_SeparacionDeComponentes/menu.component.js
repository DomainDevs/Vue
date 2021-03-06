_app.component(`menu-component`, {
    template: `<nav class="indigo darken-4">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">{{usuario}}</a></li>
      </ul>
    </div>
  </nav>
  <input type="text" v-model="miusuario">`,
  props:{
    usuario: String
  },
  data(){
    return {
      miusuario: this.usuario
    }
  }
});

///Las props no se pueden modificar, pero si las data. Por eso se crea la variabel miusuario