import { defineStore } from "pinia";


export const useCounterStore = defineStore('counter',{
    state:()=>({
        counter:7,
        attempts:0,
        prizes:[
            'Car',
            'Baby',
            'Coffee',
            'Guitar',
            'Nothing :*('
        ],
        car:{
            brand:'',
            color:''
        }
    }),
    getters:{
        getCount(state){
            return state.counter
        },
        getPrize(state){
            let prize = '';
            
            for(let step=0;step < state.counter;step++){
                prize  = state.prizes[Math.floor(Math.random()*state.prizes.length)]
            }
            return prize
        }
    }
})