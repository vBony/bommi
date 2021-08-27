import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';
import System from '@/entities/System';

// Importando componentes
@Options({
  components: {
    HelloWorld,
  },
})

class Cadastro extends Vue {
    public system = new System() 

    data() {
        return {
            data: ''
        }
    }

    testeRequisicao(){
      const url = 'http://api.ubarber.com.br/teste'

      axios.post(url).then(json=>{
        this.system = json.data
      })

    }
}

export default Cadastro