import { Options, Vue } from 'vue-class-component';
import $ from 'jquery'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { prominent } from 'color.js'

// Importando componentes
@Options({
  components: {
    HelloWorld,
  },
})

class Home extends Vue {
    data() {
        return {
            data: ''
        }
    }

    mounted(){
        this.setPredominantColorInFadeCovers()
        this.getAboutCardHeigth()
    }

    setPredominantColorInFadeCovers(){
        const img: any = $('#cover-img').attr('src')

        prominent(img, { amount: 2, format: 'hex' }).then(color => {
            let coverNumber = 1

            for(let i = 0; i < color.length; i++){
                $(`.fade-cover.${coverNumber++}`).css('background', `linear-gradient(to bottom, ${color[i]} 1%, #F7F7F7 20%)`)
            }
        })
    }

    getAboutCardHeigth(){
        const height = $("#about-box").css('height')
        $('#card-services-area').css('height', `${height}`)
    }
}

export default Home