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
        }
    }
    
}

const _app = Vue.createApp(app);