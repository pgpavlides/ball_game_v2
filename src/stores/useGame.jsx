import {create} from 'zustand';

 export default create((set)=>{


    return {
        count: 100,
        blocksPerRow: 7,
        blockSpacing: 4,


        phase:'ready',

        start: ()=>{
            set(()=>{
                return {
                    phase: 'playing'
                }
            })
        },
        

        restart: ()=>{
            set(()=>{
                return {
                    phase: 'ready'
                }
            })
        },
        

        end: ()=>{
            set(()=>{
                return {
                    phase: 'ended'
                }
            })
        },
    }


 })