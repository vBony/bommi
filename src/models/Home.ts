import { Options, Vue } from 'vue-class-component';
import $ from 'jquery'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { prominent } from 'color.js'
import DocumentMixin from '@/mixins/DocumentMixin'
import System from '@/entities/System';

// Importando componentes
@Options({
  components: {
    HelloWorld,
  },
})

class Home extends Vue {
    public documentMixin = new DocumentMixin()
    public system = new System()
    public url_server = this.documentMixin.getUrlServer()

    beforeMount(){
        this.initSystem()
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

    initSystem(){
        const domain = this.$route.params.system

        $.ajax({
            type: "POST",
            url: this.documentMixin.getUrlServer()+ 'sistema/buscar',
            data: {domain:domain},
            beforeSend: function(){
                $(".loading-w-logo").fadeIn('fast')
            },
            complete:function(){
                $('.loading-w-logo').fadeOut('fast')
            },
            success: (response) => {
                if(response.sysData != undefined){
                    this.system = response.sysData
                }else{
                    this.$router.push('/nao-encontrado')
                }
            },
            dataType: 'json',
        });
    }
}

export default Home