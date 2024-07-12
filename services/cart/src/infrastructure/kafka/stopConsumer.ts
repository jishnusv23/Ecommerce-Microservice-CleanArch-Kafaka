import { consumer } from ".";

export const stopConsumer=async()=>{
    try{
        console.log('StoppinConsumer->>>>>>🤺')
        await consumer.stop()
        await consumer.disconnect()
        console.log('stoped-<><><><><><>')
    }catch(error:any){
        console.error('Soemthing wrong in stopConsumer',error)
        throw new Error(error?.message)
        
    }
}