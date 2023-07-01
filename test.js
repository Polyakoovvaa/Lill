const App={
    data(){
        return{
            first_six:[
                {body:'Нежный букет из гортензии,эустомы и эвкалипта', price:'2500' , img: 'img/photo.png',},
                {body:'Стойкие букеты из нежных диантусов ', price:'5000' , img: 'img/photo2.png',},
                {body:'Необычный букет из разных сортов роз', price:'3500' , img: 'img/photo3.png',},

                {body:'Милый букет из маленьких ромашек', price:'2300' , img: 'img/photo4.png',},
                {body:'Яркие желтые розы ', price:'2400' , img: 'img/photo5.png',},
                {body:'Очень элегантный букет из роз', price:'1500' , img: 'img/photo6.png',},
            ],
            arrayTovarov: [
                {body:'Сладкие шарики пионов', price:'2200' , img: 'img/photo7.jpg',},
                {body:'Бокс с гортензиями, розами, хризантема', price:'4700' , img: 'img/photo8.png',},
                {body:'Букет для невесты с синими Каллами Лилия ', price:'2900' , img: 'img/photo9.png',},

                {body:'Букет из белоснежных лилий', price:'2900' , img: 'img/photo10.png',},
                {body:'Букет из пионов', price:'1450' , img: 'img/photo11.png',},
                {body:'Букет из роз,гортензий,маттиолы и эвкалипта', price:'5750' , img: 'img/photo12.png',},

                {body:'Милые комплименты с ароматной маттиолой', price:'3250' , img: 'img/photo13.png',},
                {body:'Букет из ромашек сорт - эхинацея', price:'2750' , img: 'img/photo14.png',},
                {body:'Стойкие букеты из нежных диантусов', price:'2500' , img: 'img/photo15.png',},

                {body:'Нежный букет с лилиями', price:'4050' , img: 'img/photo16.png',},
                {body:'Пионовидный микс для неё  ', price:'2650' , img: 'img/photo17.png',},
                {body:'Бокс с цветами + ароматная свеча', price:'2500' , img: 'img/photo18.png',},

                {body:'Букет из Ohara,лизиантус,роза и гортензия', price:'3250', img: 'img/photo19.png',},
                {body:'Колумбийские гортензии с пылу с жару ', price:'2705' , img: 'img/photo20.png',},
                {body:'Сладкие ранункулюсы по сказочной цене ', price:'2000' , img: 'img/photo21.png',},

                {body:'Ароматный взрыв маттиолы в букете', price:'3250' , img: 'img/photo22.png',},
                {body:'Букет из ранункулюсов со сладкими шариками', price:'2450' , img: 'img/photo23.png',},
                {body:'Ароматные розы «Мисти баблс» с эвкалиптом', price:'2300' , img: 'img/photo24.png',},

                {body:'Бокс в виде сердца с кустовыми розами', price:'2800', img: 'img/photo25.png',},
                {body:'Лукошко с гипсофилами', price:'1200' , img: 'img/photo26.png',},
                {body:'Ярко красный букет невесты из лилий', price:'2500' , img: 'img/photo27.png',},

                {body:'Купаж маттиолы и кустовой мисти баблс', price:'3250' , img: 'img/photo28.png',},
                {body:'Трендовые цветы в сумке', price:'2750' , img: 'img/photo29.png',},
                {body:'Милый бокс с гипсофилами', price:'2500', img: 'img/photo30.png',},

                {body:'Микс лилий и гипфсофил', price:'3250' , img: 'img/photo31.png',},
                {body:'Коробка + цветы + свечи ', price:'2750' , img: 'img/photo32.png',},
                {body:'Коробка с гипсофилами', price:'1350' , img: 'img/photo33.png',},


                {body:'Total white роз', price:'3250' , img: 'img/photo34.png',},
                {body:'Яркий бокс розовых роз ', price:'2750' , img: 'img/photo35.png',},
                {body:'Коробка + цветы + 2 свечки', price:'2500' , img: 'img/photo36.png',},

                {body:'Бокс с гипсофоилами', price:'1750' , img: 'img/photo37.png',},
                {body:'Бокс с диантусами ', price:'1950' , img: 'img/photo38.png',},
                {body:'Бокс с гипсофилами', price:'3850' , img: 'img/photo39.png',},

                {body:'Сборный бокс ', price:'3000' , img: 'img/photo40.png',},
                {body:'Букет из розовых гвоздик ', price:'2450' , img: 'img/photo41.png',},
                {body:'Кулёк с красными розами', price:'1200' , img: 'img/photo42.png',},

                {body:'Букет из диантусов', price:'2310' , img: 'img/photo43.png',},
                {body:'Букет из сухоцветов - богемный стиль ', price:'3850' , img: 'img/photo44.png',},
                {body:'Букет из сухоцветов - морской бриз ', price:'2550' , img: 'img/photo45.png',},

                {body:'Бокс c гипсофилой', price:'2150' , img: 'img/photo46.png',},
                {body:'Бокс с гипсофилой', price:'3850' , img: 'img/photo47.png',},
                {body:'Бокс с гвоздиками и эвкалиптом', price:'1950' , img: 'img/photo48.png',},

                {body:'Свадебный букет', price:'2600' , img: 'img/photo49.png',},
                {body:'Свадебный букет', price:'2600' , img: 'img/photo50.png',},
                {body:'Свадебный букет', price:'2750' , img: 'img/photo51.png',},

                {body:'Свадебный букет', price:'2650' , img: 'img/photo52.png',},
                {body:'Открытка', price:'50' , img: 'img/photo53.png',},
                {body:'Открытка', price:'50' , img: 'img/photo54.png',},

                {body:'Открытка', price:'50' , img: 'img/photo55.png',},
                {body:'Открытка', price:'50' , img: 'img/photo56.png',},
                {body:'Открытка', price:'50' , img: 'img/photo57.png',},

                {body:'Открытка', price:'50' , img: 'img/photo58.png',},
                {body:'Открытка', price:'50' , img: 'img/photo59.png',},
                {body:'Открытка', price:'50' , img: 'img/photo60.png',},

                {body:'Открытка', price:'50' , img: 'img/photo61.png',},
                {body:'Открытка', price:'50' , img: 'img/photo62.png',},
                {body:'Открытка', price:'50' , img: 'img/photo63.png',},

                {body:'Открытка', price:'50' , img: 'img/photo64.png',},

            ],
            selectOption:'',
            sortOption:[
                {value: '1', name:'до 3000'},
                {value: '2', name:'от 3000 до 5000'},
                {value: '3', name:'от 5000'},
            ],
            openAll:false,
            searchValue:'',

        }
    },
    methods:{
        showCards(){
            for (let i=0;i<this.arrayTovarov.length;i++){
                this.first_six.push(this.arrayTovarov[i])
            }
            this.openAll=true
        },

    },
    computed:{
        sortCards(){
            if (this.selectOption === '1') {
                if (this.first_six.length>6){
                    let new_arr=[]
                    new_arr=[...this.first_six]
                    this.openAll=true
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)>=3000){
                            new_arr.splice(j,1)
                            j=0

                        }
                    }
                    return new_arr
                }
                else{
                    let new_arr=[]
                    new_arr=[...this.first_six]
                    this.openAll=true
                    for (let i=0;i<this.arrayTovarov.length;i++){
                        new_arr.push(this.arrayTovarov[i])
                    }
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)>=3000){
                            new_arr.splice(j,1)
                            j=0

                        }
                    }
                    return new_arr
                }


            }
            if (this.selectOption === '2') {
                if (this.first_six.length>6){
                    let new_arr=[]
                    new_arr=[...this.first_six]
                    this.openAll=true
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)<3000 ||Number(new_arr[j].price)>5000){
                            new_arr.splice(j,1)
                            j=0

                        }
                    }
                    return new_arr
                }
                else{
                    let new_arr=[]
                    new_arr=[...this.first_six]
                    this.openAll=true
                    for (let i=0;i<this.arrayTovarov.length;i++){
                        new_arr.push(this.arrayTovarov[i])
                    }
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)<3000 ||Number(new_arr[j].price)>5000){
                            new_arr.splice(j,1)
                            j=0

                        }
                    }
                    return new_arr
                }


            }
            if (this.selectOption === '3') {
                if (this.first_six.length>6){
                    let new_arr=[]
                    new_arr=[...this.first_six]
                    this.openAll=true
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)<5000){
                            new_arr.splice(j,1)
                            j=0

                        }
                    }
                    return new_arr
                }
                else{
                    let new_arr=[]
                    new_arr=[...this.first_six]
                    this.openAll=true
                    for (let i=0;i<this.arrayTovarov.length;i++){
                        new_arr.push(this.arrayTovarov[i])
                    }
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)<5000){
                            new_arr.splice(j,1)
                            j=0

                        }
                    }
                    return new_arr
                }

            }
            if(this.selectOption==='') {
                return this.first_six

            }
        },
        sortedAndSearchCards(){
            return this.sortCards.filter(p=>p.body.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
        },
    }
}
const app1 = Vue.createApp(App)
app1.mount('#app')