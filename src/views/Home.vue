
<template>
    <div id="header-area">
        <div id="cover-area">
            <div class="fade-cover 1"></div>
            <div id="cover" class="content-area-cover">
                <img src="https://picsum.photos/1280/720?random=1" alt="" id="cover-img">
            </div>
            <div class="fade-cover 2"></div>
        </div>
        <div id="company-data-area" class="content-area">
            <div id="comp-photo-area">
                <img src="https://picsum.photos/500/300?random=2&grayscale" id="comp-photo">
            </div>
            <div id="company-data">
                <div>
                    <div id="comp-name-area">
                        <div id="comp-name">
                            <h1>Nome da empresa TESTE</h1>
                        </div>
                        <div id="rating-area">
                            <div id="rating"><span>5.0</span>/5</div>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div id="comp-uf">
                        Brazlândia - DF
                    </div>
                </div>
                <div class="btn-schedule">Agendar</div>
            </div>
        </div>
        <div id="menu-area-header" class="content-area">
            <div id="menu-h-opts-area">
                <div class="menu-h-opts">Sobre</div>
                <div class="menu-h-opts">Fotos</div>
                <div class="menu-h-opts">Avaliações</div>
            </div>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle btn-sm rating-btn-header" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-thumbs-up"></i> Avaliar
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#"><i class="fas fa-store-alt"></i> Avaliar barbearia</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-user-tie"></i> Avaliar funcionário</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="content-area box-content">
        <div class="row d-flex flex-wrap-reverse">
            <div class="col-sm-12 col-lg-8 col-md-8 services-card">
                <div id="head-services-area">
                    <div class="title-card-content outcard-title">Serviços</div>
                </div>

                <div id="card-services-area">
                    <div class="card-services card">
                        <div class="card-services-info-area">
                            <div class="card-services-title">Progressiva</div>
                            <div class="card-services-sub-title">Horarios disponíveis</div>
                            <div class="card-services-schedules-area">
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                            </div>
                        </div>

                        <div class="card-services-btn-area">
                            <div class="csba-price">R$<span>50,00</span></div>
                            <button type="button" class="btn btn-primary btn-sm btn-to-schedule">Agendar</button>
                        </div>
                    </div>

                    <div class="card-services card">
                        <div class="card-services-info-area">
                            <div class="card-services-title">Degradê</div>
                            <div class="card-services-sub-title">Horarios disponíveis</div>
                            <div class="card-services-schedules-area">
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                            </div>
                        </div>

                        <div class="card-services-btn-area">
                            <div class="csba-price">R$<span>50,00</span></div>
                            <button type="button" class="btn btn-primary btn-sm btn-to-schedule">Agendar</button>
                        </div>
                    </div>

                    <div class="card-services card">
                        <div class="card-services-info-area">
                            <div class="card-services-title">Sobrancelha</div>
                            <div class="card-services-sub-title">Horarios disponíveis</div>
                            <div class="card-services-schedules-area">
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                            </div>
                        </div>

                        <div class="card-services-btn-area">
                            <div class="csba-price">R$<span>50,00</span></div>
                            <button type="button" class="btn btn-primary btn-sm btn-to-schedule">Agendar</button>
                        </div>
                    </div>

                    <div class="card-services card">
                        <div class="card-services-info-area">
                            <div class="card-services-title">Barba</div>
                            <div class="card-services-sub-title">Horarios disponíveis</div>
                            <div class="card-services-schedules-area">
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                                <button type="button" class="btn btn-outline-secondary btn-sm cs-schedules">08:00</button>
                            </div>
                        </div>

                        <div class="card-services-btn-area">
                            <div class="csba-price">R$<span>50,00</span></div>
                            <button type="button" class="btn btn-primary btn-sm btn-to-schedule">Agendar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-lg-4 col-md-4 about-card">
                <div class="card-content card" id="about-box">
                    <div class="title-card-content">Sobre</div>
                    <div id="map-about">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.0079335924274!2d-49.10731124296936!3d-16.676163309271892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQwJzMzLjkiUyA0OcKwMDYnMTUuNCJX!5e0!3m2!1spt-BR!2sbr!4v1627947311648!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div id="info-area">
                        <div class="about-icon"> <i class="fas fa-info-circle"></i> </div>
                        <div id="text-ia" class="text-break"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                    <div class="about-child">
                        <div class="about-icon"> <i class="fas fa-phone"></i> </div>
                        <div class="about-text"><a href="#" class="link-about">(62) 99611-4399</a></div>
                    </div>
                    <div class="about-child" id="social-media-area">
                        <div class="sma-icons"> <i class="fab fa-facebook-square"></i></div>
                        <div class="sma-icons"> <i class="fab fa-instagram"></i> </div>
                        <div class="sma-icons"> <i class="fab fa-twitter-square"></i> </div>
                        <div class="sma-icons"> <i class="fab fa-youtube"></i> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style src="@/assets/css/home.css">
</style>
<style src="@/assets/css/normalize.css">
</style>

<!-- Importação do model -->
<script lang="ts">
  import Home from "@/models/Home"
  export default Home
</script>