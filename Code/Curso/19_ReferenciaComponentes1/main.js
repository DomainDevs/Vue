const app = {
    data(){
        return {
            usuario: 'code',
            correo: '',
            clave: '',
            nombre: 'José'
        }
    },
    methods:{
        llamarSaludoDesdeHijo()
        {
            this.$refs.menuComponent.saludarDesdeHijo(this.nombre);
            this.$refs.menuComponent.miusuario = this.nombre; //Cambiar propiedad
        }
    }
    
}

const _app = Vue.createApp(app);