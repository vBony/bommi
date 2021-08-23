import { Vue } from 'vue-class-component';
import axios from 'axios';


class About extends Vue {
    dataTexto!: string;
    
    data() {
        return {
            dataTexto: ''
        }
    }

    // Método
    requisicao(){
        axios.get('http://localhost:8012/teste')
        .then( (response: any) => {
            this.dataTexto = response.data.resp
        });
    }
}

export default About