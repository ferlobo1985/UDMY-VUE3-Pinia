import { defineStore } from "pinia";
import axios from 'axios';


export const useCounterStore = defineStore('counter',{
    state:()=>({
        posts:[],
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
        getAttempts(state){
            return state.attempts
        },
        getPrize(state){
            let prize = '';
            state.attempts++;
            console.log(this.getAttempts)

            for(let step=0;step < state.counter;step++){
                prize  = state.prizes[Math.floor(Math.random()*state.prizes.length)]
            }
            return prize
        }
    },
    actions:{
        add(){
            this.counter++
        },
        subtract(){
            this.counter--
        },
        async getPosts(limit){
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
                this.add();
                console.log(this.getCount)
                this.posts = response.data;
            } catch(error){
                console.log(error)
            }
        }
    }
})